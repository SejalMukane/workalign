WorkAlign — AI Powered Recruitment Platform

WorkAlign is an AI-driven recruitment platform that helps candidates and recruiters make smarter hiring decisions through resume intelligence, semantic matching, and AI ranking.

It creates a two-sided intelligent hiring ecosystem where:

• Candidates understand their career alignment
• Recruiters discover the most relevant talent instantly

🚀 Product Overview

Hiring today is slow, manual, and error-prone.

WorkAlign replaces keyword matching with AI semantic understanding to:

• Analyze resumes
• Parse job descriptions
• Score alignment
• Rank candidates intelligently

🖥️ Product Walkthrough
🏠 Landing Page
<p align="center"> <img src="screenshots/Landing_page.png" width="90%"> </p>

The landing page introduces WorkAlign and directs users into the AI hiring workflow.

👤 Role Selection (Candidate / Recruiter)
<p align="center"> <img src="screenshots/Select_Role.png" width="90%"> </p>

Users choose their role to access a personalized dashboard.

📄 Candidate — Resume Analysis
<p align="center"> <img src="screenshots/Candidate_page.png" width="90%"> </p>

AI analyzes the resume and generates:

• Professional profile summary
• ATS optimization score
• Strengths & improvement areas
• Skill fingerprint extraction

💡 Candidate — Strategic Recommendations & Skill Match
<p align="center"> <img src="screenshots/Candidate_page2.png" width="90%"> </p>

Provides actionable insights to improve resume alignment and job readiness.

🧑‍💼 Recruiter — Talent Discovery Dashboard
<p align="center"> <img src="screenshots/Recruiter_page.png" width="90%"> </p>

Recruiters can input job requirements and get ranked candidate matches instantly.

🧠 Core Features
👤 Candidate Side

• AI Resume Analysis
• Skill Extraction & Role Fit
• ATS Optimization Score
• Transparent Improvement Feedback

🧑‍💼 Recruiter Side

• AI Job → Candidate Matching
• Intelligent Candidate Ranking
• Reduced Manual Screening
• Data-Driven Shortlisting

🤖 AI Capabilities

• NLP-based Resume Understanding
• Job Description Parsing
• Embedding Similarity Matching
• AI + Rule-Based Ranking Engine

🏗️ Tech Stack
Frontend

• Next.js
• Tailwind CSS
• Component-based Architecture

Backend

• Node.js (API / integration layer)
• FastAPI (Python) for AI services

AI / ML

• Resume parsing & text analysis
• Embedding-based similarity matching
• Ranking & scoring logic

Data

• JSON-based candidate data (current)
• Database integration ready (future)

📂 Project Structure
WORKALIGN/
│
├── app/                     # Next.js App Router
│   ├── api/                 # API routes (Node integration layer)
│   ├── components/          # Reusable UI components
│   ├── data/                # Static/sample data
│   ├── employee/            # Candidate side pages
│   ├── recruiter/           # Recruiter side pages
│   ├── select-role/         # Role selection flow
│   ├── sign-in/             # Authentication pages
│   ├── sign-up/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx             # Landing page
│
├── backend/                 # FastAPI AI services
│   ├── main.py              # FastAPI entry point
│   ├── candidates.json      # Sample candidate dataset
│   └── __pycache__/
│
├── screenshots/             # README images
├── public/                  # Static assets
├── lib/                     # Utility functions
├── tmp/                     # Temporary files
│
├── .env.local
├── .gitignore
├── eslint.config.mjs
└── package.json


⚙️ Setup Instructions
1️⃣ Clone the repository
bash
Copy code
git clone https://github.com/SejalMukane/workalign.git
git clone https://github.com/SejalMukane/workalign.git
cd workalign

💻 Frontend Setup (Next.js)
npm install
npm run dev


App runs on → http://localhost:3000

🧠 Backend Setup (FastAPI AI Services)
Step 1 — Create virtual environment

Windows

python -m venv venv


Mac / Linux

python3 -m venv venv

Step 2 — Activate virtual environment

Windows (PowerShell)

venv\Scripts\activate


Mac / Linux

source venv/bin/activate

Step 3 — Install dependencies
pip install -r requirements.txt

Step 4 — Move to backend folder
cd backend

Step 5 — Run FastAPI server
uvicorn main:app --reload


Backend runs on → http://127.0.0.1:8000

🧪 Current Status

✅ Candidate resume analysis
✅ Recruiter job–candidate matching
✅ Candidate ranking system
✅ Dual-role platform

🔜 Database-backed persistence
🔜 SaaS deployment

🔮 Future Enhancements

• AI job recommendations for candidates
• Multi-role hiring support
• SaaS authentication & billing
• Cloud deployment

🎯 Design Philosophy

WorkAlign follows a Human-Centered AI approach

• AI assists decisions, not replaces humans
• Transparent ranking over black-box outputs
• Scalable SaaS-ready architecture

👩‍💻 Author

Sejal Mukane
GitHub → https://github.com/SejalMukane