
// "use client"; // Ensures this runs only on the client in Next.js

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Plus, Minus } from "lucide-react";

// const sections = [
//   { title: "CREATIVE", details: ["Art direction", "Creative direction"] },
//   { title: "DESIGN", details: ["UI/UX Design", "Graphic Design"] },
//   { title: "ANIMATION", details: ["2D Animation", "3D Animation"] },
//   { title: "TECHNOLOGY", details: ["Web Development", "App Development"] },
//   { title: "PROJECT DELIVERY", details: ["Planning", "Execution"] },
//   { title: "EXAMPLE PRODUCTS", details: ["Prototypes", "Final Products"] },
// ];

// export default function ExpandingMenu() {
//   const [expandedIndex, setExpandedIndex] = useState(null);
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   const handleExpandToggle = (index) => {
//     setExpandedIndex(expandedIndex === index ? null : index);
//   };

//   return (
//     <div className="w-full max-w-4xl mx-auto bg-[#F8F9FA] text-[#212529] rounded-xl shadow-lg p-4">
//       {sections.map((section, index) => (
//         <div key={index} className="border-b border-[#D1D5DB] bg-white rounded-lg shadow-sm my-2">
//           {/* Section Header */}
//           <div
//             className="flex justify-between items-center py-5 px-6 cursor-pointer hover:bg-[#E9ECEF] transition duration-300 rounded-lg"
//             onClick={() => handleExpandToggle(index)}
//           >
//             <span className="text-lg font-semibold">{section.title}</span>
//             <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#6C757D] hover:bg-[#495057] transition duration-300">
//               {expandedIndex === index ? <Minus size={18} color="white" /> : <Plus size={18} color="white" />}
//             </button>
//           </div>

//           {/* Expanding Content */}
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{
//               height: expandedIndex === index ? "auto" : 0,
//               opacity: expandedIndex === index ? 1 : 0,
//             }}
//             transition={{ duration: 0.4, ease: "easeInOut" }}
//             className="overflow-hidden"
//           >
//             {section.details.map((detail, i) => (
//               <motion.div
//                 key={i}
//                 className="py-4 px-6 relative cursor-pointer overflow-hidden text-[#212529] text-lg transition duration-300"
//                 onMouseEnter={() => setHoveredIndex(i)}
//                 onMouseLeave={() => setHoveredIndex(null)}
//               >
//                 {/* Background Effect */}
//                 <motion.div
//                   className="absolute inset-0 bg-black z-0"
//                   initial={{ width: "0%" }}
//                   animate={{ width: hoveredIndex === i ? "100%" : "0%" }}
//                   transition={{ duration: 0.3, ease: "easeOut" }}
//                 />
//                 {/* Text Effect */}
//                 <span
//                   className={`relative z-10 block transition duration-300 ${
//                     hoveredIndex === i ? "text-white" : "text-[#212529]"
//                   }`}
//                 >
//                   {detail}
//                 </span>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       ))}
//     </div>
//   );
// }


// "use client"; // Ensures this runs only on the client in Next.js

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Plus, Minus } from "lucide-react";

// const sections = [
//   { title: "CREATIVE", details: ["Art direction", "Creative direction"] },
//   { title: "DESIGN", details: ["UI/UX Design", "Graphic Design"] },
//   { title: "ANIMATION", details: ["2D Animation", "3D Animation"] },
//   { title: "TECHNOLOGY", details: ["Web Development", "App Development"] },
//   { title: "PROJECT DELIVERY", details: ["Planning", "Execution"] },
//   { title: "EXAMPLE PRODUCTS", details: ["Prototypes", "Final Products"] },
// ];

// export default function ExpandingMenu() {
//   const [expandedIndex, setExpandedIndex] = useState(null);
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   const handleExpandToggle = (index) => {
//     setExpandedIndex(expandedIndex === index ? null : index);
//   };

//   return (
//     <div className="w-screen min-h-screen flex flex-col items-center justify-center bg-[#F8F9FA] text-[#212529]">
//       <div className="w-full max-w-5xl mx-auto rounded-lg shadow-xl p-4">
//         {sections.map((section, index) => (
//           <div key={index} className="border-b border-[#D1D5DB] bg-white rounded-lg shadow-sm my-2">
//             {/* Section Header */}
//             <div
//               className="flex justify-between items-center py-5 px-6 cursor-pointer hover:bg-[#E9ECEF] transition-all duration-300 rounded-lg"
//               onClick={() => handleExpandToggle(index)}
//             >
//               <span className="text-lg font-semibold">{section.title}</span>
//               <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#6C757D] hover:bg-[#495057] transition-all duration-300">
//                 {expandedIndex === index ? <Minus size={18} color="white" /> : <Plus size={18} color="white" />}
//               </button>
//             </div>

//             {/* Expanding Content */}
//             <motion.div
//               initial={{ height: 0, opacity: 0 }}
//               animate={{
//                 height: expandedIndex === index ? "auto" : 0,
//                 opacity: expandedIndex === index ? 1 : 0,
//               }}
//               transition={{ duration: 0.5, ease: "easeInOut" }}
//               className="overflow-hidden"
//             >
//               {section.details.map((detail, i) => (
//                 <motion.div
//                   key={i}
//                   className="py-4 px-6 relative cursor-pointer overflow-hidden text-[#212529] text-lg transition-all duration-500"
//                   onMouseEnter={() => setHoveredIndex(i)}
//                   onMouseLeave={() => setHoveredIndex(null)}
//                 >
//                   {/* Background Effect */}
//                   <motion.div
//                     className="absolute inset-0 bg-black z-0"
//                     initial={{ height: "0%" }}
//                     animate={{ height: hoveredIndex === i ? "100%" : "0%" }}
//                     transition={{ duration: 0.4, ease: "easeOut" }}
//                   />
//                   {/* Text Effect */}
//                   <span
//                     className={`relative z-10 block transition-all duration-500 ${
//                       hoveredIndex === i ? "text-white" : "text-[#212529]"
//                     }`}
//                   >
//                     {detail}
//                   </span>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



// "use client"; // Ensures this runs only on the client in Next.js

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Plus, Minus } from "lucide-react";

// const sections = [
//   { title: "CREATIVE", details: ["Art direction", "Creative direction"] },
//   { title: "DESIGN", details: ["UI/UX Design", "Graphic Design"] },
//   { title: "ANIMATION", details: ["2D Animation", "3D Animation"] },
//   { title: "TECHNOLOGY", details: ["Web Development", "App Development"] },
//   { title: "PROJECT DELIVERY", details: ["Planning", "Execution"] },
//   { title: "EXAMPLE PRODUCTS", details: ["Prototypes", "Final Products"] },
// ];

// export default function ExpandingMenu() {
//   const [expandedIndex, setExpandedIndex] = useState(null);
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   const handleExpandToggle = (index) => {
//     setExpandedIndex(expandedIndex === index ? null : index);
//   };

//   return (
//     <div className="w-screen min-h-screen flex flex-col items-center justify-center bg-[#F8F9FA] text-[#212529]">
//       <div className="w-full max-w-5xl mx-auto rounded-lg shadow-xl p-4">
//         {sections.map((section, index) => (
//           <div key={index} className="border-b border-[#D1D5DB] bg-white rounded-lg shadow-sm my-2">
//             {/* Section Header */}
//             <div
//               className="flex justify-between items-center py-5 px-6 cursor-pointer hover:bg-[#E9ECEF] transition-all duration-300 rounded-lg"
//               onClick={() => handleExpandToggle(index)}
//             >
//               <span className="text-lg font-semibold">{section.title}</span>
//               <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#6C757D] hover:bg-[#495057] transition-all duration-300">
//                 {expandedIndex === index ? <Minus size={18} color="white" /> : <Plus size={18} color="white" />}
//               </button>
//             </div>

//             {/* Expanding Content */}
//             <motion.div
//               initial={{ height: 0, opacity: 0 }}
//               animate={{
//                 height: expandedIndex === index ? "auto" : 0,
//                 opacity: expandedIndex === index ? 1 : 0,
//               }}
//               transition={{ duration: 0.5, ease: "easeInOut" }}
//               className="overflow-hidden"
//             >
//               {section.details.map((detail, i) => (
//                 <motion.div
//                   key={i}
//                   className="py-4 px-6 relative cursor-pointer overflow-hidden text-[#212529] text-lg transition-all duration-500"
//                   onMouseEnter={() => setHoveredIndex(i)}
//                   onMouseLeave={() => setHoveredIndex(null)}
//                 >
//                   {/* Background Effect (Now Expands from Top to Bottom) */}
//                   <motion.div
//                     className="absolute inset-0 bg-black z-0"
//                     initial={{ height: "0%" }}
//                     animate={{ height: hoveredIndex === i ? "100%" : "0%" }}
//                     transition={{ duration: 0.4, ease: "easeOut" }}
//                   />
//                   {/* Text Effect */}
//                   <span
//                     className={`relative z-10 block transition-all duration-500 ${
//                       hoveredIndex === i ? "text-white" : "text-[#212529]"
//                     }`}
//                   >
//                     {detail}
//                   </span>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }




"use client"; 
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ScrollRevealText() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Translate text from left to right and fade in
  const x = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="h-screen flex items-center justify-center bg-gray-100">
      <motion.h1
        style={{ x, opacity }}
        className="text-4xl font-bold text-gray-900"
      >
        Smooth Scroll Reveal
      </motion.h1>
    </div>
  );
}
