import Navbar from "@/app/components/Navbar";
import ResumeUploadForm from "@/app/components/ResumeUploadForm";
import { Sparkles } from "lucide-react";

export default function CandidatePage() {
  return (
    // 1. THEME: Warm Beige Background
    <main className="relative min-h-screen bg-[#FDFBF7] flex flex-col items-center overflow-hidden selection:bg-purple-200 selection:text-purple-900">
      
      {/* 2. AMBIENT BACKGROUND GLOW */}
      <div className="fixed inset-0 z-0 pointer-events-none">
         <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-200/20 rounded-full blur-[100px] mix-blend-multiply opacity-60" />
         <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-stone-200/40 rounded-full blur-[100px] mix-blend-multiply opacity-60" />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center">
        <Navbar />

        {/* 3. HERO SECTION */}
        <div className="flex flex-1 flex-col items-center justify-center p-6 text-center mt-12 md:mt-20 max-w-4xl mx-auto">
          
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-stone-200 text-purple-800 text-xs font-bold uppercase tracking-widest shadow-sm animate-fade-in-up">
             <Sparkles size={14} className="text-purple-600" />
             AI-Powered Career Analysis
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-black text-[#2e0249] tracking-tight mb-6 drop-shadow-sm animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            Unlock Your Potential
          </h1>
          
          {/* Description */}
          <p className="max-w-2xl text-lg md:text-xl text-stone-600 leading-relaxed font-medium mb-12 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            Upload your resume and let our <span className="text-[#2e0249] font-bold">Deep Learning Engine</span> analyze your skills to uncover your strengths and bridge your gaps.
          </p>

          {/* 4. THE UPLOAD COMPONENT */}
          <div className="w-full flex justify-center animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <ResumeUploadForm />
          </div>
          
          {/* Footer Trust */}
          <div className="mt-16 flex items-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
             <p className="text-xs text-stone-400 font-bold tracking-widest uppercase">
                Trusted by Top Candidates
             </p>
          </div>
        </div>
      </div>
    </main>
  );
}