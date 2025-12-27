// "use client";

// import { useState } from "react";
// import Navbar from "@/app/components/Navbar";
// import { 
//   Briefcase, 
//   Sparkles, 
//   Loader2, 
//   Trophy,
//   Medal,
//   ChevronRight,
//   Mail,
//   MoreHorizontal,
//   AlertCircle,
//   BarChart3,
//   User
// } from "lucide-react";

// // ----------------------------
// // Types
// // ----------------------------
// type RecruiterFormData = {
//   jobTitle: string;
//   companyName: string;
//   location: string;
//   experienceLevel: string;
//   jobType: string;
//   skills: string;
//   jobDescription: string;
// };

// // ----------------------------
// // MAIN PAGE
// // ----------------------------
// export default function RecruiterPage() {
//   const [formData, setFormData] = useState<RecruiterFormData>({
//     jobTitle: "",
//     companyName: "",
//     location: "",
//     experienceLevel: "",
//     jobType: "",
//     skills: "",
//     jobDescription: "",
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [message, setMessage] = useState<string | null>(null);
  
//   // State for candidates
//   const [topCandidates, setTopCandidates] = useState<any[]>([]);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setMessage(null);
//     setTopCandidates([]); 

//     try {
//       const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || ''}/api/match-candidate`, { 
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         throw new Error(data.detail || "Failed to fetch matches");
//       }

//       if (data.candidates && Array.isArray(data.candidates) && data.candidates.length > 0) {
//         setTopCandidates(data.candidates.slice(0, 5));
//       } else {
//         setMessage("No matching candidates found in the database.");
//       }

//     } catch (error: any) {
//       console.error("API Error:", error);
//       setMessage(error.message || "Something went wrong connecting to the server.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <main className="relative min-h-screen bg-[#FDFBF7] text-stone-800 selection:bg-purple-200 selection:text-purple-900 pb-20">
      
//       {/* BACKGROUND GLOW */}
//       <div className="fixed inset-0 z-0 pointer-events-none">
//          <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-200/20 rounded-full blur-[100px] mix-blend-multiply opacity-60" />
//          <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-stone-200/40 rounded-full blur-[100px] mix-blend-multiply opacity-60" />
//       </div>

//       <div className="relative z-10">
//         <Navbar />

//         <div className="w-full max-w-[96%] mx-auto px-4 mt-10">

//           {/* --- HEADER --- */}
//           <div className="flex flex-col items-center text-center mb-12 animate-fade-in-up">
//             <div className="mb-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-stone-200 text-purple-800 text-xs font-bold uppercase tracking-widest shadow-sm">
//                <Trophy size={14} className="text-yellow-600" />
//                Leaderboard Mode
//             </div>
//             <h1 className="text-5xl md:text-6xl font-black text-[#2e0249] tracking-tight mb-4 drop-shadow-sm">
//                Top 5 Candidates
//             </h1>
//             <p className="text-xl text-stone-600 font-medium max-w-2xl">
//                Our AI has shortlisted the best matches. Compare them below.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">

//             {/* LEFT COLUMN: FORM (4/12) */}
//             <div className="xl:col-span-4 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
//                <div className="bg-white rounded-[2.5rem] border border-stone-200 shadow-xl shadow-stone-200/50 p-8 relative overflow-hidden">
//                   <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-full -mr-16 -mt-16 pointer-events-none"></div>
                  
//                   <h2 className="text-xl font-bold text-[#2e0249] mb-6 flex items-center gap-2">
//                      <Briefcase size={20} className="text-purple-600" /> Job Parameters
//                   </h2>

//                   <form onSubmit={handleSubmit} className="space-y-5">
//                      <div className="space-y-1.5">
//                         <label className="text-xs font-bold text-stone-500 uppercase tracking-wide">Role Title</label>
//                         <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} placeholder="e.g. Senior Product Designer" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-purple-200 focus:bg-white transition-all font-medium" required />
//                      </div>
//                      <div className="space-y-1.5">
//                         <label className="text-xs font-bold text-stone-500 uppercase tracking-wide">Company</label>
//                         <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} placeholder="Company Name" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-purple-200 focus:bg-white transition-all font-medium" />
//                      </div>
//                      <div className="space-y-1.5">
//                         <label className="text-xs font-bold text-stone-500 uppercase tracking-wide">Required Skills</label>
//                         <input type="text" name="skills" value={formData.skills} onChange={handleChange} placeholder="e.g. React, Node, AWS" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-purple-200 focus:bg-white transition-all font-medium" />
//                      </div>
//                      <div className="space-y-1.5">
//                         <label className="text-xs font-bold text-stone-500 uppercase tracking-wide">Description</label>
//                         <textarea name="jobDescription" value={formData.jobDescription} onChange={handleChange} rows={6} placeholder="Paste JD..." className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-purple-200 focus:bg-white transition-all resize-none" required />
//                      </div>

//                      {message && (
//                         <div className="p-3 bg-red-50 border border-red-100 rounded-xl flex items-center gap-2 text-xs text-red-600 font-bold">
//                            <AlertCircle size={14} /> {message}
//                         </div>
//                      )}

//                      <button type="submit" disabled={isSubmitting} className="w-full py-4 rounded-xl bg-[#2e0249] text-white font-bold text-lg shadow-lg shadow-purple-900/20 hover:bg-[#4a1d96] hover:shadow-xl hover:-translate-y-0.5 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 group">
//                         {isSubmitting ? <><Loader2 className="animate-spin" size={20} /> Ranking...</> : <><Sparkles size={20} className="text-yellow-400" /> Rank Top 5 Candidates</>}
//                      </button>
//                   </form>
//                </div>
//             </div>

//             {/* RIGHT COLUMN: CANDIDATE LIST (8/12) */}
//             <div className="xl:col-span-8 flex flex-col gap-6 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
               
//                {/* EMPTY STATE */}
//                {topCandidates.length === 0 && !isSubmitting && (
//                   <div className="h-full min-h-[500px] flex flex-col items-center justify-center bg-white/50 rounded-[2.5rem] border border-stone-200 border-dashed text-center p-12">
//                      <div className="w-24 h-24 bg-stone-100 rounded-full flex items-center justify-center mb-6 text-stone-300">
//                         <Trophy size={40} />
//                      </div>
//                      <h3 className="text-2xl font-bold text-[#2e0249]">No Candidates Selected</h3>
//                      <p className="text-stone-500 max-w-md mt-3">
//                         Enter the job details to generate a shortlist of the <span className="font-bold text-purple-700">Top 5</span> most relevant profiles.
//                      </p>
//                   </div>
//                )}

//                {/* LOADING STATE */}
//                {isSubmitting && (
//                   <div className="h-full min-h-[500px] flex flex-col items-center justify-center">
//                      <Loader2 className="w-16 h-16 text-purple-600 animate-spin mb-6" />
//                      <p className="text-xl font-bold text-[#2e0249] animate-pulse">Analyzing Semantic Relevance...</p>
//                      <p className="text-stone-500">Comparing vector embeddings...</p>
//                   </div>
//                )}

//                {/* RESULTS LIST - UNIFORM CARDS */}
//                {topCandidates.length > 0 && (
//                   <div className="flex flex-col gap-5">
                     
//                      {topCandidates.map((c, i) => {
//                         const isFirst = i === 0;
//                         // Special styling for #1, but layout remains consistent
//                         const borderClass = isFirst 
//                            ? "border-yellow-400 ring-4 ring-yellow-50" 
//                            : "border-stone-200 hover:border-purple-200";

//                         return (
//                            <div key={i} className={`relative bg-white rounded-[2rem] p-6 transition-all hover:shadow-xl hover:-translate-y-1 border ${borderClass}`}>
                              
//                               {/* Rank Badge */}
//                               <div className={`absolute top-0 left-0 px-4 py-2 rounded-br-2xl rounded-tl-[2rem] text-xs font-black uppercase tracking-widest ${isFirst ? "bg-yellow-400 text-[#2e0249]" : "bg-stone-100 text-stone-500"}`}>
//                                  Rank #{i + 1} {isFirst && "🏆"}
//                               </div>

//                               <div className="mt-6 flex flex-col md:flex-row gap-6">
                                 
//                                  {/* Column 1: Identity & Score */}
//                                  <div className="flex flex-row md:flex-col items-center gap-4 md:w-32 shrink-0 border-b md:border-b-0 md:border-r border-stone-100 pb-4 md:pb-0 md:pr-4">
//                                     <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-bold ${isFirst ? "bg-[#2e0249] text-white shadow-lg shadow-purple-900/30" : "bg-stone-100 text-stone-600"}`}>
//                                        {c.name ? c.name.charAt(0) : "U"}
//                                     </div>
//                                     <div className="text-center">
//                                        <div className="text-3xl font-black text-[#2e0249]">{c.score}</div>
//                                        <div className="text-[10px] font-bold text-stone-400 uppercase">Match Score</div>
//                                     </div>
//                                  </div>

//                                  {/* Column 2: Core Details */}
//                                  <div className="flex-1 min-w-0">
//                                     <div className="flex justify-between items-start">
//                                        <div>
//                                           <h3 className="text-2xl font-bold text-[#2e0249]">{c.name}</h3>
//                                           <p className="text-stone-500 font-medium text-sm mb-3 flex items-center gap-2">
//                                              {c.role || "Candidate"}
//                                              <span className="w-1 h-1 bg-stone-300 rounded-full"></span>
//                                              {c.experience || "Exp N/A"}
//                                           </p>
//                                        </div>
//                                        <button className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-stone-50 text-stone-400 hover:bg-[#2e0249] hover:text-white transition-colors">
//                                           <Mail size={18} />
//                                        </button>
//                                     </div>

//                                     {/* AI Insight (Visible for everyone) */}
//                                     <div className={`p-4 rounded-xl border mb-4 text-sm leading-relaxed ${isFirst ? "bg-yellow-50 border-yellow-100 text-stone-700" : "bg-purple-50 border-purple-100 text-stone-600"}`}>
//                                        <span className="font-bold flex items-center gap-2 mb-1 text-xs uppercase tracking-wide">
//                                           <Sparkles size={12} className={isFirst ? "text-yellow-600" : "text-purple-600"} /> 
//                                           AI Analysis
//                                        </span>
//                                        "{c.reason || 'Strong semantic match based on provided skills.'}"
//                                     </div>

//                                     {/* Skill Chips */}
//                                     <div className="flex flex-wrap gap-2 mb-4">
//                                        {c.skills && c.skills.slice(0, 4).map((s: string, idx: number) => (
//                                           <span key={idx} className="px-2.5 py-1 bg-white border border-stone-200 text-stone-600 text-xs font-bold rounded-lg">
//                                              {s}
//                                           </span>
//                                        ))}
//                                        {c.skills && c.skills.length > 4 && (
//                                           <span className="px-2.5 py-1 text-stone-400 text-xs font-bold">+{c.skills.length - 4}</span>
//                                        )}
//                                     </div>

//                                     {/* Mini Bars for breakdown (Safely render) */}
//                                     {c.breakdown && (
//                                        <div className="grid grid-cols-3 gap-2">
//                                           <MiniBar label="Tech" val={c.breakdown.tech} color="bg-blue-400" />
//                                           <MiniBar label="Exp" val={c.breakdown.exp} color="bg-purple-400" />
//                                           <MiniBar label="Fit" val={c.breakdown.culture} color="bg-pink-400" />
//                                        </div>
//                                     )}
//                                  </div>
//                               </div>
//                            </div>
//                         );
//                      })}

//                      <div className="text-center pt-4 pb-8">
//                         <p className="text-xs text-stone-400 font-bold uppercase tracking-widest">End of Shortlist</p>
//                      </div>

//                   </div>
//                )}

//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

// // ----------------------------
// // Helper: Mini Bar Chart
// // ----------------------------
// function MiniBar({ label, val, color }: { label: string, val: number, color: string }) {
//    return (
//       <div className="flex flex-col gap-1">
//          <div className="flex justify-between text-[10px] font-bold text-stone-400 uppercase">
//             <span>{label}</span>
//             <span>{val}%</span>
//          </div>
//          <div className="w-full h-1 bg-stone-100 rounded-full overflow-hidden">
//             <div className={`h-full rounded-full ${color}`} style={{ width: `${val}%` }}></div>
//          </div>
//       </div>
//    )
// }


"use client";

import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import { 
  Briefcase, 
  MapPin, 
  Sparkles, 
  Search, 
  Loader2, 
  Building2, 
  Users, 
  FileText,
  ChevronRight,
  Trophy
} from "lucide-react";

// ----------------------------
// Types
// ----------------------------
type RecruiterFormData = {
  jobTitle: string;
  companyName: string;
  location: string;
  experienceLevel: string;
  jobType: string;
  skills: string;
  jobDescription: string;
};

// ----------------------------
// Helpers
// ----------------------------
function getScoreColor(score: number) {
  if (score >= 8) return "text-emerald-600 bg-emerald-50 border-emerald-100";
  if (score >= 5) return "text-amber-600 bg-amber-50 border-amber-100";
  return "text-rose-600 bg-rose-50 border-rose-100";
}

// ============================================================
// MAIN PAGE
// ============================================================
export default function RecruiterPage() {
  const [formData, setFormData] = useState<RecruiterFormData>({
    jobTitle: "",
    companyName: "",
    location: "",
    experienceLevel: "",
    jobType: "",
    skills: "",
    jobDescription: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [topCandidates, setTopCandidates] = useState([]);

  // Handle Input Change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle Submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    try {
      // Simulating API call structure
      const res = await fetch("/api/match-candidate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const json = await res.json();

      if (json.success) {
        setTopCandidates(json.candidates);
        setMessage(`Found ${json.candidates.length} matches based on semantic relevance.`);
      } else {
        setMessage("No matches found. Try adjusting criteria.");
      }
    } catch (error) {
      console.error("Frontend error:", error);
      setMessage("Simulation: Failed to connect to AI engine.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    // THEME: Warm Beige Background
    <main className="relative min-h-screen bg-[#FDFBF7] text-stone-800 selection:bg-purple-200 selection:text-purple-900 pb-20">
      
      {/* BACKGROUND GLOW */}
      <div className="fixed inset-0 z-0 pointer-events-none">
         <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-200/20 rounded-full blur-[100px] mix-blend-multiply opacity-60" />
         <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-stone-200/40 rounded-full blur-[100px] mix-blend-multiply opacity-60" />
      </div>

      <div className="relative z-10">
        <Navbar />

        <div className="w-full max-w-[96%] mx-auto px-4 mt-12">

          {/* --- HEADER --- */}
          <div className="flex flex-col items-center text-center mb-16 animate-fade-in-up">
            <div className="mb-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-stone-200 text-purple-800 text-xs font-bold uppercase tracking-widest shadow-sm">
               <Briefcase size={14} className="text-purple-600" />
               Recruiter Workspace
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-[#2e0249] tracking-tight mb-4 drop-shadow-sm">
               Targeted Talent Discovery
            </h1>
            <p className="text-xl text-stone-600 font-medium max-w-2xl">
               Define your requirements and let our <span className="text-[#2e0249] font-bold">Semantic Engine</span> rank candidates instantly.
            </p>
          </div>

          {/* --- MAIN GRID LAYOUT --- */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">

            {/* LEFT COLUMN: Job Specification Form (5/12) */}
            <div className="xl:col-span-5 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
               <div className="bg-white rounded-[2.5rem] border border-stone-200 shadow-xl shadow-stone-200/50 p-8 md:p-10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-full -mr-16 -mt-16 pointer-events-none"></div>
                  
                  <h2 className="text-2xl font-bold text-[#2e0249] mb-6 flex items-center gap-3">
                     <FileText className="text-purple-600" /> Job Profile
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                     
                     {/* Job Title */}
                     <div className="space-y-2">
                        <label className="text-sm font-bold text-stone-700 uppercase tracking-wide">Role Title</label>
                        <input
                           type="text"
                           name="jobTitle"
                           value={formData.jobTitle}
                           onChange={handleChange}
                           placeholder="e.g. Senior Product Designer"
                           className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-purple-200 focus:bg-white transition-all font-medium"
                           required
                        />
                     </div>

                     {/* Company & Location Row */}
                     <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                           <label className="text-xs font-bold text-stone-500 uppercase tracking-wide">Company</label>
                           <div className="relative">
                              <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" size={16} />
                              <input
                                 type="text"
                                 name="companyName"
                                 value={formData.companyName}
                                 onChange={handleChange}
                                 placeholder="Acme Inc."
                                 className="w-full bg-stone-50 border border-stone-200 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-200 focus:bg-white transition-all"
                              />
                           </div>
                        </div>
                        <div className="space-y-2">
                           <label className="text-xs font-bold text-stone-500 uppercase tracking-wide">Location</label>
                           <div className="relative">
                              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" size={16} />
                              <input
                                 type="text"
                                 name="location"
                                 value={formData.location}
                                 onChange={handleChange}
                                 placeholder="Remote / NY"
                                 className="w-full bg-stone-50 border border-stone-200 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-200 focus:bg-white transition-all"
                              />
                           </div>
                        </div>
                     </div>

                     {/* Filters Row */}
                     <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                           <label className="text-xs font-bold text-stone-500 uppercase tracking-wide">Experience</label>
                           <select
                              name="experienceLevel"
                              value={formData.experienceLevel}
                              onChange={handleChange}
                              className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-200 focus:bg-white transition-all cursor-pointer"
                           >
                              <option value="">Select Level</option>
                              <option value="Internship">Internship</option>
                              <option value="Fresher">Entry (0-1y)</option>
                              <option value="Junior">Junior (1-3y)</option>
                              <option value="Mid">Mid (3-6y)</option>
                              <option value="Senior">Senior (6y+)</option>
                           </select>
                        </div>
                        <div className="space-y-2">
                           <label className="text-xs font-bold text-stone-500 uppercase tracking-wide">Type</label>
                           <select
                              name="jobType"
                              value={formData.jobType}
                              onChange={handleChange}
                              className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-200 focus:bg-white transition-all cursor-pointer"
                           >
                              <option value="">Select Type</option>
                              <option value="Full-time">Full-time</option>
                              <option value="Contract">Contract</option>
                              <option value="Part-time">Part-time</option>
                           </select>
                        </div>
                     </div>

                     {/* Skills */}
                     <div className="space-y-2">
                        <label className="text-sm font-bold text-stone-700 uppercase tracking-wide">Key Skills</label>
                        <input
                           type="text"
                           name="skills"
                           value={formData.skills}
                           onChange={handleChange}
                           placeholder="e.g. Figma, React, User Research"
                           className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-200 focus:bg-white transition-all"
                        />
                     </div>

                     {/* Description */}
                     <div className="space-y-2">
                        <label className="text-sm font-bold text-stone-700 uppercase tracking-wide">Description</label>
                        <textarea
                           name="jobDescription"
                           value={formData.jobDescription}
                           onChange={handleChange}
                           rows={5}
                           placeholder="Paste the detailed job description here for AI analysis..."
                           className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-200 focus:bg-white transition-all resize-none"
                           required
                        />
                     </div>

                     {/* Submit Button */}
                     <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 rounded-xl bg-[#2e0249] text-white font-bold text-lg shadow-lg shadow-purple-900/20 hover:bg-[#4a1d96] hover:shadow-xl hover:-translate-y-0.5 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                     >
                        {isSubmitting ? (
                           <>
                              <Loader2 className="animate-spin" size={20} /> Analyzing...
                           </>
                        ) : (
                           <>
                              <Sparkles size={20} className="group-hover:text-yellow-300 transition-colors" /> Find Best Candidates
                           </>
                        )}
                     </button>
                  </form>
               </div>
            </div>

            {/* RIGHT COLUMN: Results Feed (7/12) */}
            <div className="xl:col-span-7 flex flex-col gap-6 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
               
               <div className="flex items-center justify-between">
                  <div>
                     <h2 className="text-2xl font-bold text-[#2e0249]">Top Matches</h2>
                     <p className="text-stone-500 text-sm">{message || "Waiting for job profile..."}</p>
                  </div>
                  {topCandidates.length > 0 && (
                     <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full border border-green-200">
                      Top {topCandidates.length} Candidates Found
                     </span>
                  )}
               </div>

               {/* Empty State */}
               {topCandidates.length === 0 && !isSubmitting && (
                  <div className="flex flex-col items-center justify-center py-20 bg-white/50 rounded-[2.5rem] border border-stone-200 border-dashed text-center">
                     <div className="w-20 h-20 bg-stone-100 rounded-full flex items-center justify-center mb-6 text-stone-400">
                        <Users size={32} />
                     </div>
                     <h3 className="text-xl font-bold text-stone-600">No Candidates Yet</h3>
                     <p className="text-stone-400 max-w-sm mt-2">
                        Fill out the job profile on the left to let our AI scan the database for the best talent.
                     </p>
                  </div>
               )}

               {/* Loading Skeleton */}
               {isSubmitting && (
                  <div className="space-y-4">
                     {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-white p-6 rounded-3xl border border-stone-100 shadow-sm animate-pulse">
                           <div className="flex gap-4">
                              <div className="w-12 h-12 bg-stone-200 rounded-full" />
                              <div className="flex-1 space-y-2">
                                 <div className="w-1/3 h-4 bg-stone-200 rounded" />
                                 <div className="w-1/4 h-3 bg-stone-100 rounded" />
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               )}

               {/* Results List */}
               <div className="space-y-4">
                  {topCandidates.map((c: any, i: number) => {
                     const badgeStyle = getScoreColor(c.score);
                     return (
                        <div key={i} className="group bg-white rounded-[2rem] p-6 md:p-8 border border-stone-200 shadow-sm transition-all hover:shadow-lg hover:border-purple-200 hover:-translate-y-1">
                           
                           <div className="flex flex-col md:flex-row gap-6">
                              
                              {/* Left: Avatar & Score */}
                              <div className="flex flex-row md:flex-col items-center gap-4 md:w-24 shrink-0">
                                 <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-100 to-indigo-50 border-2 border-white shadow-md flex items-center justify-center text-xl font-bold text-purple-700">
                                    {c.name.charAt(0)}
                                 </div>
                                 <div className="flex flex-col items-center">
                                    <span className="text-2xl font-black text-[#2e0249]">{c.score}/10</span>
                                    <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">AI Score</span>
                                 </div>
                              </div>

                              {/* Right: Content */}
                              <div className="flex-1">
                                 <div className="flex items-start justify-between mb-2">
                                    <div>
                                       <h3 className="text-xl font-bold text-[#2e0249] group-hover:text-purple-700 transition-colors">{c.name}</h3>
                                       <p className="text-stone-500 font-medium text-sm flex items-center gap-2">
                                          {c.role || "Candidate"} 
                                          <span className="w-1 h-1 rounded-full bg-stone-300" />
                                          {c.experience || "Experience N/A"}
                                       </p>
                                    </div>
                                    <div className={`px-3 py-1 rounded-full text-xs font-bold border ${badgeStyle} flex items-center gap-1`}>
                                       {c.score >= 8 && <Trophy size={12} />}
                                       {c.score >= 8 ? "Top Match" : c.score >= 5 ? "Good Fit" : "Weak Fit"}
                                    </div>
                                 </div>

                                 {/* Summary Box */}
                                 <div className="bg-stone-50 rounded-xl p-4 mb-4 border border-stone-100">
                                    <p className="text-stone-600 text-sm leading-relaxed">
                                       "{c.summary}"
                                    </p>
                                 </div>

                                 {/* AI Insight */}
                                 <div className="flex items-start gap-2 text-xs text-purple-800 bg-purple-50 p-3 rounded-lg border border-purple-100">
                                    <Sparkles size={14} className="shrink-0 mt-0.5 text-purple-600" />
                                    <span><span className="font-bold">AI Insight:</span> {c.reason}</span>
                                 </div>

                                 {/* Skills */}
                                 <div className="mt-4 flex flex-wrap gap-2">
                                    {c.skills.map((skill: string, idx: number) => (
                                       <span key={idx} className="px-3 py-1 bg-white border border-stone-200 text-stone-600 text-xs font-bold rounded-lg shadow-sm">
                                          {skill}
                                       </span>
                                    ))}
                                 </div>
                                 
                                 {/* Action Footer */}
                                 <div className="mt-6 pt-4 border-t border-stone-100 flex justify-end">
                                    <button className="text-sm font-bold text-purple-700 flex items-center gap-1 hover:underline underline-offset-4">
                                       View Full Profile <ChevronRight size={16} />
                                    </button>
                                 </div>

                              </div>
                           </div>
                        </div>
                     );
                  })}
               </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}