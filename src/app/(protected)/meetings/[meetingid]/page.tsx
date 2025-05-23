// import React from 'react'
// import IssuesList from './issues-list'

// type Props ={
//     params: Promise<{meetingid: string}>
// }
// const MeetingDetailPage = async ({params}:Props) => {
//    const {meetingid} = await params
//   return (
//     <IssuesList meetingId={meetingid} />
//   )
// }

// export default MeetingDetailPage

import React from 'react'
import IssuesList from './issues-list'

type Props = {
  params: Promise<{meetingid: string}>
}

const MeetingDetailPage = async ({params}: Props) => {
  const {meetingid} = await params
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300 via-purple-400 to-blue-500 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header container with glass effect */}
        <div className="relative p-0.5 rounded-3xl mb-8 overflow-hidden bg-gradient-to-r from-white/40 to-white/20 shadow-xl">
          <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-6">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              Meeting Details
            </h1>
            <p className="text-gray-600 mt-2">
              Viewing issues for meeting ID: {meetingid}
            </p>
          </div>
        </div>
        
        {/* Main content container with glass effect */}
        <div className="relative p-0.5 rounded-3xl overflow-hidden bg-gradient-to-r from-white/40 to-white/20 shadow-xl">
          <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-4 md:p-6">
            <div className="transition-all duration-200 hover:scale-105 hover:translate-y-1">
              <IssuesList meetingId={meetingid} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MeetingDetailPage