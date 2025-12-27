// // import { clerkMiddleware } from '@clerk/nextjs/server';

// // export default clerkMiddleware();

// // export const config = {
// //   matcher: [
// //     // Skip Next.js internals and all static files, unless found in search params
// //     '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
// //     // Always run for API routes
// //     '/(api|trpc)(.*)',
// //   ],
// // };


// // import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// // // 1. Define which routes are public
// // const isPublicRoute = createRouteMatcher([
// //   '/',
// //   '/sign-in(.*)', // Matches /sign-in and /sign-in/...
// //   '/sign-up(.*)', // Matches /sign-up and /sign-up/...
// // ]);

// // // 2. Export the middleware
// // export default clerkMiddleware((auth, req) => {
// //   // Check if the route is public
// //   if (isPublicRoute(req)) {
// //     // If it's public, do nothing.
// //     return;
// //   }

// //   // If it's not public, protect it.
// //   auth.protect();
// // });

// // export const config = {
// //   matcher: [
// //     // Skip Next.js internals and all static files
// //     '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
// //     // Always run for API routes
// //     '/(api|trpc)(.*)',
// //   ],
// // };



// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
// import { NextResponse } from "next/server";

// // 1. Define public routes
// const isPublicRoute = createRouteMatcher([
//   "/",
//   "/sign-in(.*)",
//   "/sign-up(.*)",
// ]);

// // 2. Middleware
// export default clerkMiddleware((auth, req) => {
//   // Allow public routes
//   if (isPublicRoute(req)) {
//     return NextResponse.next();
//   }

//   // Protect private routes
//   auth.protect();

//   return NextResponse.next();
// });

// // 3. Routes where middleware should run
// export const config = {
//   matcher: [
//     // Skip Next.js internals + static files
//     "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",

//     // Always run for API routes
//     "/(api|trpc)(.*)",
//   ],
// };


// import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// // 1. Define which routes are public
// const isPublicRoute = createRouteMatcher([
//   '/',
//   '/sign-in(.*)', // Matches /sign-in and /sign-in/...
//   '/sign-up(.*)', // Matches /sign-up and /sign-up/...
// ]);

// // 2. Export the middleware
// export default clerkMiddleware((auth, req) => {
//   // Check if the route is public
//   if (isPublicRoute(req)) {
//     // If it's public, do nothing.
//     return;
//   }

//   // If it's not public, protect it.
//   auth.protect();
// });

// export const config = {
//   matcher: [
//     // Protect ALL routes EXCEPT static files and API routes that should be public
//     '/((?!_next/static|_next/image|favicon.ico).*)',
//   ],
// };



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
