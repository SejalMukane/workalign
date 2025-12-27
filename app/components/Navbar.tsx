// 'use client'; // This is needed for Clerk's hooks

// import Link from 'next/link';
// import { Briefcase } from 'lucide-react';
// import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

// export default function Navbar() {
//   return (
//     <nav className="w-full bg-amber-50/70 backdrop-blur-lg sticky top-0 z-50 border-b border-black/5">
//       <div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
//         {/* Logo */}
//         <Link href="/" className="flex items-center gap-2 transition-transform hover:scale-105">
//           <Briefcase className="h-6 w-6 text-purple-700" />
//           <span className="text-xl font-bold text-red-950">
//             WorkAlign
//           </span>
//         </Link>
        
//         {/* Nav Links */}
//         <div className="hidden lg:flex lg:gap-x-12">
//           <a href="/#features" className="text-sm font-semibold leading-6 text-purple-900 transition-colors hover:text-red-950">
//             Features
//           </a>
//           <a href="/#ai-tech" className="text-sm font-semibold leading-6 text-purple-900 transition-colors hover:text-red-950">
//             How It Works
//           </a>
//         </div>
        
//         {/* Auth Buttons */}
//         <div className="flex items-center">
//           <SignedOut>
//             <Link
//               href="/sign-in"
//               className="rounded-full bg-purple-700 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 transform hover:bg-purple-800 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-700 focus:ring-offset-2 focus:ring-offset-amber-50"
//             >
//               Sign In / Get Started
//             </Link>
//           </SignedOut>
//           <SignedIn>
//             <div className="rounded-full ring-2 ring-purple-700 ring-offset-2 ring-offset-amber-50">
//               <UserButton afterSignOutUrl="/" />
//             </div>
//           </SignedIn>
//         </div>
//       </div>
//     </nav>
//   );
// }


'use client'; 

import Link from 'next/link';
import { Briefcase } from 'lucide-react';
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    // UPDATED: Warm beige background with blur and a subtle stone border
    <nav className="w-full bg-[#FDFBF7]/90 backdrop-blur-md sticky top-0 z-50 border-b border-stone-200 transition-all">
      <div className="mx-auto flex max-w-[96%] items-center justify-between p-5 lg:px-8">
        
        {/* LOGO SECTION */}
        <Link href="/" className="group flex items-center gap-3 transition-transform hover:scale-[1.02]">
          <div className="p-2 bg-white rounded-xl border border-stone-200 shadow-sm group-hover:border-purple-200 transition-colors">
            {/* Using the Deep Purple Brand Color */}
            <Briefcase className="h-5 w-5 text-[#2e0249]" />
          </div>
          <span className="text-xl font-black text-[#2e0249] tracking-tight">
            WorkAlign
          </span>
        </Link>
        
        {/* NAV LINKS (Desktop) */}
        <div className="hidden lg:flex lg:gap-x-10">
          <NavLink href="/#features" text="Features" />
          <NavLink href="/#ai-tech" text="How It Works" />
        </div>
        
        {/* AUTH BUTTONS */}
        <div className="flex items-center gap-4">
          <SignedOut>
            <Link
              href="/sign-in"
              className="rounded-xl bg-[#2e0249] px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-purple-900/10 transition-all duration-300 hover:bg-[#4a1d96] hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-purple-700 focus:ring-offset-2 focus:ring-offset-[#FDFBF7]"
            >
              Sign In
            </Link>
          </SignedOut>
          
          <SignedIn>
            {/* Ring matches the background color for a clean cutout look */}
            <div className="rounded-full ring-2 ring-stone-200 ring-offset-2 ring-offset-[#FDFBF7]">
              <UserButton afterSignOutUrl="/" />
            </div>
          </SignedIn>
        </div>

      </div>
    </nav>
  );
}

// Helper Component for consistent Link styling
function NavLink({ href, text }: { href: string; text: string }) {
  return (
    <a 
      href={href} 
      className="relative text-sm font-semibold text-stone-600 transition-colors hover:text-[#2e0249] group"
    >
      {text}
      {/* Animated Underline Effect */}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2e0249] transition-all duration-300 group-hover:w-full"></span>
    </a>
  );
}