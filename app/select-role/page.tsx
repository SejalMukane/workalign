import Link from 'next/link';
import { Briefcase, User, Sparkles, ArrowRight } from 'lucide-react';

export default function SelectRolePage() {
  return (
    // 1. THEME: Warm Beige Background
    <main className="relative min-h-screen bg-[#FDFBF7] flex flex-col items-center overflow-hidden selection:bg-purple-200 selection:text-purple-900">
      
      {/* 2. AMBIENT BACKGROUND GLOW */}
      <div className="fixed inset-0 z-0 pointer-events-none">
         <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-200/20 rounded-full blur-[100px] mix-blend-multiply opacity-60 animate-blob" />
         <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-stone-200/40 rounded-full blur-[100px] mix-blend-multiply opacity-60 animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col items-center">
        
        {/* 3. LOGO HEADER */}
        <Link href="/" className="mt-12 group flex items-center gap-3 transition-transform hover:scale-[1.02]">
           <div className="p-2.5 bg-white rounded-xl border border-stone-200 shadow-sm group-hover:border-purple-200 transition-colors">
              <Briefcase className="h-6 w-6 text-[#2e0249]" />
           </div>
           <span className="text-2xl font-black text-[#2e0249] tracking-tight">
              WorkAlign
           </span>
        </Link>

        {/* 4. MAIN CONTENT */}
        <div className="flex flex-1 flex-col items-center justify-center text-center mt-16 md:mt-24">
          
          <div className="animate-fade-in-up">
            <div className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-stone-200 text-purple-800 text-xs font-bold uppercase tracking-widest shadow-sm">
               <Sparkles size={14} className="text-purple-600" />
               Get Started
            </div>

            <h1 className="text-5xl md:text-6xl font-black text-[#2e0249] tracking-tight mb-6 drop-shadow-sm">
               How are you joining us?
            </h1>
            <p className="max-w-xl mx-auto text-lg text-stone-600 leading-relaxed font-medium">
               Select your role to access your personalized dashboard.
            </p>
          </div>

          {/* 5. THE ROLE CARDS */}
          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 w-full max-w-4xl animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            
            {/* --- CARD 1: CANDIDATE --- */}
            <Link 
              href="/employee/main_page" 
              className="group relative flex flex-col items-center rounded-[2.5rem] bg-white p-10 md:p-14 text-center border border-stone-200 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] transition-all duration-300 hover:border-[#2e0249] hover:shadow-[0_20px_40px_-10px_rgba(46,2,73,0.1)] hover:-translate-y-1"
            >
              {/* Icon Container */}
              <div className="mb-6 h-20 w-20 rounded-3xl bg-purple-50 border border-purple-100 flex items-center justify-center text-[#2e0249] transition-all duration-300 group-hover:bg-[#2e0249] group-hover:text-white group-hover:scale-110">
                 <User size={32} />
              </div>

              <h2 className="text-2xl font-bold text-[#2e0249] mb-3">
                I am a Candidate
              </h2>
              <p className="text-stone-500 leading-relaxed mb-8">
                I want to analyze my resume, check my ATS score, and find tailored job matches.
              </p>

              {/* Action Button Lookalike */}
              <div className="mt-auto flex items-center gap-2 text-sm font-bold text-purple-700 uppercase tracking-widest group-hover:text-[#2e0249] transition-colors">
                 Continue <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            {/* --- CARD 2: RECRUITER --- */}
            <Link 
              href="/recruiter/main_page" 
              className="group relative flex flex-col items-center rounded-[2.5rem] bg-white p-10 md:p-14 text-center border border-stone-200 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] transition-all duration-300 hover:border-[#2e0249] hover:shadow-[0_20px_40px_-10px_rgba(46,2,73,0.1)] hover:-translate-y-1"
            >
              {/* Icon Container */}
              <div className="mb-6 h-20 w-20 rounded-3xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-700 transition-all duration-300 group-hover:bg-[#2e0249] group-hover:text-white group-hover:scale-110">
                 <Briefcase size={32} />
              </div>

              <h2 className="text-2xl font-bold text-[#2e0249] mb-3">
                I am a Recruiter
              </h2>
              <p className="text-stone-500 leading-relaxed mb-8">
                I want to post jobs, manage applications, and find top talent efficiently.
              </p>

              {/* Action Button Lookalike */}
              <div className="mt-auto flex items-center gap-2 text-sm font-bold text-amber-700 uppercase tracking-widest group-hover:text-[#2e0249] transition-colors">
                 Continue <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

          </div>
        </div>
      </div>
    </main>
  );
}