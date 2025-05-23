// // import React from 'react'
// // import { Card,CardHeader,CardTitle,CardContent,CardDescription } from '@/components/ui/card'
// // import { Button } from '@/components/ui/button';
// // const carddetail = ({prop}) => {
// //   console.log(data);
// //   console.log(name);
// //   return (
// //     <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
// //         <Card>
// //        <CardHeader>
// //           <CardTitle>
// //             {name}
// //           </CardTitle>
// //           <div className="border-b"></div>
// //           <CardDescription>
// //             {data.map((item)=>(<p className='mx-2 flex flex-wrap'>{item}</p>))}
// //           </CardDescription>
// //           <CardContent>
// //             <Button onClick={()=>setOpen(true)}>
// //               Details
// //             </Button>
// //           </CardContent>
// //        </CardHeader>
// //     </Card>
// //     </div>
// //   )
// // }

// // export default carddetail

// import React from 'react'
// import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card'
// import { Button } from '@/components/ui/button'

// // Renamed component to follow PascalCase convention
// const CardDetail = ({ prop }) => {
//   // Assuming 'data' and 'name' should come from prop
//   const { data, name } = prop;
  
//   // Assuming setOpen is a state setter from parent or defined elsewhere
//   const setOpen = () => {
//     // Implementation depends on how you want to handle this
//     console.log('Opening details...');
//   };

//   return (
//     <div className="bg-gradient-to-br from-blue-300 via-purple-400 to-blue-500 p-4">
//       <div className="relative p-0.5 rounded-3xl overflow-hidden bg-gradient-to-r from-white/40 to-white/20 shadow-xl transition-all duration-200 hover:scale-105">
//         <Card className="border-0 bg-white/90 backdrop-blur-sm rounded-3xl">
//           <CardHeader>
//             <CardTitle className="text-gray-800">
//               {name}
//             </CardTitle>
//             <div className="border-b border-gray-200/50 my-2"></div>
//             <CardDescription>
//               {data && data.map((item, index) => (
//                 <p key={index} className="m-2 flex flex-wrap text-gray-600">
//                   {item}
//                 </p>
//               ))}
//             </CardDescription>
//             <CardContent className="pt-2">
//               <Button 
//                 onClick={() => setOpen(true)}
//                 className="w-full bg-gradient-to-r from-blue-400 to-purple-500 border-0 text-white hover:from-blue-500 hover:to-purple-600 transition-all duration-200"
//               >
//                 Details
//               </Button>
//             </CardContent>
//           </CardHeader>
//         </Card>
//       </div>
//     </div>
//   )
// }

// export default CardDetail

import React from 'react'
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

// Renamed component to follow PascalCase convention
const CardDetail = ({ prop }) => {
  // Destructuring data and name from prop
  const { data, name } = prop;
  
  // Assuming setOpen is a state setter from parent or defined elsewhere
  const setOpen = () => {
    // Implementation depends on how you want to handle this
    console.log('Opening details...');
  };

  return (
    <div className="bg-gradient-to-br from-blue-300 via-purple-400 to-blue-500 p-4">
      <div className="relative p-0.5 rounded-3xl overflow-hidden bg-gradient-to-r from-white/40 to-white/20 shadow-xl transition-all duration-200 hover:scale-105">
        <Card className="border-0 bg-white/90 backdrop-blur-sm rounded-3xl">
          <CardHeader>
            <CardTitle className="text-gray-800">
              {name}
            </CardTitle>
            <div className="border-b border-gray-200/50 my-2"></div>
            <CardDescription>
              <div className="flex flex-wrap gap-2">
                {data && data.map((item, index) => (
                  <p key={index} className="text-gray-600">
                    {item}
                  </p>
                ))}
              </div>
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <Button 
              onClick={() => setOpen(true)}
              className="w-full bg-gradient-to-r from-blue-400 to-purple-500 border-0 text-white hover:from-blue-500 hover:to-purple-600 transition-all duration-200"
            >
              Details
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default CardDetail