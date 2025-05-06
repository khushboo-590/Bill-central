// import React from 'react'
// import { useState } from 'react'
// import { items } from '../utils/helper'
// import accordianImg from '../assets/images/png/accodian-img.png' 


// const Accordian = () => {
//     const [open, setOpen] = useState(null);

//     const toggle = (i) => setOpen(open === i ? null : i);
//   return (
//       <section>
//           <div className="container max-w-[1140px] mx-auto px-4 py-8 ">
//               <div className="flex flex-col lg:flex-row p-6 gap-[73px]  ">
//                   <div className="flex-1 ">
//                               <h2 className="text-[48px] font-semibold  leading-[110%] max-w-[456px] text - transform: capitalize text-[#00171F] mb-[45px]">
//                                   Comprehensive Utility <span className="font-bold ">Comparisons</span></h2>
//                       {items.map((item, i) => (
//                           <div
//                               key={i}
//                               className="border border-gray-300 rounded mb-[30px] p-[20px] cursor-pointer bg-white hover:shadow-sm w-full lg:max-w-[578px]"
//                               onClick={() => toggle(i)}
//                           >
//                               <div className="flex items-center justify-between">
//                                   <div className="flex items-center gap-4">
//                                       <span>{item.icon}</span>
//                                       <h3 className="text-[24px] font-normal leading-[110%] text-[#00171F] opacity-90">
//                                           {item.title}
//                                       </h3>
//                                   </div>
//                                   <button
//                                       onClick={() => setOpen(i)}
//                                       className="text-[24px] font-bold focus:outline-none"
//                                   >
//                                       {open === i ? "–" : "+"}
//                                   </button>
//                               </div>
//                               {open === i && item.description && (
//                                   <p className="mt-2 text-base text-[#00171F] opacity-90 leading-[160%] font-normal ml-4">
//                                       {item.description}
//                                   </p>
//                               )}
//                           </div>
//                       ))}
//                   </div>
//                   <div className="flex-1">
//                       <img  src={accordianImg}
//                           alt="Discussion"
//                           className="w-full mt-[39px] "
//                       />
//                           </div>
//                           </div>
//           </div>
//     </section>
//   )
// }

// export default Accordian





