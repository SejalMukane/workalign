import os
import json
import fitz  # PyMuPDF
from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import google.generativeai as genai
from dotenv import load_dotenv
from pymongo import MongoClient
# ------------------------
# LOAD ENV
# ------------------------

load_dotenv()
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))
MODEL_NAME = "gemini-2.5-flash"

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ------------------------
# PDF → TEXT
# ------------------------
def extract_text_from_pdf(path):
    try:
        text = ""
        doc = fitz.open(path)
        for page in doc:
            text += page.get_text()
        return text
    except Exception as e:
        print("PDF ERROR:", e)
        return ""


# ------------------------
# Normalize suggested_courses
# ------------------------
def normalize_suggested_courses(raw):
    safe_list = []

    if not isinstance(raw, list):
        return safe_list

    for item in raw:

        # Case 1: item is a string
        if isinstance(item, str):
            safe_list.append({
                "keyword": item,
                "courses": []
            })
            continue

        # Case 2: item is dict but incomplete
        if isinstance(item, dict):
            keyword = item.get("keyword")
            if not keyword:
                continue

            courses = item.get("courses", [])
            if not isinstance(courses, list):
                courses = []

            safe_list.append({
                "keyword": keyword,
                "courses": courses
            })

    return safe_list


# ------------------------
# Gemini Analysis
# ------------------------
PROMPT = """
You are an expert ATS Resume Analyzer.

Extract:
- summary
- strengths
- weaknesses
- recommendations
- skills grouped under programming, frontend, backend, databases
- missing_keywords
- suggested_courses (list of { keyword, courses[] })
- ats_score (1–10)
- skill_gap_map (will be overwritten by backend)

Return ONLY JSON.
"""

def analyze_with_gemini(text):
    response = genai.GenerativeModel(MODEL_NAME).generate_content(
        [{"role": "user", "parts": [{"text": PROMPT + "\n\nResume:\n" + text}]}]
    )

    try:
        raw = response.text
        json_str = raw[raw.index("{"): raw.rindex("}") + 1]
        return json.loads(json_str)
    except Exception:
        print("⚠️ RAW OUTPUT:", response.text)
        return None


# ------------------------
# Skill Heatmap
# ------------------------
def calculate_skill_score(skill, resume_text):
    resume = resume_text.lower()
    sk = skill.lower()

    if sk in resume:
        return 1.0

    partial = ["reactjs", "js", "ml", "ai", "deep learning", "express"]
    if any(p in resume for p in partial):
        return 0.4

    return 0.0


def generate_heatmap(resume_text):
    important_skills = [
        "Python", "JavaScript", "React", "Node", "SQL",
        "Machine Learning", "FastAPI", "AWS", "MongoDB",
        "Deep Learning", "Frontend", "Backend"
    ]

    heatmap = []
    for s in important_skills:
        heatmap.append({
            "skill": s,
            "score": round(calculate_skill_score(s, resume_text), 2)
        })

    return heatmap


# ------------------------
# MAIN ENDPOINT
# ------------------------
@app.post("/analyze")
async def analyze_resume(file: UploadFile = File(...)):
    print("📄 Analyzing resume...")

    temp_path = "temp.pdf"
    with open(temp_path, "wb") as f:
        f.write(await file.read())

    text = extract_text_from_pdf(temp_path)
    if not text.strip():
        return {"error": "Could not extract text"}

    ai = analyze_with_gemini(text)
    if not ai:
        return {"error": "AI failed to parse JSON"}

    # Force consistent structure
    ai["suggested_courses"] = normalize_suggested_courses(
        ai.get("suggested_courses", [])
    )

    # Add heatmap
    ai["skill_gap_map"] = generate_heatmap(text)

    print("🔥 FINAL AI RESULT READY")
    return ai

@app.post("/match-job-ai")
async def match_job_ai(data: dict):
    """
    AI-powered candidate–job matching using Gemini.
    """

    # -------------------
    # LOAD CANDIDATE DATA
    # -------------------
    import json

    try:
        with open("candidates.json", "r") as f:
            candidates = json.load(f)
    except Exception as e:
        print("CANNOT LOAD CANDIDATES:", e)
        return {"error": "Candidates data missing"}

    job_description = data.get("jobDescription", "")
    required_skills = data.get("skills", "")

    model = genai.GenerativeModel(MODEL_NAME)

    results = []

    for c in candidates:

        prompt = f"""
You are an ATS AI assistant.

Match this candidate to the job description.

Return JSON only:
{{
  "score": number (0-10),
  "reason": string
}}

----------------
JOB DESCRIPTION:
{job_description}

REQUIRED SKILLS:
{required_skills}

----------------
CANDIDATE:
Name: {c.get("name")}
Summary: {c.get("summary")}
Skills: {c.get("skills")}
Experience: {c.get("experience")}
----------------
"""

        try:
            response = model.generate_content(prompt)
            raw = response.text
            json_str = raw[raw.index("{"): raw.rindex("}") + 1]
            ai_match = json.loads(json_str)

            results.append({
                "name": c.get("name"),
                "summary": c.get("summary"),
                "skills": c.get("skills"),
                "experience": c.get("experience"),
                "score": ai_match.get("score", 0),
                "reason": ai_match.get("reason", "")
            })

        except Exception as e:
            print("AI MATCH ERROR:", e)

    # sort by descending score
    results = sorted(results, key=lambda x: x["score"], reverse=True)

    return results[:5]
