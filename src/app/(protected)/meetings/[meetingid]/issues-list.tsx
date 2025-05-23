// "use client"
// import { Button } from '@/components/ui/button'
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
// import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
// import { api, RouterOutputs } from '@/trpc/react'
// import { VideoIcon } from 'lucide-react'
// import React, { useState } from 'react'

// type Props ={
//     meetingId: string
// }

// const IssuesList = ({meetingId}:Props) => {
// const {data:meeting,isLoading} = api.project.getMeetingById.useQuery(
//     { meetingId },
//     { refetchInterval: 4000 }
// )
//   if (isLoading || !meeting) return <div>Loading...</div>
//   return (
//     <>
//     <div className="p-8">
//         <div className='mx-auto flex max-w-2xl items-center justify-between gap-x-8 border-b pb-6 lg:mx-0 lg:max-w-none'>
//         <div className='flex items-center gap-x-6'>
//             <div className='rounded-full border bg-white p-3'>
//             <VideoIcon className='h-6 w-6' />
//             </div>
//              <h1>
//             <div className='text-sm leading-6 text-gray-600'>
//               Meeting on {""}{meeting?.createdAt.toLocaleDateString()}
//              </div>
//              <div className='mt-1 text-base font-semibold leading-6 text-gray-900'>
//               {meeting?.name}
//              </div>
//              </h1>
//             </div>
//         </div>
//         <div className="h-4"></div>
//         <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
//           {meeting.issues.map(issue=>(
//             <IssueCard key={issue.id} issue={issue}/>
//           ))}
//         </div>
//     </div>
//     </>
//   )
// }

// function IssueCard({issue}:{issue:NonNullable <RouterOutputs["project"]["getMeetingById"]>["issues"][number]}) {
//   const [open,setOpen] = React.useState(false)
//    return(
//     <>
//     <Dialog open={open} onOpenChange={setOpen}>
//       <DialogContent>
//         <DialogHeader>
//           <DialogTitle>{issue.gist}</DialogTitle>
//           <DialogDescription>{issue.createdAt.toLocaleDateString()}</DialogDescription>
//           <p className='text-gray-600'>{issue.headline}</p>
//           <blockquote className='mt-2 border-1-4 border-gray-300 bg-gray-50 p-4'>
//             <span className='text-sm text-gray-600'>
//               {issue.start} - {issue.end}
//             </span>
//             <p className='font-medium italic leading-relaxed text-gray-900'>
//               {issue.summary}
//             </p>
//           </blockquote>
//         </DialogHeader>
//       </DialogContent>
//     </Dialog>
//     <Card>
//        <CardHeader>
//           <CardTitle>
//             {issue.gist}
//           </CardTitle>
//           <div className="border-b"></div>
//           <CardDescription>
//             {issue.headline}
//           </CardDescription>
//           <CardContent>
//             <Button onClick={()=>setOpen(true)}>
//               Details
//             </Button>
//           </CardContent>
//        </CardHeader>
//     </Card>
//     </>
//    )
// }

// export default IssuesList

"use client"

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { api, RouterOutputs } from '@/trpc/react'
import { VideoIcon } from 'lucide-react'
import React, { useState } from 'react'

type Props = {
  meetingId: string
}

const IssuesList = ({ meetingId }: Props) => {
  const { data: meeting, isLoading } = api.project.getMeetingById.useQuery(
    { meetingId },
    { refetchInterval: 4000 }
  )

  if (isLoading || !meeting) return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300 via-purple-400 to-blue-500 p-8 flex items-center justify-center">
      <div className="relative p-0.5 rounded-3xl overflow-hidden bg-gradient-to-r from-white/40 to-white/20 shadow-xl">
        <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-8">
          <p className="text-gray-800 text-lg">Loading...</p>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300 via-purple-400 to-blue-500 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Meeting Header Container */}
        <div className="relative p-0.5 rounded-3xl overflow-hidden bg-gradient-to-r from-white/40 to-white/20 shadow-xl mb-8">
          <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-6">
            <div className="flex max-w-2xl items-center justify-between gap-x-8 pb-6 lg:mx-0 lg:max-w-none">
              <div className="flex items-center gap-x-6">
                <div className="relative p-0.5 rounded-full overflow-hidden bg-gradient-to-r from-blue-400 to-purple-500 shadow-lg">
                  <div className="rounded-full bg-white p-3">
                    <VideoIcon className="h-6 w-6 text-purple-500" />
                  </div>
                </div>
                
                <h1>
                  <div className="text-sm leading-6 text-gray-600">
                    Meeting on {meeting?.createdAt.toLocaleDateString()}
                  </div>
                  <div className="mt-1 text-base font-semibold leading-6 text-gray-900">
                    {meeting?.name}
                  </div>
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* Issues Grid Container */}
        <div className="relative p-0.5 rounded-3xl overflow-hidden bg-gradient-to-r from-white/40 to-white/20 shadow-xl">
          <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {meeting.issues.map(issue => (
                <IssueCard key={issue.id} issue={issue} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function IssueCard({ issue }: { issue: NonNullable<RouterOutputs["project"]["getMeetingById"]>["issues"][number] }) {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-lg border-0 p-0.5 rounded-3xl overflow-hidden shadow-xl">
          <div className="p-6">
            <DialogHeader>
              <DialogTitle className="text-xl text-gray-800">{issue.gist}</DialogTitle>
              <DialogDescription className="text-gray-500">{issue.createdAt.toLocaleDateString()}</DialogDescription>
              
              <p className="text-gray-600 mt-2">{issue.headline}</p>
              
              <blockquote className="mt-4 border-l-4 border-purple-300 bg-white/50 backdrop-blur-sm p-4 rounded-lg shadow-sm">
                <span className="text-sm text-gray-600 block mb-2">
                  {issue.start} - {issue.end}
                </span>
                <p className="font-medium italic leading-relaxed text-gray-900">
                  {issue.summary}
                </p>
              </blockquote>
            </DialogHeader>
          </div>
        </DialogContent>
      </Dialog>

      <div className="relative p-0.5 rounded-2xl overflow-hidden bg-gradient-to-r from-white/40 to-white/10 shadow-xl transition-all duration-200 hover:scale-105 hover:shadow-2xl">
        <Card className="border-0 bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden h-full">
          <CardHeader className="pb-2">
            <CardTitle className="text-gray-800">
              {issue.gist}
            </CardTitle>
            <div className="border-b border-gray-200/50 my-2"></div>
            <CardDescription className="text-gray-600 line-clamp-2">
              {issue.headline}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              onClick={() => setOpen(true)}
              className="w-full bg-gradient-to-r from-blue-400 to-purple-500 border-0 text-white hover:from-blue-500 hover:to-purple-600 transition-all duration-200"
            >
              Details
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default IssuesList