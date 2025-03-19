// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import {
//   FaLightbulb,
//   FaRocket,
//   FaShieldAlt,
//   FaChartLine,
// } from "react-icons/fa";

// const FeaturesSection = () => {
//   const features = [
//     {
//       icon: <FaLightbulb size={40} className="text-gray-500" />,
//       title: "Personalized Solutions",
//       description:
//         "We give our customers an unmatched personalized solutions as per their needs.",
//     },
//     {
//       icon: <FaRocket size={40} className="text-gray-500" />,
//       title: "Best Service @ Low Cost",
//       description:
//         "We believe in customers delight rather than in number of customers.",
//     },
//     {
//       icon: <FaShieldAlt size={40} className="text-gray-500" />,
//       title: "Premium Customer Support",
//       description: "We provide premium 24x7 support to our customers.",
//     },
//     {
//       icon: <FaChartLine size={40} className="text-gray-500" />,
//       title: "Innovation & Implementations",
//       description:
//         "As a team of talented and young members we believe in fresh ideas.",
//     },
//   ];

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.8 }}
//       className="py-20 px-6 mt-15 lg:px-20 flex flex-col lg:flex-row items-center justify-between"
//     >
//       {/* Left Side Content */}
//       <motion.div
//         initial={{ opacity: 0, x: -50 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8 }}
//         className="lg:w-1/3 text-left"
//       >
//         <span className="text-sm font-semibold tracking-wide text-gray-500 uppercase">
//           01 — What We Do
//         </span>
//         <h2 className="text-4xl md:text-5xl font-extrabold text-gray-700 mt-4">
//           Our Features
//         </h2>
//         <div className="w-16 h-1 bg-red-500 mt-4 rounded-full"></div>
//       </motion.div>

//       {/* Right Side Features Grid */}
//       <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-10 lg:mt-0">
//         {features.map((feature, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: index * 0.2 }}
//             className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center text-center transition-all duration-300 hover:bg-gray-100"
//           >
//             <div className="mb-4">{feature.icon}</div>
//             <h3 className="text-2xl font-semibold text-gray-900 mb-2">
//               {feature.title}
//             </h3>
//             <p className="text-gray-600">{feature.description}</p>
//           </motion.div>
//         ))}
//       </div>
//     </motion.div>
//   );
// };

// export default FeaturesSection;


"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const timelineData = [
  { year: "2012", text: "We started our journey with an idea, courage, and loads of blessings and hopes." },
  { year: "2013", text: "BGS started getting recognized by people in the field of customized software." },
  { year: "2014", text: "We started RPO and Skill Development Programs. We got associated with Skill India." },
  { year: "2016", text: "Entered the most unorganized and diversified financial sector." }
];

const TimelineItem = ({ year, text, index }) => {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        } else {
          controls.start("hidden");
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative flex flex-col md:flex-row items-start md:items-center mb-12 w-full"
    >
      {/* Year Box */}
      <div className="w-full md:w-1/4 flex justify-start">
        <div className="px-6 py-3 bg-gray-900 rounded-lg text-center shadow-md">
          <h3 className="text-2xl font-extrabold text-white">{year}</h3>
        </div>
      </div>

      {/* Timeline Content */}
      <div className="w-full md:w-3/4 text-left px-6">
        <motion.div
          initial={{ width: "0%" }}
          whileInView={{ width: "100%" }} 
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          className="h-1 bg-red-500 mb-3"
        />
        <p className="text-gray-700 text-lg font-medium">{text}</p>
      </div>
    </motion.div>
  );
};

export default function HistoryTimeline() {
  return (
    <div className="min-h-screen flex flex-col items-start justify-start px-4 md:px-12 space-y-12 mt-0">
      {/* Header Section */}
      <div className="flex items-center pt-10 space-x-3 text-gray-900 uppercase text-xl md:text-2xl font-bold tracking-wide">
        <span>01</span>
        <div className="w-10 h-[2px] bg-red-500"></div>
        <span>HISTORY</span>
      </div>

      {/* Timeline Content */}
      <div className="relative w-full max-w-3xl border-l-4 border-red-500 pl-4 md:pl-6 ml-2 md:ml-auto">
        {timelineData.map((item, index) => (
          <TimelineItem key={index} year={item.year} text={item.text} index={index} />
        ))}
      </div>
    </div>
  );
}
