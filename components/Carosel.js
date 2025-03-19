// "use client";
// import React, { useEffect, useRef } from "react";
// import { motion } from "framer-motion";

// const performers = [
//   { image: "/caro/image0.png" },
//   { image: "/caro/image1.png" },
//   { image: "/caro/image3.png" },
//   { image: "/caro/image4.png" },
//   { image: "/caro/image5.png" },
// ];

// const StarPerformerSlider = () => {
//   const sliderRef = useRef(null);

//   useEffect(() => {
//     const slider = sliderRef.current;
//     if (!slider) return;

//     let scrollSpeed = 1;
//     let requestID;

//     const scroll = () => {
//       if (slider.scrollLeft >= slider.scrollWidth / 2) {
//         slider.scrollLeft = 0;
//       } else {
//         slider.scrollLeft += scrollSpeed;
//       }
//       requestID = requestAnimationFrame(scroll);
//     };

//     requestID = requestAnimationFrame(scroll);
//     return () => cancelAnimationFrame(requestID);
//   }, []);

//   return (
//     <div className="text-center py-16 bg-gradient-to-r from-blue-50 to-indigo-100 relative overflow-hidden">
//       <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 uppercase tracking-wide mb-8">
//         Star Performer of the Week
//       </h2>
//       <div className="relative w-full flex justify-center overflow-hidden">
//         <div
//           className="flex gap-8 w-max items-center"
//           ref={sliderRef}
//           style={{ whiteSpace: "nowrap" }}
//         >
//           {[...performers, ...performers].map((performer, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ scale: 1.1 }}
//               className="relative flex-shrink-0 w-56 h-64 md:w-72 md:h-80 bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200"
//             >
//               <img
//                 src={performer.image}
//                 alt="Performer"
//                 className="w-full h-full object-cover"
//               />
//               <span className="absolute top-4 right-4 bg-yellow-500 text-white text-xs md:text-sm font-bold px-3 py-1 rounded-full shadow-md">
//                 ⭐ Star
//               </span>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StarPerformerSlider;






"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const performers = [
  { image: "/caro/image0.png" },
  { image: "/caro/image1.png" },
  { image: "/caro/image3.png" },
  { image: "/caro/image4.png" },
  { image: "/caro/image5.png" },
];

const StarPerformerSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let scrollSpeed = 1;
    let requestID;

    const scroll = () => {
      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0; // Reset when reaching the end
      } else {
        slider.scrollLeft += scrollSpeed;
      }
      requestID = requestAnimationFrame(scroll);
    };

    requestID = requestAnimationFrame(scroll);
    
    return () => cancelAnimationFrame(requestID);
  }, []);

  return (
    <div className="relative flex flex-col items-center bg-gradient-to-r from-blue-100 to-purple-100 py-16 overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 uppercase tracking-wide mb-8">
        Star Performer of the Week
      </h2>
      <div className="relative w-full overflow-hidden max-w-5xl">
        <motion.div
          className="flex space-x-6"
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          ref={sliderRef}
        >
          {[...performers, ...performers].map((performer, index) => (
            <div key={index} className="flex-none w-52 h-60 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform">
              <img src={performer.image} alt="Performer" className="w-full h-full object-cover" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default StarPerformerSlider;
