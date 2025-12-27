import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();

    // CALL FASTAPI /match-job-ai
    const fastapiRes = await fetch("http://localhost:8000/match-job-ai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await fastapiRes.json();

    // If FastAPI returns list directly:
    return NextResponse.json({
      success: true,
      candidates: data,
    });

  } catch (error) {
    console.error("MATCH-CANDIDATE API ERROR:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch AI matches" },
      { status: 500 }
    );
  }
}
