

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Public paths (no authentication needed)
const isPublicRoute = createRouteMatcher([
  "/",
  "/sign-in(.*)",
  "/sign-up(.*)",
]);

export default clerkMiddleware((auth, req) => {
  if (isPublicRoute(req)) {
    return; // Allow public routes
  }

  // Protect all other routes
  auth.protect();   // ✅ THIS is correct for your version
});

export const config = {
  matcher: [
    "/((?!_next|.*\\..*).*)",
  ],
};
