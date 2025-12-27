// // 'use client'; // This component is interactive

// // import { useState } from 'react';
// // import { Loader2 } from 'lucide-react';

// // export default function JobPostForm() {
// //   const [isLoading, setIsLoading] = useState(false);
// //   const [error, setError] = useState<string | null>(null);

// //   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
// //     e.preventDefault();
// //     setIsLoading(true);
// //     setError(null);

// //     // --- We will build the API call here ---
// //     // Simulating a 2-second search for now
// //     console.log('Simulating AI candidate search...');
// //     await new Promise(resolve => setTimeout(resolve, 2000));
// //     console.log('Search complete!');
// //     // ----------------------------------------
    
// //     setIsLoading(false);
// //     // Here we will redirect to a results page
// //   };

// //   return (
// //     <div className="w-full max-w-xl rounded-2xl bg-white p-8 shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-purple-200">
// //       <form onSubmit={handleSubmit} className="space-y-6">
        
// //         {/* Job Title Field */}
// //         <div>
// //           <label htmlFor="job-title" className="block text-sm font-semibold text-red-950">
// //             Job Title
// //           </label>
// //           <input
// //             type="text"
// //             name="job-title"
// //             id="job-title"
// //             required
// //             className="mt-2 block w-full rounded-lg border-purple-300 px-4 py-3 text-purple-900 shadow-sm transition-colors
// //             focus:border-purple-700 focus:ring-2 focus:ring-purple-700 focus:ring-offset-2
// //             disabled:cursor-not-allowed disabled:bg-gray-100"
// //             placeholder="e.g., Senior Python Developer"
// //             disabled={isLoading}
// //           />
// //         </div>

// //         {/* Job Description & Skills Field */}
// //         <div>
// //           <label htmlFor="job-description" className="block text-sm font-semibold text-red-950">
// //             Job Description & Skills
// //           </label>
// //           <textarea
// //             name="job-description"
// //             id="job-description"
// //             rows={8}
// //             required
// //             className="mt-2 block w-full rounded-lg border-purple-300 px-4 py-3 text-purple-900 shadow-sm transition-colors
// //             focus:border-purple-700 focus:ring-2 focus:ring-purple-700 focus:ring-offset-2
// //             disabled:cursor-not-allowed disabled:bg-gray-100"
// //             placeholder="Describe the responsibilities, requirements, and key skills (e.g., React, FastAPI, MongoDB...)"
// //             disabled={isLoading}
// //           />
// //         </div>

// //         {/* Error Message */}
// //         {error && (
// //           <p className="text-center text-sm font-medium text-red-600">
// //             {error}
// //           </p>
// //         )}

// //         {/* Submit Button */}
// //         <button
// //           type="submit"
// //           disabled={isLoading}
// //           className="flex w-full items-center justify-center rounded-full bg-purple-700 px-6 py-3 
// //           text-base font-semibold text-white shadow-lg transition-all duration-300 
// //           transform hover:bg-purple-800 hover:scale-105 
// //           focus:outline-none focus:ring-2 focus:ring-purple-700 focus:ring-offset-2
// //           disabled:cursor-not-allowed disabled:bg-purple-300 disabled:hover:scale-100"
// //         >
// //           {isLoading ? (
// //             <>
// //               <Loader2 className="mr-2 h-5 w-5 animate-spin" />
// //               Searching for Candidates...
// //             </>
// //           ) : (
// //             'Find Top Matches'
// //           )}
// //         </button>
// //       </form>
// //     </div>
// //   );
// // }


// 'use client'; // This component is interactive

// import { useState } from 'react';
// import { Loader2, Briefcase } from 'lucide-react';

// export default function JobPostForm() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError(null);

//     // --- We will build the API call here ---
//     // Simulating a 2-second search for now
//     console.log('Simulating AI candidate search...');
//     await new Promise(resolve => setTimeout(resolve, 2000));
//     console.log('Search complete!');
//     // ----------------------------------------
    
//     setIsLoading(false);
//     // Here we will redirect to a results page
//   };

//   return (
//     <div className="w-full max-w-xl rounded-2xl bg-white p-8 shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-purple-200 md:p-10">
      
//       {/* 1. Internal Header */}
//       <div className="flex flex-col items-center text-center">
//         <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
//           <Briefcase className="h-8 w-8 text-purple-700" />
//         </div>
//         <h2 className="mt-4 text-2xl font-bold text-red-950">
//           Describe the Perfect Role
//         </h2>
//       </div>
      
//       {/* 2. The Form */}
//       <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        
//         {/* Job Title Field */}
//         <div>
//           <label htmlFor="job-title" className="block text-sm font-semibold leading-6 text-red-950">
//             Job Title
//           </label>
//           <div className="mt-2">
//             <input
//               type="text"
//               name="job-title"
//               id="job-title"
//               required
//               className="block w-full rounded-lg border-2 border-purple-100 bg-purple-50 
//               px-4 py-3 text-purple-900 shadow-sm transition-all
//               placeholder:text-purple-900/60
//               focus:border-purple-700 focus:outline-none 
//               focus:ring-4 focus:ring-purple-200/50
//               disabled:cursor-not-allowed disabled:bg-gray-100"
//               placeholder="e.g., Senior Python Developer"
//               disabled={isLoading}
//             />
//           </div>
//         </div>

//         {/* Job Description & Skills Field */}
//         <div>
//           <label htmlFor="job-description" className="block text-sm font-semibold leading-6 text-red-950">
//             Job Description & Skills
//           </label>
//           <div className="mt-2">
//             <textarea
//               name="job-description"
//               id="job-description"
//               rows={8}
//               required
//               className="block w-full rounded-lg border-2 border-purple-100 bg-purple-50 
//               px-4 py-3 text-purple-900 shadow-sm transition-all
//               placeholder:text-purple-900/60
//               focus:border-purple-700 focus:outline-none 
//               focus:ring-4 focus:ring-purple-200/50
//               disabled:cursor-not-allowed disabled:bg-gray-100"
//               placeholder="Describe the responsibilities, requirements, and key skills (e.g., React, FastAPI, MongoDB...)"
//               disabled={isLoading}
//             />
//           </div>
//         </div>

//         {/* Error Message */}
//         {error && (
//           <p className="text-center text-sm font-medium text-red-600">
//             {error}
//           </p>
//         )}

//         {/* 3. Submit Button */}
//         <button
//           type="submit"
//           disabled={isLoading}
//           className="flex w-full items-center justify-center rounded-full bg-purple-700 px-6 py-3 
//           text-base font-semibold text-white shadow-lg transition-all duration-300 
//           transform hover:bg-purple-800 hover:scale-105 
//           focus:outline-none focus:ring-2 focus:ring-purple-700 focus:ring-offset-2
//           disabled:cursor-not-allowed disabled:bg-purple-300 disabled:hover:scale-100"
//         >
//           {isLoading ? (
//             <>
//               <Loader2 className="mr-2 h-5 w-5 animate-spin" />
//               Searching for Candidates...
//             </>
//           ) : (
//             'Find Top Matches'
//           )}
//         </button>
//       </form>
//     </div>
//   );
// }

