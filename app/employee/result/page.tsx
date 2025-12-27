// "use client";

// import { useEffect, useState } from "react";
// import Navbar from "@/app/components/Navbar";
// import {
//   User,
//   Lightbulb,
//   Briefcase,
//   BookOpen,
//   Award,
//   Sparkles,
//   BarChart3,
//   Check,
//   X,
//   Printer,
//   Copy,
//   CheckCircle,
// } from "lucide-react";

// export default function ResultsPage() {
//   const [result, setResult] = useState<any | null>(null);
//   const [copiedKeyword, setCopiedKeyword] = useState<string | null>(null);

//   useEffect(() => {
//     const stored = sessionStorage.getItem("analysis");
//     if (stored) {
//       try {
//         setResult(JSON.parse(stored));
//       } catch {
//         console.error("Invalid JSON in sessionStorage");
//       }
//     }
//   }, []);

//   // Function to handle printing
//   const handlePrint = () => {
//     window.print();
//   };

//   // Function to copy keywords
//   const handleCopy = (text: string) => {
//     navigator.clipboard.writeText(text);
//     setCopiedKeyword(text);
//     setTimeout(() => setCopiedKeyword(null), 2000);
//   };

//   if (!result) {
//     return (
//       <main className="flex min-h-screen flex-col items-center justify-center bg-[#FDFBF7]">
//         <Navbar />
//         <div className="animate-fade-in-up bg-white p-12 rounded-3xl border border-stone-200 shadow-xl text-center max-w-lg">
//           <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
//             <Sparkles className="w-8 h-8 text-purple-700" />
//           </div>
//           <h2 className="text-2xl font-bold text-[#2e0249] mb-2">No Analysis Found</h2>
//           <p className="text-stone-500 mb-6">
//             Please upload your resume to generate this report.
//           </p>
//         </div>
//       </main>
//     );
//   }

//   const safeArray = (v: any) => (Array.isArray(v) ? v : []);
//   const safeObj = (v: any) => (typeof v === "object" && v !== null ? v : {});
//   const extractedSkills = Object.values(safeObj(result.skills || {})).flat();

//   return (
//     <main className="min-h-screen bg-[#FDFBF7] text-stone-800 pb-20 font-sans selection:bg-purple-200 selection:text-purple-900 print:bg-white">
//       {/* Hide Navbar when printing */}
//       <div className="print:hidden">
//         <Navbar />
//       </div>

//       <div className="w-full max-w-[96%] mx-auto px-4 mt-12">
        
//         {/* --- HEADER SECTION with Animation --- */}
//         <div className="flex flex-col items-center text-center mb-16 animate-fade-in opacity-0" style={{ animationFillMode: 'forwards' }}>
//           <div className="mb-4 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-purple-800 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
//             <Sparkles size={12} /> AI Assessment Complete
//           </div>
//           <h1 className="text-5xl md:text-6xl font-black text-[#2e0249] mb-3 tracking-tight drop-shadow-sm">
//             Resume Analysis Report
//           </h1>
//           <p className="text-xl md:text-2xl font-semibold text-[#4a1d96] opacity-90">
//             Your personalized career insights ✨
//           </p>

//           {/* New Print Button */}
//           <button 
//             onClick={handlePrint}
//             className="mt-8 group flex items-center gap-2 px-6 py-3 bg-white border border-stone-200 rounded-full shadow-sm text-stone-600 font-medium transition-all hover:bg-purple-600 hover:text-white hover:border-purple-600 hover:shadow-lg print:hidden"
//           >
//             <Printer size={18} />
//             <span>Save Report</span>
//           </button>
//         </div>

//         {/* --- GRID LAYOUT --- */}
//         <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">

//           {/* LEFT COLUMN (Content) */}
//           <div className="xl:col-span-8 flex flex-col gap-6">
            
//             {/* Candidate Summary - Delay 100ms */}
//             <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
//               <EditorialCard title="Candidate Profile" icon={<User />}>
//                 <div className="prose prose-stone max-w-none">
//                   <p className="text-stone-600 text-lg leading-relaxed">
//                     {result.summary || "No summary available."}
//                   </p>
//                 </div>
                
//                 <div className="mt-8 pt-6 border-t border-stone-100">
//                   <span className="text-xs font-bold text-stone-400 uppercase tracking-wider block mb-3">
//                     Identified Technologies
//                   </span>
//                   <div className="flex flex-wrap gap-2">
//                     {extractedSkills.map((s: string, i: number) => (
//                       <span key={i} className="px-3 py-1.5 bg-[#f5f0e6] text-[#4a3b32] text-sm font-medium rounded-md border border-[#e7e0d3]">
//                         {s}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </EditorialCard>
//             </div>

//             {/* Strengths & Weaknesses - Delay 200ms */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-up opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
//               <EditorialCard title="Strengths" icon={<Award className="text-green-600"/>} noPadding>
//                 <div className="p-6 bg-white rounded-b-3xl h-full">
//                    <List items={safeArray(result.strengths)} type="good" />
//                 </div>
//               </EditorialCard>
              
//               <EditorialCard title="Areas to Improve" icon={<Lightbulb className="text-amber-600"/>} noPadding>
//                 <div className="p-6 bg-white rounded-b-3xl h-full">
//                    <List items={safeArray(result.weaknesses)} type="bad" />
//                 </div>
//               </EditorialCard>
//             </div>

//             {/* Recommendations - Delay 300ms */}
//             <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
//               <div className="bg-[#2e0249] rounded-3xl p-8 text-white shadow-xl relative overflow-hidden transition-transform hover:scale-[1.01] duration-500">
//                 <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -mr-16 -mt-16"></div>
//                 <h3 className="text-xl font-bold mb-6 flex items-center gap-2 relative z-10">
//                   <Sparkles className="text-yellow-300" /> Strategic Recommendations
//                 </h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 relative z-10">
//                   {safeArray(result.recommendations).map((rec: string, i: number) => (
//                       <div key={i} className="flex items-start gap-3">
//                         <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-300 shrink-0" />
//                         <span className="text-purple-100 leading-snug">{rec}</span>
//                       </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Missing Keywords & Courses - Delay 400ms */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-up opacity-0" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
//                <EditorialCard title="Missing Keywords" icon={<BookOpen />}>
//                   <p className="text-xs text-stone-400 mb-4">Click to copy & add to your resume.</p>
//                   <div className="flex flex-wrap gap-2">
//                     {safeArray(result.missing_keywords).map((k: string, i: number) => {
//                       const isCopied = copiedKeyword === k;
//                       return (
//                         <button
//                           key={i}
//                           onClick={() => handleCopy(k)}
//                           className={`group flex items-center gap-2 px-3 py-1.5 border rounded-lg text-sm transition-all duration-300
//                             ${isCopied 
//                               ? "bg-green-100 border-green-200 text-green-800 scale-105" 
//                               : "bg-red-50 text-red-900 border-red-100 hover:bg-red-100 hover:shadow-sm"
//                             }`}
//                         >
//                            {isCopied ? <CheckCircle size={14}/> : <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>}
//                            {isCopied ? "Copied!" : k}
//                         </button>
//                       );
//                     })}
//                     {!safeArray(result.missing_keywords).length && <p className="text-green-700 font-medium">Perfect match!</p>}
//                   </div>
//                </EditorialCard>

//                <EditorialCard title="Suggested Courses" icon={<Briefcase />}>
//                   <CourseSection data={safeArray(result.suggested_courses)} />
//                </EditorialCard>
//             </div>

//           </div>

//           {/* RIGHT COLUMN (Stats) */}
//           <div className="xl:col-span-4 flex flex-col gap-6 xl:sticky xl:top-8 animate-fade-in-up opacity-0" style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}>
            
//             {/* ATS CARD */}
//             <div className="bg-white rounded-3xl p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-stone-200 text-center relative overflow-hidden group hover:shadow-[0_20px_60px_-15px_rgba(46,2,73,0.2)] transition-all duration-500">
//                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#2e0249] to-[#7c3aed]"></div>
//                <h3 className="text-stone-500 font-semibold uppercase tracking-widest text-xs mb-8">ATS Compatibility Score</h3>
               
//                <div className="relative inline-block">
//                   <div className="absolute inset-[-10px] border-2 border-dashed border-purple-200 rounded-full animate-[spin_10s_linear_infinite]"></div>
//                   <div className="w-40 h-40 rounded-full bg-[#2e0249] flex flex-col items-center justify-center text-white shadow-2xl relative z-10 transition-transform group-hover:scale-105 duration-300">
//                     <span className="text-6xl font-black tracking-tighter">{result.ats_score ?? 0}</span>
//                     <span className="text-purple-300 text-sm font-medium"> Out of 10</span>
//                   </div>
//                </div>

//                <p className="mt-8 text-stone-500 text-sm leading-relaxed px-4">
//                  Your resume's parse-ability against standard Applicant Tracking Systems.
//                </p>
//             </div>

//             {/* HEATMAP CARD */}
//             <EditorialCard title="Skill Gap Match" icon={<BarChart3 />}>
//                <div className="mt-2">
//                  <Heatmap data={safeArray(result.skill_gap_map)} />
//                </div>
//             </EditorialCard>

//           </div>

//         </div>
//       </div>
      
//       {/* GLOBAL STYLES FOR ANIMATION (Add this to globals.css usually, but putting here for simple copy-paste) */}
//       <style jsx global>{`
//         @keyframes fadeInUp {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .animate-fade-in-up {
//           animation: fadeInUp 0.6s ease-out forwards;
//         }
//         .animate-fade-in {
//           animation: fadeInUp 0.8s ease-out forwards;
//         }
//       `}</style>
//     </main>
//   );
// }

// /* -------------------------------------------------------------------------- */
// /* COMPONENTS                                                */
// /* -------------------------------------------------------------------------- */

// function EditorialCard({ children, title, icon, noPadding = false }: any) {
//   return (
//     <div className="bg-white border border-stone-200 shadow-sm rounded-3xl overflow-hidden transition-all hover:shadow-md hover:border-purple-200">
//       <div className="px-6 py-5 border-b border-stone-100 flex items-center gap-3 bg-stone-50/50">
//         <div className="text-[#2e0249] bg-purple-100/50 p-2 rounded-lg">
//           {icon}
//         </div>
//         <h3 className="text-lg font-bold text-[#2e0249]">{title}</h3>
//       </div>
//       <div className={noPadding ? "" : "p-6"}>{children}</div>
//     </div>
//   );
// }

// function List({ items, type }: any) {
//   if (!items || !items.length) return <p className="text-stone-400 italic">None detected.</p>;
  
//   const isGood = type === "good";
//   const Icon = isGood ? Check : X;
//   const color = isGood ? "text-green-700 bg-green-50" : "text-red-700 bg-red-50";

//   return (
//     <ul className="space-y-4">
//       {items.map((x: string, i: number) => (
//         <li key={i} className="flex items-start gap-3 text-stone-700 leading-snug text-sm">
//           <span className={`mt-0.5 p-0.5 rounded-full ${color} shrink-0`}>
//             <Icon size={12} strokeWidth={4} />
//           </span>
//           {x}
//         </li>
//       ))}
//     </ul>
//   );
// }

// function CourseSection({ data }: any) {
//   if (!data || !data.length) return <p className="text-stone-400">No suggestions.</p>;

//   return (
//     <div className="flex flex-col gap-4">
//       {data.map((item: any, i: number) => (
//         <div key={i} className="pb-3 border-b border-stone-100 last:border-0 last:pb-0">
//           <p className="font-bold text-[#2e0249] text-sm mb-1">{item.keyword}</p>
//           <div className="flex flex-wrap gap-2">
//             {item.courses?.map((c: string, idx: number) => (
//                <a key={idx} href={`https://www.google.com/search?q=${c} course`} target="_blank" className="text-xs text-stone-500 hover:text-purple-700 underline decoration-stone-300 hover:decoration-purple-500 underline-offset-2 transition-all">
//                  {c}
//                </a>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// function Heatmap({ data }: any) {
//   if (!data || !Array.isArray(data)) return null;

//   return (
//     <div className="flex flex-col gap-5">
//       {data.map((item: any, i: number) => {
//         const percentage = Math.round(item.score * 100);
//         let barColor = "bg-[#d97706]";
//         if (item.score >= 0.8) barColor = "bg-[#2e0249]";
//         else if (item.score >= 0.5) barColor = "bg-[#9333ea]";

//         return (
//           <div key={i} className="w-full group">
//             <div className="flex justify-between mb-1.5">
//               <span className="text-xs font-bold text-stone-600 uppercase tracking-wide group-hover:text-purple-700 transition-colors">{item.skill}</span>
//               <span className="text-xs font-bold text-[#2e0249]">{percentage}%</span>
//             </div>
//             <div className="w-full h-2.5 bg-stone-100 rounded-full overflow-hidden">
//               <div 
//                 className={`h-full rounded-full ${barColor} transition-all duration-1000 ease-out relative overflow-hidden`} 
//                 style={{ width: `${percentage}%` }}
//               >
//                  {/* Shine effect on bars */}
//                  <div className="absolute top-0 left-0 w-full h-full bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import Navbar from "@/app/components/Navbar";
import {
  User,
  Lightbulb,
  Briefcase,
  BookOpen,
  Award,
  Sparkles,
  BarChart3,
  Check,
  X,
  Printer,
  Copy,
  CheckCircle,
  Zap,
  Target,
  ArrowRight,
  Fingerprint
} from "lucide-react";

export default function ResultsPage() {
  const [result, setResult] = useState<any | null>(null);
  const [copiedKeyword, setCopiedKeyword] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = sessionStorage.getItem("analysis");
    if (stored) {
      try {
        setResult(JSON.parse(stored));
      } catch {
        console.error("Invalid JSON in sessionStorage");
      }
    }
  }, []);

  const handlePrint = () => window.print();

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKeyword(text);
    setTimeout(() => setCopiedKeyword(null), 2000);
  };

  if (!mounted) return null;

  if (!result) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#FDFBF7] relative overflow-hidden">
        <BackgroundEffects />
        <Navbar />
        <div className="relative z-10 animate-fade-in bg-white/50 backdrop-blur-2xl p-12 rounded-[3rem] border border-white/60 shadow-[0_20px_50px_-12px_rgba(46,2,73,0.1)] text-center max-w-lg mx-6">
          <div className="w-20 h-20 bg-gradient-to-tr from-[#2e0249] to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-500/20">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-[#2e0249] mb-2 tracking-tight">Analysis Pending</h2>
          <p className="text-stone-500 mb-6 leading-relaxed">
            Upload your resume to unlock your career insights.
          </p>
        </div>
      </main>
    );
  }

  const safeArray = (v: any) => (Array.isArray(v) ? v : []);
  const safeObj = (v: any) => (typeof v === "object" && v !== null ? v : {});
  const extractedSkills = Object.values(safeObj(result.skills || {})).flat();

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#2e0249] pb-20 font-sans selection:bg-[#2e0249] selection:text-white print:bg-white relative overflow-x-hidden">
      
      {/* --- DYNAMIC BACKGROUND LAYERS --- */}
      <BackgroundEffects />

      {/* NAV */}
      <div className="print:hidden relative z-50">
        <Navbar />
      </div>

      <div className="relative z-10 w-full px-4 md:px-8 mt-10">
        
        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 animate-fade-in">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2e0249]"></span>
              </span>
              <span className="text-xs font-bold tracking-[0.2em] text-[#2e0249]/60 uppercase">AI Assessment Complete</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-[#2e0249] tracking-tighter leading-tight drop-shadow-sm">
              Resume Analysis
            </h1>
          </div>
          
          <button 
            onClick={handlePrint}
            className="group relative px-8 py-4 bg-[#2e0249] text-white rounded-full font-semibold shadow-[0_10px_30px_-10px_rgba(46,2,73,0.3)] hover:shadow-[0_20px_40px_-10px_rgba(46,2,73,0.4)] hover:scale-105 active:scale-95 transition-all duration-300 print:hidden overflow-hidden mt-6 md:mt-0"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[100%] group-hover:animate-shimmer"></div>
            <div className="flex items-center gap-3 relative z-10">
              <Printer size={20} />
              <span>Export Report</span>
            </div>
          </button>
        </div>

        {/* --- GRID SYSTEM --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-12">

          {/* 1. EXECUTIVE SUMMARY (Glass Card) */}
          <div className="md:col-span-8 animate-slide-up" style={{ animationDelay: '100ms' }}>
            <Card className="h-full bg-white/70 backdrop-blur-xl border-white/50">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-stone-100 flex items-center justify-center text-[#2e0249]">
                  <User size={24} />
                </div>
                <div>
                   <h3 className="text-lg font-bold text-[#2e0249]">Professional Profile</h3>
                   <p className="text-xs text-stone-400 font-medium uppercase tracking-wider">Generated Summary</p>
                </div>
              </div>
              
              <p className="text-lg text-stone-600 leading-loose font-medium">
                {result.summary || "No summary available."}
              </p>

              <div className="mt-8">
                 <h4 className="text-xs font-bold text-[#2e0249] uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Fingerprint size={14} /> Technology Fingerprint
                 </h4>
                 <div className="flex flex-wrap gap-2">
                    {extractedSkills.map((s: any, i: number) => (
                      <span key={i} className="px-4 py-2 bg-white rounded-xl text-sm font-semibold text-stone-600 shadow-sm border border-stone-100 hover:text-[#2e0249] hover:border-purple-200 transition-colors cursor-default">
                        {s}
                      </span>
                    ))}
                 </div>
              </div>
            </Card>
          </div>

          {/* 2. ATS SCORE (Glowing Gradient Card) */}
          <div className="md:col-span-4 animate-slide-up" style={{ animationDelay: '200ms' }}>
             <div className="h-full bg-gradient-to-br from-[#2e0249] to-[#4a1d96] rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-[0_25px_60px_-12px_rgba(46,2,73,0.3)] group hover:scale-[1.02] transition-transform duration-500">
                {/* Background Glows */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500 rounded-full blur-[100px] opacity-40 -mr-16 -mt-16 group-hover:opacity-60 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-pink-500 rounded-full blur-[80px] opacity-30 -ml-10 -mb-10 group-hover:opacity-50 transition-opacity"></div>
                
                <div className="relative z-10 flex flex-col h-full justify-between">
                   <div className="flex justify-between items-start">
                      <h3 className="font-bold text-white/70 uppercase tracking-widest text-xs">ATS Score</h3>
                      <div className="px-3 py-1 bg-white/10 rounded-full text-xs backdrop-blur-md border border-white/10">
                        Top 10%
                      </div>
                   </div>

                   <div className="flex flex-col items-center justify-center py-8">
                      <div className="relative">
                         <svg className="w-48 h-48 transform -rotate-90">
                           <circle cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-white/10" />
                           <circle cx="96" cy="96" r="88" stroke="white" strokeWidth="12" fill="transparent" strokeDasharray={2 * Math.PI * 88} strokeDashoffset={2 * Math.PI * 88 - (2 * Math.PI * 88 * (result.ats_score ?? 0) / 10)} strokeLinecap="round" className="drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-[2s] ease-out" />
                         </svg>
                         <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-6xl font-bold tracking-tighter drop-shadow-lg">{result.ats_score ?? 0}</span>
                         </div>
                      </div>
                   </div>

                   <p className="text-center text-white/80 text-sm leading-relaxed">
                     Your resume is optimized for Applicant Tracking Systems.
                   </p>
                </div>
             </div>
          </div>

          {/* 3. STRENGTHS (Green Accent) */}
          <div className="md:col-span-6 animate-slide-up" style={{ animationDelay: '300ms' }}>
            <Card className="bg-gradient-to-b from-emerald-50/50 to-white border-emerald-100/50">
                <div className="flex items-center justify-between mb-6">
                   <h3 className="text-lg font-bold text-emerald-900 flex items-center gap-2">
                     <div className="p-2 bg-emerald-100 rounded-lg text-emerald-700"><Zap size={18} /></div>
                     Key Strengths
                   </h3>
                </div>
                <List items={safeArray(result.strengths)} type="good" />
            </Card>
          </div>
          
          {/* 4. WEAKNESSES (Red Accent) */}
          <div className="md:col-span-6 animate-slide-up" style={{ animationDelay: '400ms' }}>
            <Card className="bg-gradient-to-b from-rose-50/50 to-white border-rose-100/50">
                <div className="flex items-center justify-between mb-6">
                   <h3 className="text-lg font-bold text-rose-900 flex items-center gap-2">
                     <div className="p-2 bg-rose-100 rounded-lg text-rose-700"><Target size={18} /></div>
                     Areas to Improve
                   </h3>
                </div>
                <List items={safeArray(result.weaknesses)} type="bad" />
            </Card>
          </div>

          {/* 5. RECOMMENDATIONS (Floating Dark Card) */}
          <div className="md:col-span-12 animate-slide-up" style={{ animationDelay: '500ms' }}>
            <div className="relative rounded-[2.5rem] bg-[#1a0129] p-10 overflow-hidden shadow-2xl">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500"></div>
               {/* Shine effect */}
               <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(255,255,255,0.03)_0%,transparent_50%)] animate-pulse-slow pointer-events-none"></div>
               
               <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3 relative z-10">
                 <Sparkles className="text-yellow-400 fill-yellow-400" /> Strategic Recommendations
               </h3>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                 {safeArray(result.recommendations).map((rec: string, i: number) => (
                    <div key={i} className="flex gap-5 group">
                       <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-white/5 rounded-full text-purple-200 font-bold border border-white/10 group-hover:bg-white/10 group-hover:scale-110 transition-all duration-300">
                          {i + 1}
                       </span>
                       <p className="text-stone-300 font-medium leading-relaxed group-hover:text-white transition-colors">{rec}</p>
                    </div>
                 ))}
               </div>
            </div>
          </div>

          {/* 6. HEATMAP (Clean Bar) */}
          <div className="md:col-span-8 animate-slide-up" style={{ animationDelay: '600ms' }}>
             <Card>
                <div className="flex items-center gap-3 mb-8">
                   <div className="p-2 bg-purple-50 rounded-lg text-purple-700"><BarChart3 size={20} /></div>
                   <h3 className="text-lg font-bold text-[#2e0249]">Skill Match Analysis</h3>
                </div>
                <Heatmap data={safeArray(result.skill_gap_map)} />
             </Card>
          </div>

          {/* 7. MISSING KEYWORDS (Interactive) */}
          <div className="md:col-span-4 animate-slide-up" style={{ animationDelay: '700ms' }}>
             <Card>
                <div className="flex items-center gap-3 mb-2">
                   <div className="p-2 bg-amber-50 rounded-lg text-amber-600"><Target size={20} /></div>
                   <h3 className="text-lg font-bold text-[#2e0249]">Missing Keywords</h3>
                </div>
                <p className="text-sm text-stone-400 mb-6 pl-1">Tap to copy to clipboard</p>

                <div className="flex flex-wrap gap-2.5">
                   {safeArray(result.missing_keywords).map((k: string, i: number) => {
                      const isCopied = copiedKeyword === k;
                      return (
                         <button
                           key={i}
                           onClick={() => handleCopy(k)}
                           className={`group relative flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300
                             ${isCopied 
                               ? "bg-green-500 text-white shadow-lg shadow-green-500/30 scale-105" 
                               : "bg-stone-50 text-stone-600 hover:bg-[#2e0249] hover:text-white hover:shadow-lg hover:shadow-purple-900/20"
                             }`}
                         >
                            {isCopied ? <Check size={14} /> : <div className="w-1.5 h-1.5 rounded-full bg-stone-300 group-hover:bg-white/50"></div>}
                            {isCopied ? "Copied" : k}
                         </button>
                      );
                   })}
                   {!safeArray(result.missing_keywords).length && <div className="text-green-600 font-bold bg-green-50 p-4 rounded-xl w-full text-center">Perfect Match!</div>}
                </div>
             </Card>
          </div>

          {/* 8. COURSES (List) */}
          <div className="md:col-span-12 animate-slide-up" style={{ animationDelay: '800ms' }}>
             <Card>
                <div className="flex items-center gap-3 mb-6">
                   <div className="p-2 bg-blue-50 rounded-lg text-blue-600"><BookOpen size={20} /></div>
                   <h3 className="text-lg font-bold text-[#2e0249]">Recommended Learning Paths</h3>
                </div>
                <CourseSection data={safeArray(result.suggested_courses)} />
             </Card>
          </div>

        </div>
      </div>
      
      {/* GLOBAL ANIMATION STYLES */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulseSlow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        .animate-fade-in { animation: fadeIn 1s ease-out forwards; }
        .animate-slide-up { animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
        .animate-shimmer { animation: shimmer 2s infinite; }
        .animate-pulse-slow { animation: pulseSlow 4s infinite ease-in-out; }
      `}</style>
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/* COMPONENTS                                                                 */
/* -------------------------------------------------------------------------- */

// 1. Base Card Component
function Card({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`h-full bg-white rounded-[2.5rem] p-8 md:p-10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-stone-100 hover:shadow-[0_20px_50px_-15px_rgba(46,2,73,0.1)] transition-all duration-500 ${className}`}>
      {children}
    </div>
  );
}

// 2. Animated Background
function BackgroundEffects() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-200/30 rounded-full blur-[120px] mix-blend-multiply animate-pulse-slow"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-200/30 rounded-full blur-[120px] mix-blend-multiply animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-[40%] left-[40%] w-[30%] h-[30%] bg-pink-100/40 rounded-full blur-[100px] mix-blend-multiply opacity-50"></div>
    </div>
  );
}

// 3. Styled List
function List({ items, type }: any) {
  if (!items || !items.length) return <p className="text-stone-400 italic font-medium">None detected.</p>;
  const isGood = type === "good";
  
  return (
    <ul className="space-y-4">
      {items.map((x: string, i: number) => (
        <li key={i} className="flex items-start gap-4 text-stone-600 font-medium leading-relaxed group">
          <span className={`flex-shrink-0 mt-1 w-5 h-5 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 ${isGood ? 'bg-emerald-100 text-emerald-600' : 'bg-rose-100 text-rose-600'}`}>
            {isGood ? <Check size={12} strokeWidth={3} /> : <X size={12} strokeWidth={3} />}
          </span>
          <span className="group-hover:text-[#2e0249] transition-colors">{x}</span>
        </li>
      ))}
    </ul>
  );
}

// 4. Course Section
function CourseSection({ data }: any) {
  if (!data || !data.length) return <p className="text-stone-400">No suggestions.</p>;

  return (
    <div className="flex flex-col gap-8">
      {data.map((item: any, i: number) => (
        <div key={i} className="relative pl-6 border-l-2 border-stone-100">
          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-purple-100"></div>
          <p className="font-bold text-[#2e0249] text-sm uppercase tracking-wider mb-3">{item.keyword}</p>
          <div className="flex flex-wrap gap-3">
            {item.courses?.map((c: string, idx: number) => (
               <a 
                 key={idx} 
                 href={`https://www.google.com/search?q=${c} course`} 
                 target="_blank" 
                 className="flex items-center gap-2 px-4 py-2 bg-stone-50 text-stone-600 rounded-lg text-sm font-medium hover:bg-[#2e0249] hover:text-white transition-all duration-300 group"
               >
                 {c}
                 <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
               </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// 5. Heatmap
function Heatmap({ data }: any) {
  if (!data || !Array.isArray(data)) return null;

  return (
    <div className="grid grid-cols-1 gap-6">
      {data.map((item: any, i: number) => {
        const percentage = Math.round(item.score * 100);
        
        let colorStart = "from-amber-400";
        let colorEnd = "to-orange-500";
        if (item.score >= 0.8) { colorStart = "from-[#2e0249]"; colorEnd = "to-purple-600"; }
        else if (item.score >= 0.5) { colorStart = "from-purple-400"; colorEnd = "to-indigo-500"; }

        return (
          <div key={i} className="w-full">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-bold text-stone-500">{item.skill}</span>
              <span className="text-sm font-bold text-[#2e0249]">{percentage}%</span>
            </div>
            <div className="w-full h-3 bg-stone-100 rounded-full overflow-hidden">
              <div className={`h-full bg-gradient-to-r ${colorStart} ${colorEnd} rounded-full transition-all duration-1000 ease-out shadow-sm`} style={{ width: `${percentage}%` }}></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}