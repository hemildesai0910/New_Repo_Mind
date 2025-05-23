'use client'

import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { createCheckoutSession } from '@/lib/stripe'
import { api } from '@/trpc/react'
import { CreditCardIcon, Info } from 'lucide-react'
import React from 'react'

const BillingPage = () => {
  const {data:user} = api.project.getMyCredits.useQuery() 
  const [creditsToBuy,setCreditsToBuy] = React.useState<number[]>([100])
  const creditsToBuyAmount = creditsToBuy[0]!
  const price = (creditsToBuyAmount/50).toFixed(2)
   
  const { data: transactions, isLoading } = api.project.getMyTransactions.useQuery()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300 via-purple-400 to-blue-500 p-6">
      <div className="max-w-3xl mx-auto">
        {/* Main container with glowing border effect */}
        <div className="p-0.5 rounded-2xl shadow-xl bg-gradient-to-br from-white/40 to-white/20">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8">
            {/* Header with gradient background */}
            <div className="bg-gradient-to-r from-blue-300 via-purple-400 to-blue-500 rounded-lg p-6 mb-8 shadow-md">
              <h1 className='text-2xl font-bold text-white drop-shadow-sm'>Billing</h1>
              <p className='text-white/90 mt-2'>
                Manage your credits and billing information
              </p>
            </div>
            
            {/* Credit status */}
            <div className="p-0.5 rounded-lg bg-gradient-to-r from-blue-300 via-purple-400 to-blue-500 shadow-md mb-6">
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg">
                <h2 className="text-xl font-semibold text-gray-800 mb-2 drop-shadow-sm">Current Balance</h2>
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-r from-blue-300 via-purple-400 to-blue-500 rounded-full p-3 shadow-md">
                    <CreditCardIcon className="size-6 text-white" />
                  </div>
                  <div>
                    <p className='text-3xl font-bold text-gray-800'>
                      {user?.credits || 0} <span className="text-lg font-normal text-gray-600">credits</span>
                    </p>
                    <p className='text-sm text-gray-500'>
                      Available for repository indexing
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Info box */}
            <div className="p-0.5 rounded-lg bg-gradient-to-r from-blue-300 via-purple-400 to-blue-500 shadow-md mb-8">
              <div className="bg-blue-50/90 backdrop-blur-sm px-6 py-4 rounded-lg text-blue-700">
                <div className="flex items-center gap-2 mb-1">
                  <Info className='size-4' />       
                  <p className='text-sm font-medium'>Each credit allows you to index 1 file in a repository.</p>
                </div>      
                <p className='text-sm ml-6'>E.g. If your project has 100 files, you will need 100 credits to index it.</p>
              </div>
            </div>
            
            {/* Credits purchase section */}
            <div className="p-6 bg-white/70 backdrop-blur-sm rounded-lg border-2 border-white/30 shadow-md mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 drop-shadow-sm">Purchase Credits</h2>
              
              <div className="mb-8">
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-500">10 credits</span>
                  <span className="text-sm text-gray-500">1000 credits</span>
                </div>
                <div className="p-0.5 rounded-full bg-gradient-to-r from-blue-300 via-purple-400 to-blue-500">
                  <div className="bg-white/90 rounded-full p-1">
                    <Slider 
                      defaultValue={[100]} 
                      max={1000} 
                      min={10} 
                      onValueChange={value => setCreditsToBuy(value)} 
                      value={creditsToBuy}
                      className="z-0"
                    />
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-3xl font-bold text-gray-800 drop-shadow-sm">{creditsToBuyAmount} credits</p>
                  <p className="text-lg text-gray-600">${price}</p>
                </div>
              </div>
              
              <div className="p-0.5 rounded-lg bg-gradient-to-r from-blue-300 via-purple-400 to-blue-500 shadow-lg transition-all duration-200 transform hover:scale-[1.02]">
                <Button 
                  className="w-full bg-gradient-to-r from-blue-300 via-purple-400 to-blue-500 hover:from-blue-400 hover:via-purple-500 hover:to-blue-600 text-white text-lg font-medium py-6 h-auto rounded-lg transition-all duration-200 border-none"
                  onClick={() => {
                    createCheckoutSession(creditsToBuyAmount)
                  }}
                >
                  Buy {creditsToBuyAmount} credits for ${price}
                </Button>
              </div>
            </div>
            
            {/* Transaction History Section */}
            <div className="p-0.5 rounded-lg bg-gradient-to-r from-blue-300 via-purple-400 to-blue-500 shadow-md">
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg">
                <h2 className="text-xl font-semibold text-gray-800 mb-4 drop-shadow-sm">Transaction History</h2>
                
                <div className="space-y-4">
                  {isLoading ? (
                    <div className="flex justify-center p-4">
                      <p className="text-sm text-gray-500">Loading transactions...</p>
                    </div>
                  ) : transactions?.length ? (
                    <ul className="space-y-3">
                      {transactions.map((txn) => (
                        <li 
                          key={txn.id} 
                          className="flex items-center gap-4 p-4 bg-white/80 border border-purple-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
                        >
                          {/* Icon */}
                          <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-blue-300 via-purple-400 to-blue-500 rounded-full shadow-md">
                            <CreditCardIcon size={24} className="text-white" />
                          </div>

                          {/* Transaction Details */}
                          <div className="flex flex-col">
                            <span className="text-md font-semibold text-gray-900">
                              Credits Added
                            </span>
                            <span className="text-sm text-gray-500">
                              {new Date(txn.createdAt).toLocaleDateString()} • {new Date(txn.createdAt).toLocaleTimeString()}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="flex justify-center items-center p-8 bg-white/60 rounded-lg border border-purple-100">
                      <p className="text-gray-500 italic">No transactions available yet.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BillingPage




// 'use client'

// import { Button } from '@/components/ui/button'
// import { Slider } from '@/components/ui/slider'
// import { createCheckoutSession } from '@/lib/stripe'
// import { api } from '@/trpc/react'
// import { Info, CreditCard } from 'lucide-react'
// import React from 'react'

// const BillingPage = () => {
//   const {data:user} = api.project.getMyCredits.useQuery()
  
//   const [creditsToBuy, setCreditsToBuy] = React.useState<number[]>([100])
//   const creditsToBuyAmount = creditsToBuy[0]!
//   const price = (creditsToBuyAmount/50).toFixed(2)
  
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-300 via-purple-400 to-blue-500 p-6">
//       <div className="max-w-3xl mx-auto">
//         {/* Main container with glowing border effect */}
//         <div className="p-0.5 rounded-2xl shadow-xl bg-gradient-to-br from-white/40 to-white/20">
//           <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8">
//             {/* Header with gradient background */}
//             <div className="bg-gradient-to-r from-blue-300 via-purple-400 to-blue-500 rounded-lg p-6 mb-8 shadow-md">
//               <h1 className='text-2xl font-bold text-white drop-shadow-sm'>Billing</h1>
//               <p className='text-white/90 mt-2'>
//                 Manage your credits and billing information
//               </p>
//             </div>
            
//             {/* Credit status */}
//             <div className="p-0.5 rounded-lg bg-gradient-to-r from-blue-300 via-purple-400 to-blue-500 shadow-md mb-6">
//               <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg">
//                 <h2 className="text-xl font-semibold text-gray-800 mb-2 drop-shadow-sm">Current Balance</h2>
//                 <div className="flex items-center gap-4">
//                   <div className="bg-gradient-to-r from-blue-300 via-purple-400 to-blue-500 rounded-full p-3 shadow-md">
//                     <CreditCard className="size-6 text-white" />
//                   </div>
//                   <div>
//                     <p className='text-3xl font-bold text-gray-800'>
//                       {user?.credits || 0} <span className="text-lg font-normal text-gray-600">credits</span>
//                     </p>
//                     <p className='text-sm text-gray-500'>
//                       Available for repository indexing
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             {/* Info box */}
//             <div className="p-0.5 rounded-lg bg-gradient-to-r from-blue-300 via-purple-400 to-blue-500 shadow-md mb-8">
//               <div className="bg-blue-50/90 backdrop-blur-sm px-6 py-4 rounded-lg text-blue-700">
//                 <div className="flex items-center gap-2 mb-1">
//                   <Info className='size-4' />       
//                   <p className='text-sm font-medium'>Each credit allows you to index 1 file in a repository.</p>
//                 </div>      
//                 <p className='text-sm ml-6'>E.g. If your project has 100 files, you will need 100 credits to index it.</p>
//               </div>
//             </div>
            
//             {/* Credits purchase section */}
//             <div className="p-6 bg-white/70 backdrop-blur-sm rounded-lg border-2 border-white/30 shadow-md">
//               <h2 className="text-xl font-semibold text-gray-800 mb-4 drop-shadow-sm">Purchase Credits</h2>
              
//               <div className="mb-8">
//                 <div className="flex justify-between mb-2">
//                   <span className="text-sm text-gray-500">10 credits</span>
//                   <span className="text-sm text-gray-500">1000 credits</span>
//                 </div>
//                 <div className="p-0.5 rounded-full bg-gradient-to-r from-blue-300 via-purple-400 to-blue-500">
//                   <div className="bg-white/90 rounded-full p-1">
//                     <Slider 
//                       defaultValue={[100]} 
//                       max={1000} 
//                       min={10} 
//                       onValueChange={value => setCreditsToBuy(value)} 
//                       value={creditsToBuy}
//                       className="z-0"
//                     />
//                   </div>
//                 </div>
//                 <div className="mt-4 text-center">
//                   <p className="text-3xl font-bold text-gray-800 drop-shadow-sm">{creditsToBuyAmount} credits</p>
//                   <p className="text-lg text-gray-600">${price}</p>
//                 </div>
//               </div>
              
//               <div className="p-0.5 rounded-lg bg-gradient-to-r from-blue-300 via-purple-400 to-blue-500 shadow-lg transition-all duration-200 transform hover:scale-[1.02]">
//                 <Button 
//                   className="w-full bg-gradient-to-r from-blue-300 via-purple-400 to-blue-500 hover:from-blue-400 hover:via-purple-500 hover:to-blue-600 text-white text-lg font-medium py-6 h-auto rounded-lg transition-all duration-200 border-none"
//                   onClick={() => {
//                     createCheckoutSession(creditsToBuyAmount)
//                   }}
//                 >
//                   Buy {creditsToBuyAmount} credits for ${price}
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default BillingPage


// 'use client'

// import { Button } from '@/components/ui/button'
// import { Slider } from '@/components/ui/slider'
// import { createCheckoutSession } from '@/lib/stripe'
// import { api } from '@/trpc/react'
// import { Info, CreditCard } from 'lucide-react'
// import React from 'react'

// const BillingPage = () => {
//   const {data:user} = api.project.getMyCredits.useQuery()
  
//   const [creditsToBuy, setCreditsToBuy] = React.useState<number[]>([100])
//   const creditsToBuyAmount = creditsToBuy[0]!
//   const price = (creditsToBuyAmount/50).toFixed(2)
  
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-300 via-purple-400 to-blue-500 p-6">
//       <div className="max-w-3xl mx-auto">
//         {/* Main container with glowing border effect */}
//         <div className="p-0.5 rounded-2xl shadow-xl bg-gradient-to-br from-white/40 to-white/20">
//           <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8">
//             {/* Header with gradient background */}
//             <div className="bg-gradient-to-r from-blue-300 via-purple-400 to-blue-500 rounded-lg p-6 mb-8 shadow-md">
//               <h1 className='text-2xl font-bold text-white drop-shadow-sm'>Billing</h1>
//               <p className='text-white/90 mt-2'>
//                 Manage your credits and billing information
//               </p>
//             </div>
            
//             {/* Credit status */}
//             <div className="p-0.5 rounded-lg bg-gradient-to-r from-blue-300 via-purple-400 to-blue-500 shadow-md mb-6">
//               <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg">
//                 <h2 className="text-xl font-semibold text-gray-800 mb-2 drop-shadow-sm">Current Balance</h2>
//                 <div className="flex items-center gap-4">
//                   <div className="bg-gradient-to-r from-blue-300 via-purple-400 to-blue-500 rounded-full p-3 shadow-md">
//                     <CreditCard className="size-6 text-white" />
//                   </div>
//                   <div>
//                     <p className='text-3xl font-bold text-gray-800'>
//                       {user?.credits || 0} <span className="text-lg font-normal text-gray-600">credits</span>
//                     </p>
//                     <p className='text-sm text-gray-500'>
//                       Available for repository indexing
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             {/* Info box */}
//             <div className="p-0.5 rounded-lg bg-gradient-to-r from-blue-300 via-purple-400 to-blue-500 shadow-md mb-8">
//               <div className="bg-blue-50/90 backdrop-blur-sm px-6 py-4 rounded-lg text-blue-700">
//                 <div className="flex items-center gap-2 mb-1">
//                   <Info className='size-4' />       
//                   <p className='text-sm font-medium'>Each credit allows you to index 1 file in a repository.</p>
//                 </div>      
//                 <p className='text-sm ml-6'>E.g. If your project has 100 files, you will need 100 credits to index it.</p>
//               </div>
//             </div>
            
//             {/* Credits purchase section */}
//             <div className="p-6 bg-white/70 backdrop-blur-sm rounded-lg border-2 border-white/30 shadow-md">
//               <h2 className="text-xl font-semibold text-gray-800 mb-4 drop-shadow-sm">Purchase Credits</h2>
              
//               <div className="mb-8">
//                 <div className="flex justify-between mb-2">
//                   <span className="text-sm text-gray-500">10 credits</span>
//                   <span className="text-sm text-gray-500">1000 credits</span>
//                 </div>
//                 <div className="p-0.5 rounded-full bg-gradient-to-r from-blue-300 via-purple-400 to-blue-500">
//                   <div className="bg-white/90 rounded-full p-1">
//                     <Slider 
//                       defaultValue={[100]} 
//                       max={1000} 
//                       min={10} 
//                       onValueChange={value => setCreditsToBuy(value)} 
//                       value={creditsToBuy}
//                       className="z-0"
//                     />
//                   </div>
//                 </div>
//                 <div className="mt-4 text-center">
//                   <p className="text-3xl font-bold text-gray-800 drop-shadow-sm">{creditsToBuyAmount} credits</p>
//                   <p className="text-lg text-gray-600">${price}</p>
//                 </div>
//               </div>
              
//               <div className="p-0.5 rounded-lg bg-gradient-to-r from-blue-300 via-purple-400 to-blue-500 shadow-lg transition-all duration-200 transform hover:scale-[1.02]">
//                 <Button 
//                   className="w-full bg-gradient-to-r from-blue-300 via-purple-400 to-blue-500 hover:from-blue-400 hover:via-purple-500 hover:to-blue-600 text-white text-lg font-medium py-6 h-auto rounded-lg transition-all duration-200 border-none"
//                   onClick={() => {
//                     createCheckoutSession(creditsToBuyAmount)
//                   }}
//                 >
//                   Buy {creditsToBuyAmount} credits for ${price}
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default BillingPage