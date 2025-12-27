"use client";

import { useState, useRef } from "react";
import { UploadCloud, Loader2, X, CheckCircle, FileText } from "lucide-react";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function ResumeUploadForm() {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const { userId } = useAuth();

  const validateAndSetFile = (f: File | null | undefined) => {
    if (!f) return;
    if (f.size > 5 * 1024 * 1024) {
      setError("File too large. Max 5MB.");
      setFile(null);
      return;
    }
    if (f.type !== "application/pdf") {
      setError("Only PDF files allowed.");
      setFile(null);
      return;
    }
    setFile(f);
    setError(null);
    setIsSuccess(true);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!file) return setError("Please upload a PDF.");
    if (!userId) return setError("User not logged in.");

    setIsUploading(true);
    setError(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/analyze`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || "Error analyzing resume.");
      }

      // 🌟 Store result safely
      sessionStorage.setItem("analysis", JSON.stringify(data));

      router.push("/employee/result");
    } catch (err: any) {
      setError(err.message || "Something went wrong.");
    }

    setIsUploading(false);
  };

  const handleCancel = () => {
    setFile(null);
    setIsSuccess(false);
    setError(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    // Card Container - Matches the Editorial Theme
    <div className="w-full max-w-xl rounded-[2.5rem] bg-white p-10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-stone-200 transition-all hover:shadow-[0_25px_50px_-12px_rgba(46,2,73,0.1)]">
      
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-[#2e0249] tracking-tight">Upload Resume</h2>
        <p className="text-stone-500 mt-2 text-sm">We accept PDF formats up to 5MB.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <label
          htmlFor="resume-upload"
          className={`relative group flex w-full flex-col items-center justify-center rounded-3xl border-2 border-dashed p-12 text-center cursor-pointer transition-all duration-300
            ${isDragging 
              ? "border-[#2e0249] bg-purple-50/50 scale-[1.02]" 
              : "border-stone-300 hover:border-purple-300 hover:bg-stone-50"
            } 
            ${isSuccess ? "border-green-400 bg-green-50/30" : "bg-white"}
          `}
          onDragEnter={(e) => { e.preventDefault(); setIsDragging(true); }}
          onDragLeave={(e) => { e.preventDefault(); setIsDragging(false); }}
          onDrop={(e) => {
            e.preventDefault();
            setIsDragging(false);
            validateAndSetFile(e.dataTransfer.files?.[0]);
          }}
        >
          {!file ? (
            <div className="flex flex-col items-center">
              {/* Icon Container */}
              <div className={`h-16 w-16 mb-4 rounded-2xl flex items-center justify-center transition-colors ${isDragging ? "bg-[#2e0249] text-white" : "bg-purple-50 text-[#2e0249]"}`}>
                <UploadCloud className="h-8 w-8" />
              </div>
              
              <p className="text-lg font-bold text-[#2e0249]">
                Drag & drop your resume
              </p>
              <p className="text-sm text-stone-500 mt-1">
                or <span className="font-semibold text-purple-700 underline decoration-purple-200 underline-offset-2">browse files</span>
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-center w-full animate-fade-in-up">
              <button
                type="button"
                onClick={(e) => { e.preventDefault(); handleCancel(); }}
                className="absolute top-4 right-4 p-2 rounded-full text-stone-400 hover:text-red-500 hover:bg-red-50 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
              
              <div className="h-16 w-16 mb-4 rounded-full bg-green-100 flex items-center justify-center text-green-600 shadow-sm">
                <CheckCircle className="h-8 w-8" />
              </div>
              
              <p className="text-lg font-bold text-[#2e0249]">Ready to Analyze!</p>
              
              {/* File Name Chip */}
              <div className="mt-3 flex items-center gap-2 px-4 py-2 bg-white border border-stone-200 rounded-lg shadow-sm">
                <FileText size={16} className="text-purple-600"/>
                <span className="text-sm font-medium text-stone-600 break-all max-w-[200px] truncate">
                  {file.name}
                </span>
              </div>
            </div>
          )}
        </label>

        <input
          type="file"
          ref={fileInputRef}
          id="resume-upload"
          className="hidden"
          accept="application/pdf"
          onChange={(e) => validateAndSetFile(e.target.files?.[0])}
        />

        {error && (
          <div className="flex items-center justify-center gap-2 text-sm text-red-600 bg-red-50 py-2 rounded-lg border border-red-100">
             <X size={14} /> {error}
          </div>
        )}

        <button
          type="submit"
          disabled={isUploading || !file || !!error}
          className="w-full relative overflow-hidden rounded-xl bg-[#2e0249] px-6 py-4 text-white font-bold shadow-lg shadow-purple-900/20 transition-all hover:bg-[#4a1d96] hover:scale-[1.01] hover:shadow-xl disabled:bg-stone-300 disabled:shadow-none disabled:scale-100 disabled:cursor-not-allowed group"
        >
          {isUploading ? (
            <span className="flex items-center justify-center gap-2">
              <Loader2 className="h-5 w-5 animate-spin" />
              Running Analysis...
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              Analyze My Resume
              {/* Subtle arrow animation on hover */}
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
          )}
        </button>
      </form>
    </div>
  );
}