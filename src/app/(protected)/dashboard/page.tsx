// "use client";

// import useProject from "@/hooks/use-project";
// import { useUser } from "@clerk/nextjs";
// import { ExternalLink, Github } from "lucide-react";
// import Link from "next/link";
// import React from 'react'
// import CommitLog from "./commit-log";
// import AskQuestionCard from "./ask-question-card";
// import MeetingCard from "./meeting-card";
// import ArchiveButton from "./archive-button";
// import InviteButton from "./invite-button";
// import TeamMembers from "./team-members";

// const DashboardPage = () => {
//   const { project } = useProject()

//   return (
//     <div>
//       {/* {project?.id} */}
//       <div className="flex items-center justify-between flex-wrap gap-y-4">
//         {/* github link */}
//           <div className="w-fit rounded-md bg-primary px-4 py-3">
//             <div className="flex items-center">
//             <Github className="size-5 text-white"/>
//                 <div className="ml-2">
//                   <p className="text-sm font-medium text-white">
//                     This project is linked to {' '}
//                     <Link href={project?.githubUrl ?? ""} className="inline-flex items-center text-white/80 hover:underline">
//                     {project?.githubUrl}
//                     <ExternalLink className="ml-1 size-4"/>
//                     </Link>
//                   </p>
//                 </div>
//             </div>
                
//           </div>

//           <div className="h-4"></div>
//           <div className="flex items-center gap-4">
//             <TeamMembers/>
//             <InviteButton />
//             <ArchiveButton />
//           </div>
//       </div>

//       <div className="mt-4">
//          <div className="grid grid-cols-1 gap-4 sm:grid-cols-5">
//           <AskQuestionCard /> 
//           <MeetingCard/>
//          </div>
//       </div>

//       <div className="mt-8"></div>
//       <CommitLog />
//     </div>
//   )
// };

// export default DashboardPage;


"use client";

import useProject from "@/hooks/use-project";
import { useUser } from "@clerk/nextjs";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import React from 'react';
import CommitLog from "./commit-log";
import AskQuestionCard from "./ask-question-card";
import MeetingCard from "./meeting-card";
import ArchiveButton from "./archive-button";
import InviteButton from "./invite-button";
import TeamMembers from "./team-members";

const DashboardPage = () => {
  const { project } = useProject();

  return (
    <div className="relative bg-gradient-to-br from-blue-300 via-purple-400 to-blue-500 p-6 min-h-screen">
      {/* Header Container with Glass Effect */}
      <div className="p-0.5 rounded-3xl bg-gradient-to-r from-white/40 to-white/20 shadow-xl mb-8">
        <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-y-4">
            {/* Github Link Card */}
            <div className="p-0.5 rounded-xl bg-gradient-to-r from-blue-300 via-purple-400 to-blue-500 shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-2xl">
              <div className="w-fit rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 px-4 py-3">
                <div className="flex items-center">
                  <Github className="size-5 text-white drop-shadow-md"/>
                  <div className="ml-2">
                    <p className="text-sm font-medium text-white drop-shadow-sm">
                      This project is linked to {' '}
                      <Link href={project?.githubUrl ?? ""} className="inline-flex items-center text-white/80 hover:underline group">
                        {project?.githubUrl}
                        <ExternalLink className="ml-1 size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"/>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Controls */}
            <div className="flex items-center gap-4">
              <div className="p-0.5 rounded-xl bg-gradient-to-r from-white/40 to-white/20 backdrop-blur-sm">
                <div className="bg-white/90 rounded-xl">
                  <TeamMembers />
                </div>
              </div>
              
              <div className="p-0.5 rounded-xl bg-gradient-to-r from-white/40 to-white/20 backdrop-blur-sm transition-all duration-200 hover:scale-105">
                <div className="bg-white/90 rounded-xl">
                  <InviteButton />
                </div>
              </div>
              
              <div className="p-0.5 rounded-xl bg-gradient-to-r from-white/40 to-white/20 backdrop-blur-sm transition-all duration-200 hover:scale-105">
                <div className="bg-white/90 rounded-xl">
                  <ArchiveButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Cards Section */}
      <div className="mt-4">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-5">
          {/* Card wrappers with glow effect */}
          <div className="sm:col-span-3 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-300 via-purple-400 to-blue-500 rounded-3xl blur opacity-50 group-hover:opacity-75 transition duration-200"></div>
            <div className="p-0.5 rounded-3xl bg-gradient-to-r from-white/40 to-white/20 relative">
              <div className="bg-white/90 backdrop-blur-lg p-6 rounded-3xl shadow-xl hover:translate-y-1 transition-all duration-200">
                <AskQuestionCard />
              </div>
            </div>
          </div>
          
          <div className="sm:col-span-2 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-300 via-purple-400 to-blue-500 rounded-3xl blur opacity-50 group-hover:opacity-75 transition duration-200"></div>
            <div className="p-0.5 rounded-3xl bg-gradient-to-r from-white/40 to-white/20 relative">
              <div className="bg-white/90 backdrop-blur-lg p-6 rounded-3xl shadow-xl hover:translate-y-1 transition-all duration-200">
                <MeetingCard />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Commit Log Section */}
      <div className="mt-8 relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-300 via-purple-400 to-blue-500 rounded-3xl blur opacity-50 group-hover:opacity-75 transition duration-200"></div>
        <div className="p-0.5 rounded-3xl bg-gradient-to-r from-white/40 to-white/20 relative">
          <div className="bg-white/90 backdrop-blur-lg p-6 rounded-3xl shadow-xl">
            <CommitLog />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;