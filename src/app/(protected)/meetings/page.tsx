// "use client"
// import useProject from '@/hooks/use-project'
// import { api } from '@/trpc/react'
// import React from 'react'
// import MeetingCard from '../dashboard/meeting-card'
// import Link from 'next/link'
// import { Badge } from '@/components/ui/badge'
// import { Button } from '@/components/ui/button'
// import { toast } from 'sonner'
// import useRefetch from '@/hooks/use-refetch'

// const MeetingsPage = () => {
//     const { projectId } =  useProject()
//     const {data:meetings, isLoading}= api.project.getMeetings.useQuery({projectId},{
//         refetchInterval:4000
//     })
//     const deleteMeeting = api.project.deleteMeeting.useMutation()
//     const refetch = useRefetch()

//   return (
//     <>
//     <MeetingCard />
//     <div className="h-6"></div>
//     <h1 className="text-xl font-semibold">Meetings</h1>
// {meetings && meetings.length === 0 && <div>No meetings found</div>}
// {isLoading && <div>Loading...</div>}
// <ul className="divide-y divide-gray-200">
//   {meetings?.map((meeting) => (
//     <li key={meeting.id} className="flex items-center justify-between py-5 gap-x-6">
//       <div>
//         <div className="min-w-0">
//           <div className="flex items-center gap-2">
//             <Link href={`/meetings/${meeting.id}`} 
//             className='text-sm font-semibold'>
//                 {meeting.name}
//               </Link>
//                 {meeting.status==='PROCESSING' && (
//                     <Badge className='bg-yellow-500 text-white'>
//                         Processing...
//                     </Badge>
//                 )}
            
//           </div>
//         </div>

//         <div className='flex items-center text-xs text-gray-500 gap-x-2'>
//             <p className='whitespace-nowrap'>
//             {meeting.createdAt.toLocaleDateString()}
//             </p>
//                 <p className='truncate'>{meeting.issues.length} issues</p>
//         </div>

//       </div>
//       <div className='flex items-center flex-none gap-x-4'>
//         <Link href={`/meetings/${meeting.id}`}>
//             <Button size='sm' variant='outline'>
//                 View Meeting
//             </Button>
//         </Link>
//         <Button disabled={deleteMeeting.isPending} size='sm' variant='destructive' onClick={()=>deleteMeeting.mutate({meetingId: meeting.id}, {
//           onSuccess: () => {
//             toast.success('Meeting deleted successfully')
//             refetch()
//           }
//         })}>
//             Delete Meeting
//         </Button>
//         </div>

//     </li>
//   ))}
// </ul>
//     </>
//   )
// }

// export default MeetingsPage

"use client"

import useProject from '@/hooks/use-project'
import { api } from '@/trpc/react'
import React from 'react'
import MeetingCard from '../dashboard/meeting-card'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import useRefetch from '@/hooks/use-refetch'

const MeetingsPage = () => {
  const { projectId } = useProject()
  const { data: meetings, isLoading } = api.project.getMeetings.useQuery({ projectId }, {
    refetchInterval: 4000
  })
  const deleteMeeting = api.project.deleteMeeting.useMutation()
  const refetch = useRefetch()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300 via-purple-400 to-blue-500 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Meeting Card Container with enhanced styling */}
        <div className="relative p-0.5 rounded-3xl overflow-hidden bg-gradient-to-r from-white/40 to-white/20 shadow-xl">
          <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-4 md:p-6 transition-all duration-200 hover:scale-105">
            <MeetingCard />
          </div>
        </div>

        {/* Meetings List Container */}
        <div className="relative p-0.5 rounded-3xl overflow-hidden bg-gradient-to-r from-white/40 to-white/20 shadow-xl">
          <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-4 md:p-6">
            <h1 className="text-xl font-semibold text-gray-800 mb-4">Meetings</h1>
            
            {meetings && meetings.length === 0 && (
              <div className="py-6 text-center text-gray-500 bg-white/20 backdrop-blur-sm rounded-xl">
                No meetings found
              </div>
            )}
            
            {isLoading && (
              <div className="py-6 text-center text-gray-500 bg-white/20 backdrop-blur-sm rounded-xl">
                Loading...
              </div>
            )}
            
            <ul className="divide-y divide-gray-200/50">
              {meetings?.map((meeting) => (
                <li key={meeting.id} className="flex items-center justify-between py-5 gap-x-6 group hover:bg-white/20 hover:backdrop-blur-sm rounded-xl px-3 transition-all duration-200">
                  <div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <Link 
                          href={`/meetings/${meeting.id}`}
                          className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-200"
                        >
                          {meeting.name}
                        </Link>
                        {meeting.status === 'PROCESSING' && (
                          <Badge className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white border-0 shadow-sm">
                            Processing...
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center text-xs text-gray-500 gap-x-2 mt-1">
                      <p className="whitespace-nowrap">
                        {meeting.createdAt.toLocaleDateString()}
                      </p>
                      <p className="truncate">{meeting.issues.length} issues</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center flex-none gap-x-4">
                    <Link href={`/meetings/${meeting.id}`}>
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="border-blue-300 hover:bg-blue-500 hover:text-white transition-all duration-200"
                      >
                        View Meeting
                      </Button>
                    </Link>
                    
                    <Button 
                      disabled={deleteMeeting.isPending} 
                      size="sm" 
                      variant="destructive"
                      className="bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-600 border-0 transition-all duration-200"
                      onClick={() => deleteMeeting.mutate({ meetingId: meeting.id }, {
                        onSuccess: () => {
                          toast.success('Meeting deleted successfully')
                          refetch()
                        }
                      })}
                    >
                      Delete Meeting
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MeetingsPage