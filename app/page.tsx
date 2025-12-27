import Link from 'next/link';
import { 
  Briefcase, 
  FileText, 
  Target, 
  UserCheck, 
  Cpu, 
  Database,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Search,
  Zap
} from 'lucide-react';
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    // 1. GLOBAL THEME: Warm Beige Background
    <main className="relative min-h-screen bg-[#FDFBF7] text-stone-800 overflow-x-hidden selection:bg-purple-200 selection:text-purple-900">
      
      {/* 2. AMBIENT BACKGROUND GLOW (The "Editorial" Vibe) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
         <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-purple-200/30 rounded-full blur-[120px] mix-blend-multiply opacity-50 animate-blob" />
         <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-stone-200/40 rounded-full blur-[100px] mix-blend-multiply opacity-60 animate-blob animation-delay-2000" />
         <div className="absolute bottom-[-10%] left-[20%] w-[800px] h-[800px] bg-indigo-100/30 rounded-full blur-[120px] mix-blend-multiply opacity-50 animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10">
        
        {/* ==================== NAVBAR ==================== */}
        <nav className="w-full bg-[#FDFBF7]/80 backdrop-blur-md sticky top-0 z-50 border-b border-stone-200/50">
          <div className="mx-auto flex max-w-7xl items-center justify-between p-5 lg:px-8">
            <Link href="/" className="group flex items-center gap-3">
              <div className="p-2 bg-white rounded-xl border border-stone-200 shadow-sm group-hover:border-purple-200 transition-colors">
                <Briefcase className="h-5 w-5 text-[#2e0249]" />
              </div>
              <span className="text-xl font-black text-[#2e0249] tracking-tight">WorkAlign</span>
            </Link>
            
            <div className="hidden lg:flex lg:gap-x-10">
              <NavLink href="#features" text="Features" />
              <NavLink href="#ai-tech" text="How It Works" />
            </div>
            
            <div className="flex items-center gap-4">
              <SignedOut>
                <Link href="/sign-in" className="rounded-xl bg-[#2e0249] px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-purple-900/10 transition-all hover:bg-[#4a1d96] hover:-translate-y-0.5">
                  Get Started
                </Link>
              </SignedOut>
              <SignedIn>
                <div className="rounded-full ring-2 ring-stone-200 ring-offset-2 ring-offset-[#FDFBF7]">
                  <UserButton afterSignOutUrl="/" />
                </div>
              </SignedIn>
            </div>
          </div>
        </nav>

        {/* ==================== HERO SECTION ==================== */}
        <div className="relative pt-20 pb-32 lg:pt-32 lg:pb-40 overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-stone-200 text-purple-900 text-xs font-bold uppercase tracking-widest shadow-sm mb-8 animate-fade-in-up">
               <Sparkles size={14} className="text-purple-600" />
               Next-Gen Career Intelligence
            </div>

            {/* Headline */}
            <h1 className="text-6xl lg:text-8xl font-black text-[#2e0249] tracking-tighter mb-8 leading-[1.1] drop-shadow-sm animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              Your Career, <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Perfectly Aligned.</span>
            </h1>

            <p className="max-w-2xl mx-auto text-xl text-stone-600 font-medium mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              Stop guessing with keywords. Our AI analyzes the *meaning* of your experience to connect talent with opportunity instantly.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
               <SignedIn>
                  <Link href="/select-role" className="w-full sm:w-auto px-8 py-4 bg-[#2e0249] text-white rounded-2xl font-bold text-lg shadow-xl shadow-purple-900/20 hover:bg-[#4a1d96] hover:scale-105 transition-all flex items-center justify-center gap-2">
                    Go to Dashboard <ArrowRight size={20} />
                  </Link>
               </SignedIn>
               <SignedOut>
                  <Link href="/sign-in" className="w-full sm:w-auto px-8 py-4 bg-[#2e0249] text-white rounded-2xl font-bold text-lg shadow-xl shadow-purple-900/20 hover:bg-[#4a1d96] hover:scale-105 transition-all flex items-center justify-center gap-2">
                    Analyze My Resume <ArrowRight size={20} />
                  </Link>
                  <Link href="#how-it-works" className="w-full sm:w-auto px-8 py-4 bg-white text-[#2e0249] border border-stone-200 rounded-2xl font-bold text-lg hover:bg-stone-50 transition-all flex items-center justify-center gap-2">
                    See How It Works
                  </Link>
               </SignedOut>
            </div>

            {/* Floating Visual Elements (Abstract UI) */}
            <div className="relative mt-20 mx-auto max-w-5xl h-[400px] hidden md:block animate-fade-in-up" style={{ animationDelay: '500ms' }}>
               {/* Card 1: Resume */}
               <div className="absolute top-10 left-10 w-64 bg-white p-6 rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-stone-100 rotate-[-6deg] animate-float">
                  <div className="flex items-center gap-3 mb-4">
                     <div className="w-10 h-10 rounded-full bg-stone-100" />
                     <div className="space-y-2">
                        <div className="w-24 h-2 bg-stone-200 rounded-full" />
                        <div className="w-16 h-2 bg-stone-100 rounded-full" />
                     </div>
                  </div>
                  <div className="space-y-2">
                     <div className="w-full h-2 bg-stone-100 rounded-full" />
                     <div className="w-full h-2 bg-stone-100 rounded-full" />
                     <div className="w-3/4 h-2 bg-stone-100 rounded-full" />
                  </div>
                  <div className="mt-4 flex gap-2">
                     <span className="px-2 py-1 bg-purple-50 text-purple-700 text-xs rounded-md">React</span>
                     <span className="px-2 py-1 bg-purple-50 text-purple-700 text-xs rounded-md">Node</span>
                  </div>
               </div>

               {/* Card 2: Match Success */}
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 bg-[#2e0249] p-6 rounded-3xl shadow-2xl shadow-purple-900/30 z-20 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex justify-between items-center text-white mb-6">
                     <span className="text-sm font-bold opacity-80">Match Score</span>
                     <Sparkles size={16} className="text-yellow-400" />
                  </div>
                  <div className="flex items-center justify-center">
                     <div className="relative w-32 h-32 flex items-center justify-center">
                        <svg className="absolute w-full h-full rotate-[-90deg]">
                           <circle cx="64" cy="64" r="56" stroke="rgba(255,255,255,0.1)" strokeWidth="8" fill="none" />
                           <circle cx="64" cy="64" r="56" stroke="#a855f7" strokeWidth="8" fill="none" strokeDasharray="351" strokeDashoffset="35" strokeLinecap="round" />
                        </svg>
                        <span className="text-4xl font-black text-white">92%</span>
                     </div>
                  </div>
                  <div className="mt-6 text-center">
                     <p className="text-white font-bold">Perfect Match Found!</p>
                     <p className="text-purple-200 text-sm">Senior Full Stack Engineer</p>
                  </div>
               </div>

               {/* Card 3: Job Posting */}
               <div className="absolute top-20 right-10 w-64 bg-white p-6 rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-stone-100 rotate-[6deg] animate-float" style={{ animationDelay: '2s' }}>
                  <div className="w-10 h-10 rounded-lg bg-indigo-100 mb-4 flex items-center justify-center">
                     <Briefcase size={20} className="text-indigo-600" />
                  </div>
                  <div className="w-32 h-4 bg-stone-800 rounded-full mb-2" />
                  <div className="w-20 h-3 bg-stone-300 rounded-full mb-4" />
                  <div className="w-full h-24 bg-stone-50 rounded-lg border border-stone-100" />
               </div>
            </div>

          </div>
        </div>

        {/* ==================== INFINITE MARQUEE (Skills) ==================== */}
        <div className="w-full bg-[#2e0249] py-8 overflow-hidden -rotate-1 origin-left scale-105 border-y-4 border-purple-500">
           <div className="flex whitespace-nowrap animate-scroll">
              {[...Array(2)].map((_, i) => (
                 <div key={i} className="flex gap-12 mx-6">
                    {["REACT.JS", "PYTHON", "MACHINE LEARNING", "LEADERSHIP", "SQL", "SYSTEM DESIGN", "NEXT.JS", "TYPESCRIPT", "AWS", "DOCKER"].map((skill, idx) => (
                       <span key={idx} className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-white opacity-80">
                          {skill}
                       </span>
                    ))}
                 </div>
              ))}
           </div>
        </div>

        {/* ==================== BENTO GRID FEATURES ==================== */}
        <div id="features" className="py-32 px-6">
           <div className="max-w-7xl mx-auto">
              <div className="text-center mb-20">
                 <h2 className="text-4xl md:text-5xl font-black text-[#2e0249] mb-4">Why WorkAlign?</h2>
                 <p className="text-xl text-stone-600">The smartest way to navigate the modern job market.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 {/* Feature 1: Large Span */}
                 <div className="md:col-span-2 bg-white rounded-[2.5rem] p-10 border border-stone-200 shadow-sm hover:shadow-xl transition-all group overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-purple-50 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700 ease-in-out" />
                    <div className="relative z-10">
                       <div className="w-14 h-14 bg-[#2e0249] rounded-2xl flex items-center justify-center mb-6 text-white">
                          <Cpu size={28} />
                       </div>
                       <h3 className="text-2xl font-bold text-[#2e0249] mb-3">AI Context Understanding</h3>
                       <p className="text-stone-500 text-lg leading-relaxed max-w-md">
                          Most ATS scanners fail because they just look for keywords. WorkAlign uses 
                          <span className="font-bold text-purple-700"> Vector Embeddings</span> to understand 
                          that "React" implies "JavaScript" expertise, ensuring you never miss a match.
                       </p>
                    </div>
                    

[Image of neural network connecting resume concepts]

                 </div>

                 {/* Feature 2: Vertical */}
                 <div className="md:col-span-1 bg-indigo-50 rounded-[2.5rem] p-10 border border-indigo-100 relative overflow-hidden group">
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-indigo-100 rounded-full blur-2xl" />
                    <div className="relative z-10">
                       <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 text-indigo-600 shadow-sm">
                          <Target size={28} />
                       </div>
                       <h3 className="text-2xl font-bold text-[#2e0249] mb-3">Precision Matching</h3>
                       <p className="text-stone-600">
                          Get a quantified "Fit Score" for every job. Know exactly where you stand before applying.
                       </p>
                    </div>
                 </div>

                 {/* Feature 3: Standard */}
                 <div className="bg-white rounded-[2.5rem] p-10 border border-stone-200 shadow-sm hover:shadow-xl transition-all group">
                    <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 text-purple-700">
                       <Search size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-[#2e0249] mb-3">Hidden Gems</h3>
                    <p className="text-stone-500">
                       Discover roles that fit your skills perfectly but have job titles you wouldn't think to search for.
                    </p>
                 </div>

                 {/* Feature 4: Large Span */}
                 <div className="md:col-span-2 bg-[#2e0249] rounded-[2.5rem] p-10 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                       <div className="flex-1">
                          <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 text-white">
                             <UserCheck size={28} />
                          </div>
                          <h3 className="text-2xl font-bold mb-3">Recruiter Dashboard</h3>
                          <p className="text-purple-200 text-lg">
                             Are you hiring? Instantly rank 1000+ applicants by semantic relevance. 
                             Save 90% of your screening time.
                          </p>
                          <div className="mt-6">
                             <span className="text-sm font-bold uppercase tracking-widest border-b border-purple-400 pb-1">For Enterprise</span>
                          </div>
                       </div>
                       
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* ==================== HOW IT WORKS (Visual Steps) ==================== */}
        <div id="ai-tech" className="py-32 bg-white relative overflow-hidden">
           {/* Decorative Background Grid */}
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
           
           <div className="max-w-7xl mx-auto px-6 relative z-10">
              <div className="text-center mb-20">
                 <h2 className="text-4xl md:text-5xl font-black text-[#2e0249] mb-4">From PDF to Prediction</h2>
                 <p className="text-xl text-stone-500">The science behind the magic.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                 {/* Connection Line (Desktop) */}
                 <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-stone-200 border-t-2 border-dashed border-stone-300 z-0"></div>

                 {/* Step 1 */}
                 <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-24 h-24 bg-[#FDFBF7] rounded-full border-4 border-white shadow-xl flex items-center justify-center mb-8">
                       <FileText size={32} className="text-stone-400" />
                    </div>
                    <h3 className="text-xl font-bold text-[#2e0249] mb-2">1. Parsing</h3>
                    <p className="text-stone-500 text-sm max-w-xs">We extract raw text from your PDF, preserving structure and hierarchy.</p>
                 </div>

                 {/* Step 2 */}
                 <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-24 h-24 bg-purple-600 rounded-full border-4 border-white shadow-xl flex items-center justify-center mb-8 animate-pulse">
                       <Database size={32} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#2e0249] mb-2">2. Vector Embedding</h3>
                    <p className="text-stone-500 text-sm max-w-xs">Text is converted into high-dimensional vectors representing semantic meaning.</p>
                 </div>

                 {/* Step 3 */}
                 <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-24 h-24 bg-[#FDFBF7] rounded-full border-4 border-white shadow-xl flex items-center justify-center mb-8">
                       <CheckCircle2 size={32} className="text-green-500" />
                    </div>
                    <h3 className="text-xl font-bold text-[#2e0249] mb-2">3. Strategic Reasoning</h3>
                    <p className="text-stone-500 text-sm max-w-xs">Our LLM compares your vector against millions of job data points.</p>
                 </div>
              </div>
           </div>
        </div>

        {/* ==================== FOOTER ==================== */}
        <footer className="bg-[#2e0249] text-white py-12 border-t border-purple-900">
           <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-2">
                 <div className="p-1.5 bg-white rounded-lg">
                    <Briefcase size={16} className="text-[#2e0249]" />
                 </div>
                 <span className="font-bold text-xl">WorkAlign</span>
              </div>
              <p className="text-purple-300 text-sm">© 2024 WorkAlign Intelligence. All rights reserved.</p>
           </div>
        </footer>

      </div>
    </main>
  );
}

// Helper Component for Nav
function NavLink({ href, text }: { href: string; text: string }) {
  return (
    <a href={href} className="relative text-sm font-bold text-stone-600 transition-colors hover:text-[#2e0249] group">
      {text}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2e0249] transition-all duration-300 group-hover:w-full"></span>
    </a>
  );
}




// import Link from 'next/link';
// import { 
//   Briefcase, 
//   FileText, 
//   Target, 
//   UserCheck, 
//   Cpu, 
//   Database,
//   Sparkles,
//   ArrowRight,
//   Play,
//   Zap,
//   Star
// } from 'lucide-react';
// import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

// export default function HomeDark() {
//   return (
//     // 1. THEME: Deep Void Background
//     <main className="relative min-h-screen bg-[#05020A] text-white overflow-x-hidden selection:bg-purple-500 selection:text-white">
      
//       {/* 2. AMBIENT GRID & GLOWS */}
//       <div className="fixed inset-0 z-0 pointer-events-none">
//          {/* Grid Pattern */}
//          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
         
//          {/* Spotlights */}
//          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
//          <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px]" />
//       </div>

//       <div className="relative z-10">
        
//         {/* ==================== NAVBAR (Dark Glass) ==================== */}
//         <nav className="w-full bg-[#05020A]/70 backdrop-blur-xl sticky top-0 z-50 border-b border-white/5">
//           <div className="mx-auto flex max-w-7xl items-center justify-between p-5 lg:px-8">
//             <Link href="/" className="group flex items-center gap-3">
//               <div className="p-2 bg-gradient-to-tr from-purple-600 to-indigo-600 rounded-lg shadow-lg shadow-purple-500/20">
//                 <Briefcase className="h-5 w-5 text-white" />
//               </div>
//               <span className="text-xl font-bold text-white tracking-wide">WorkAlign</span>
//             </Link>
            
//             <div className="hidden lg:flex lg:gap-x-10">
//               <NavLink href="#features" text="Features" />
//               <NavLink href="#ai-tech" text="Technology" />
//             </div>
            
//             <div className="flex items-center gap-4">
//               <SignedOut>
//                 <Link href="/sign-in" className="group relative px-6 py-2.5 rounded-lg bg-white text-black font-bold text-sm overflow-hidden transition-all hover:scale-105">
//                   <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-300 via-purple-300 to-indigo-300 opacity-0 group-hover:opacity-100 transition-opacity" />
//                   <span className="relative z-10">Get Started</span>
//                 </Link>
//               </SignedOut>
//               <SignedIn>
//                 <div className="rounded-full ring-2 ring-purple-500/50 ring-offset-2 ring-offset-[#05020A]">
//                   <UserButton afterSignOutUrl="/" />
//                 </div>
//               </SignedIn>
//             </div>
//           </div>
//         </nav>

//         {/* ==================== HERO SECTION ==================== */}
//         <div className="relative pt-24 pb-32 lg:pt-40 lg:pb-48 text-center px-6">
            
//             {/* Announcement Chip */}
//             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-purple-300 text-xs font-medium tracking-wider mb-8 hover:bg-white/10 transition-colors cursor-default backdrop-blur-md">
//                <span className="relative flex h-2 w-2">
//                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
//                   <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
//                </span>
//                AI Model v2.0 Live
//             </div>

//             {/* Glowing Headline */}
//             <h1 className="text-5xl lg:text-8xl font-black text-white tracking-tighter mb-8 leading-[1.1] drop-shadow-[0_0_60px_rgba(168,85,247,0.4)]">
//               Decode Your <br/>
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-indigo-400">Career DNA.</span>
//             </h1>

//             <p className="max-w-2xl mx-auto text-xl text-gray-400 mb-12 leading-relaxed">
//               Leverage advanced vector embeddings to translate your resume into opportunity. 
//               <span className="text-white"> Precision matching, zero noise.</span>
//             </p>

//             {/* CTAs */}
//             <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//                <SignedIn>
//                   <Link href="/select-role" className="w-full sm:w-auto px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-bold text-lg shadow-[0_0_40px_-10px_rgba(147,51,234,0.5)] transition-all flex items-center justify-center gap-2">
//                     Launch Console <ArrowRight size={20} />
//                   </Link>
//                </SignedIn>
//                <SignedOut>
//                   <Link href="/sign-in" className="w-full sm:w-auto px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-bold text-lg shadow-[0_0_40px_-10px_rgba(147,51,234,0.5)] transition-all flex items-center justify-center gap-2">
//                     Analyze Resume <Zap size={20} className="fill-white" />
//                   </Link>
//                   <Link href="#ai-tech" className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm">
//                     <Play size={18} /> Watch Demo
//                   </Link>
//                </SignedOut>
//             </div>
//         </div>

//         {/* ==================== STATS STRIP ==================== */}
//         <div className="w-full border-y border-white/10 bg-white/[0.02] backdrop-blur-sm">
//            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 py-10 px-6 text-center">
//               {[
//                  { label: "Resumes Analyzed", val: "10k+" },
//                  { label: "Matches Found", val: "8.5k" },
//                  { label: "Accuracy Rate", val: "99.9%" },
//                  { label: "Companies", val: "500+" }
//               ].map((stat, i) => (
//                  <div key={i}>
//                     <div className="text-3xl font-black text-white mb-1">{stat.val}</div>
//                     <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">{stat.label}</div>
//                  </div>
//               ))}
//            </div>
//         </div>

//         {/* ==================== FEATURES GRID ==================== */}
//         <div id="features" className="py-32 px-6">
//            <div className="max-w-7xl mx-auto">
//               <div className="mb-20">
//                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Intelligence <span className="text-purple-400">Built-In.</span></h2>
//                  <p className="text-xl text-gray-400 max-w-xl">Our architecture is designed to bypass traditional keyword filtering.</p>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                  {/* Feature 1 */}
//                  <div className="md:col-span-2 group relative bg-gradient-to-b from-white/10 to-transparent p-1px rounded-3xl overflow-hidden">
//                     <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
//                     <div className="relative h-full bg-[#0A0510] rounded-[23px] p-10 border border-white/5 flex flex-col md:flex-row items-center gap-8">
//                        <div className="flex-1">
//                           <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6 border border-purple-500/30">
//                              <Cpu size={24} className="text-purple-400" />
//                           </div>
//                           <h3 className="text-2xl font-bold text-white mb-3">Semantic Understanding</h3>
//                           <p className="text-gray-400 leading-relaxed">
//                              Our Deep Learning models map the relationship between skills. We know that <span className="text-white">"Frontend"</span> relates to <span className="text-white">"React"</span> even if you don't explicitly say it.
//                           </p>
//                        </div>
//                     </div>
//                  </div>

//                  {/* Feature 2 */}
//                  <div className="md:col-span-1 group relative bg-white/5 rounded-3xl p-10 border border-white/5 hover:bg-white/10 transition-colors">
//                      <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-6 border border-indigo-500/30">
//                         <Target size={24} className="text-indigo-400" />
//                      </div>
//                      <h3 className="text-2xl font-bold text-white mb-3">Skill Gap Heatmap</h3>
//                      <p className="text-gray-400">
//                         Visualized data showing exactly what skills you are missing for your dream role.
//                      </p>
//                  </div>

//                  {/* Feature 3 */}
//                  <div className="md:col-span-1 group relative bg-white/5 rounded-3xl p-10 border border-white/5 hover:bg-white/10 transition-colors">
//                      <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center mb-6 border border-pink-500/30">
//                         <UserCheck size={24} className="text-pink-400" />
//                      </div>
//                      <h3 className="text-2xl font-bold text-white mb-3">Instant Ranking</h3>
//                      <p className="text-gray-400">
//                         Recruiters see the best candidates first, sorted by AI relevance score.
//                      </p>
//                  </div>

//                  {/* Feature 4 */}
//                  <div className="md:col-span-2 group relative bg-white/5 rounded-3xl p-10 border border-white/5 hover:bg-white/10 transition-colors overflow-hidden">
//                      {/* Decorative Elements */}
//                      <div className="absolute right-0 top-0 w-64 h-64 bg-purple-600/20 blur-[80px] rounded-full pointer-events-none"></div>
                     
//                      <h3 className="text-2xl font-bold text-white mb-3 relative z-10">ATS Simulation Engine</h3>
//                      <p className="text-gray-400 max-w-lg relative z-10">
//                         Run your resume against standard Applicant Tracking System algorithms before you apply. Get a pass/fail score instantly.
//                      </p>
                     
//                      <div className="mt-8 flex gap-4 relative z-10">
//                         <div className="px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-sm font-mono">
//                            Pass: 92%
//                         </div>
//                         <div className="px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm font-mono">
//                            Fail: Formatting
//                         </div>
//                      </div>
//                  </div>
//               </div>
//            </div>
//         </div>

//         {/* ==================== HOW IT WORKS (Neon Steps) ==================== */}
//         <div id="ai-tech" className="py-32 relative">
//            <div className="max-w-7xl mx-auto px-6">
//               <div className="text-center mb-20">
//                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Pipeline Architecture</h2>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
//                  {/* Glowing Line */}
//                  <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>

//                  {[
//                     { title: "Parsing", icon: FileText, color: "text-blue-400", desc: "Structure Extraction" },
//                     { title: "Embedding", icon: Database, color: "text-purple-400", desc: "Vector Conversion" },
//                     { title: "Analysis", icon: Sparkles, color: "text-pink-400", desc: "Pattern Matching" }
//                  ].map((step, i) => (
//                     <div key={i} className="relative z-10 flex flex-col items-center text-center group">
//                        <div className="w-24 h-24 bg-[#0F0518] rounded-2xl border border-white/10 shadow-[0_0_30px_-10px_rgba(255,255,255,0.1)] flex items-center justify-center mb-8 group-hover:border-purple-500/50 group-hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.3)] transition-all duration-500">
//                           <step.icon size={32} className={`${step.color}`} />
//                        </div>
//                        <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
//                        <p className="text-gray-500 text-sm font-mono">{step.desc}</p>
//                     </div>
//                  ))}
//               </div>
//            </div>
//         </div>

//         {/* ==================== FOOTER ==================== */}
//         <footer className="border-t border-white/5 bg-black py-12">
//            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
//               <div className="flex items-center gap-2 opacity-80">
//                  <Briefcase size={20} className="text-purple-500" />
//                  <span className="font-bold text-xl text-white">WorkAlign</span>
//               </div>
//               <p className="text-gray-600 text-sm">© 2024 WorkAlign. System Status: <span className="text-green-500">Operational</span></p>
//            </div>
//         </footer>

//       </div>
//     </main>
//   );
// }

// // Nav Helper
// function NavLink({ href, text }: { href: string; text: string }) {
//   return (
//     <a href={href} className="text-sm font-medium text-gray-400 transition-colors hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
//       {text}
//     </a>
//   );
// }