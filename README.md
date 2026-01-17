# WorkAlign

**WorkAlign** is an AI-powered recruitment platform designed for **both candidates and recruiters**, enabling smart resume analysis, intelligent job matching, and ranked candidate shortlisting using AI.

The platform bridges the gap between **candidate skills** and **recruiter job requirements** by using AI-driven matching logic instead of manual screening.

---

## 🚀 Overview

Hiring today is slow, manual, and error-prone.  
Candidates struggle to understand where they fit, while recruiters spend hours filtering resumes.

**WorkAlign solves this problem by:**
- Helping **candidates** analyze and improve resume alignment
- Helping **recruiters** match jobs with the most relevant candidates
- Providing **AI-based candidate ranking** instead of raw resume dumps

This creates a **two-sided intelligent hiring ecosystem**.

---

## 🧠 Core Features

### 👤 Candidate Side
- AI-powered resume analysis
- Skill extraction and role suitability insights
- Resume–job alignment scoring
- Transparent feedback (why a role fits or not)

### 🧑‍💼 Recruiter Side
- AI-powered job matching with candidates
- Automated candidate ranking based on relevance
- Reduced manual screening effort
- Data-driven shortlisting decisions

### 🤖 AI Capabilities
- NLP-based resume understanding
- Job description parsing
- Skill & experience alignment
- Ranking logic using AI + rules (extensible)

---

## 🏗️ Tech Stack

### Frontend
- **Next.js**
- **Tailwind CSS**
- Component-based UI
- Modern responsive design

### Backend
- **Node.js** (API / integration layer)
- **FastAPI (Python)** for AI services

### AI / ML
- Resume parsing & text analysis
- Embedding-based similarity matching
- Ranking & scoring logic

### Data
- JSON-based candidate data (current)
- Database integration ready (future)

---

## 📂 Project Structure

```text
workalign/
│── api/                # Backend API routes
│── components/         # Reusable frontend components
│── data/               # Sample & processed data
│── employee/           # Candidate-side pages & logic
│── recruiter/          # Recruiter-side pages & logic
│── select-role/        # Role selection flow
│── sign-in/            # Authentication UI
│── sign-up/            # Registration UI
│── main.py             # FastAPI backend entry point
│── candidates.json     # Sample candidate dataset
│── globals.css         # Global styles
│── layout.tsx          # App layout
│── page.tsx            # Landing page
│── README.md
⚙️ Setup Instructions
1️⃣ Clone the repository
bash
Copy code
git clone https://github.com/SejalMukane/workalign.git
cd workalign
2️⃣ Frontend setup
bash
Copy code
npm install
npm run dev
3️⃣ Backend (FastAPI) setup
bash
Copy code
pip install -r requirements.txt
uvicorn main:app --reload
🧪 Current Status
 Candidate resume analysis

 Recruiter job–candidate matching

 Candidate ranking system

 Dual-role platform (candidate + recruiter)

 Advanced AI scoring

 Database-backed persistence

 SaaS deployment

🔮 Future Enhancements
Multi-role hiring support

SaaS-ready authentication & billing

AI-based job recommendations for candidates


📌 Design Philosophy
WorkAlign is built with a balanced AI approach:

AI assists decisions, not replaces humans

Transparent ranking over black-box outputs

Scalable architecture for SaaS evolution

The goal is efficient, fair, and data-driven hiring.

👤 Author
Sejal Mukane
GitHub: https://github.com/SejalMukane

