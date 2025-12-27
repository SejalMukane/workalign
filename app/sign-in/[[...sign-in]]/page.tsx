import { SignIn } from "@clerk/nextjs";
import Link from "next/link";
import { Briefcase } from "lucide-react";

export default function SignInPage() {
  return (
    // We create a full-page layout to center the component
    <main className="flex min-h-screen flex-col items-center bg-workalign-dark p-6">
      {/* App Logo */}
      <Link href="/" className="flex items-center gap-2 pt-8">
        <Briefcase className="h-8 w-8 text-workalign-primary" />
        <span className="text-2xl font-bold text-white">
          WorkAlign
        </span>
      </Link>

      {/* Clerk Sign-In Component */}
      <div className="flex flex-1 items-center justify-center">
        <SignIn />
      </div>
    </main>
  );
}