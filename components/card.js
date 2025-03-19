// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import {
//   FaLightbulb,
//   FaRocket,
//   FaShieldAlt,
//   FaChartLine,
// } from "react-icons/fa";

// const ServicesSection = () => {
//   const features = [
//     {
//       icon: <FaLightbulb size={40} className="text-gray-500" />,
//       title: "Personalized Solutions",
//       description:
//         "We give our customers an unmatched personalized solutions as per their needs.",
//     },
//     {
//       icon: <FaRocket size={40} className="text-gray-500" />,
//       title: "Best Services @Low Cost",
//       description:
//         "We believe in customers delight rather than in number of customers.",
//     },
//     {
//       icon: <FaShieldAlt size={40} className="text-gray-500" />,
//       title: "Premium Customer Support",
//       description:
//         "We provide premium 24x7 support to our customers.",
//     },
//     {
//       icon: <FaChartLine size={40} className="text-gray-500" />,
//       title: "Innovation and Implementations ",
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
//         className="lg:w-1/3 text-left mb-60"
//       >
//         <span className="text-sm font-semibold tracking-wide text-gray-500 uppercase">
//           02 — How we give back
//         </span>
//         <h2 className="text-4xl md:text-5xl font-extrabold text-gray-700 mt-4">
//           Our Services
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

// export default ServicesSection



// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import {
//   FaLightbulb,
//   FaRocket,
//   FaShieldAlt,
//   FaChartLine,
// } from "react-icons/fa";

// const ServicesSection = () => {
//   const features = [
//     {
//       icon: <FaLightbulb size={50} className="text-yellow-500" />,
//       title: "Personalized Solutions",
//       description:
//         "We give our customers an unmatched personalized solution as per their needs.",
//     },
//     {
//       icon: <FaRocket size={50} className="text-blue-500" />,
//       title: "Best Services @Low Cost",
//       description:
//         "We believe in customers' delight rather than in the number of customers.",
//     },
//     {
//       icon: <FaShieldAlt size={50} className="text-green-500" />,
//       title: "Premium Customer Support",
//       description:
//         "We provide premium 24x7 support to our customers.",
//     },
//     {
//       icon: <FaChartLine size={50} className="text-red-500" />,
//       title: "Innovation & Implementation",
//       description:
//         "As a team of talented and young members, we believe in fresh ideas.",
//     },
//   ];

//   return (
//     <motion.section
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       viewport={{ once: true }}
//       transition={{ duration: 1 }}
//       className="relative py-20 px-6 lg:px-16 bg-gradient-to-br from-gray-50 to-gray-100"
//     >
//       {/* Header Section */}
//       <motion.div
//         initial={{ opacity: 0, y: -30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8 }}
//         className="text-center max-w-2xl mx-auto mb-12"
//       >
//         <span className="text-md font-semibold tracking-wide text-gray-500 uppercase">
        
//         </span>
//         <h2 className="text-4xl md:text-5xl font-extrabold text-gray-700 mt-2">
//           Our Main Features
//         </h2>
//         <div className="w-20 h-1 bg-red-500 mx-auto mt-4 rounded-full"></div>
//       </motion.div>

//       {/* Features Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//         {features.map((feature, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: index * 0.2 }}
//             className="bg-white/80 backdrop-blur-md border border-gray-200 shadow-lg rounded-xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-xl"
//           >
//             <div className="mb-4">{feature.icon}</div>
//             <h3 className="text-2xl font-semibold text-gray-900">{feature.title}</h3>
//             <p className="text-gray-600 mt-2">{feature.description}</p>
//           </motion.div>
//         ))}
//       </div>
//     </motion.section>
//   );
// };

// export default ServicesSection;




// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import {
//   FaLightbulb,
//   FaRocket,
//   FaShieldAlt,
//   FaChartLine,
// } from "react-icons/fa";

// const ServicesSection = () => {
//   const features = [
//     {
//       icon: <FaLightbulb size={50} className="text-yellow-400" />,
//       title: "Personalized Solutions",
//       description:
//         "We give our customers unmatched personalized solutions as per their needs.",
//     },
//     {
//       icon: <FaRocket size={50} className="text-blue-400" />,
//       title: "Best Services @Low Cost",
//       description:
//         "We believe in customer delight rather than in the number of customers.",
//     },
//     {
//       icon: <FaShieldAlt size={50} className="text-green-400" />,
//       title: "Premium Customer Support",
//       description:
//         "We provide premium 24x7 support to our customers.",
//     },
//     {
//       icon: <FaChartLine size={50} className="text-red-400" />,
//       title: "Innovation & Implementation",
//       description:
//         "As a team of talented and young members, we believe in fresh ideas.",
//     },
//   ];

//   return (
//     <section className="py-16 px-6 lg:px-16 bg-gray-900">
//       {/* Header Section */}
//       <div className="text-center max-w-2xl mx-auto mb-12">
//         <span className="text-md font-semibold tracking-wide text-gray-400 uppercase">
//           02 — How we give back
//         </span>
//         <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-2">
//           Our Services
//         </h2>
//         <div className="w-20 h-1 bg-red-500 mx-auto mt-4 rounded-full"></div>
//       </div>

//       {/* Features Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//         {features.map((feature, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: index * 0.2 }}
//             className="relative w-full max-w-[280px] mx-auto flex items-center justify-center"
//           >
//             {/* Animated Dot */}
//             <div className="absolute w-2 h-2 bg-white rounded-full shadow-md animate-pulse top-4 right-6"></div>

//             {/* Card */}
//             <div className="relative w-full h-[250px] p-4 rounded-lg border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg transform transition-transform hover:scale-105 flex flex-col items-center justify-center text-white">
//               {/* Ray Effect */}
//               <div className="absolute w-[220px] h-[45px] bg-gray-400 opacity-40 blur-lg shadow-2xl transform rotate-45 top-0 left-0"></div>

//               {/* Icon */}
//               <div className="mb-2">{feature.icon}</div>

//               {/* Title */}
//               <h3 className="text-xl font-bold">{feature.title}</h3>

//               {/* Description */}
//               <p className="text-gray-300 text-center text-sm mt-2">
//                 {feature.description}
//               </p>

//               {/* Subtle Border Lines */}
//               <div className="absolute top-6 left-6 w-[80%] h-[1px] bg-gray-500 opacity-50"></div>
//               <div className="absolute bottom-6 right-6 w-[80%] h-[1px] bg-gray-500 opacity-50"></div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// // export default ServicesSection;

// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import {
//   FaLightbulb,
//   FaRocket,
//   FaShieldAlt,
//   FaChartLine,
// } from "react-icons/fa";

// const ServicesSection = () => {
//   const features = [
//     {
//       icon: <FaLightbulb size={50} className="text-yellow-400" />,
//       title: "Personalized Solutions",
//       description:
//         "We give our customers unmatched personalized solutions as per their needs.",
//     },
//     {
//       icon: <FaRocket size={50} className="text-blue-400" />,
//       title: "Best Services @Low Cost",
//       description:
//         "We believe in customer delight rather than in the number of customers.",
//     },
//     {
//       icon: <FaShieldAlt size={50} className="text-green-400" />,
//       title: "Premium Customer Support",
//       description: "We provide premium 24x7 support to our customers.",
//     },
//     {
//       icon: <FaChartLine size={50} className="text-red-400" />,
//       title: "Innovation & Implementation",
//       description:
//         "As a team of talented and young members, we believe in fresh ideas.",
//     },
//   ];

//   return (
//     <section className="py-16 px-6 lg:px-16 bg-gray-900">
//       {/* Header Section */}
//       <div className="text-center max-w-2xl mx-auto mb-12">
//         <span className="text-md font-semibold tracking-wide text-gray-400 uppercase">
//           02 — How we give back
//         </span>
//         <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-2">
//           Our Main Features
//         </h2>
//         <div className="w-20 h-1 bg-red-500 mx-auto mt-4 rounded-full"></div>
//       </div>

//       {/* Features Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//         {features.map((feature, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: index * 0.2 }}
//             className="relative w-full max-w-[300px] mx-auto"
//           >
//             {/* Moving Dot Animation */}
//             <motion.div
//               className="absolute w-2 h-2 bg-white rounded-full shadow-md z-10"
//               animate={{
//                 top: ["10%", "10%", "90%", "90%", "10%"],
//                 right: ["10%", "90%", "90%", "10%", "10%"],
//               }}
//               transition={{
//                 duration: 6,
//                 repeat: Infinity,
//                 ease: "linear",
//               }}
//             ></motion.div>

//             {/* Card */}
//             <div className="relative w-full h-[270px] p-4 rounded-lg border border-gray-700 bg-gradient-radial from-gray-800 to-gray-900 flex flex-col items-center justify-center text-white">
//               {/* Ray Effect */}
//               <div className="absolute w-70 h-12 bg-gray-300 opacity-40 shadow-[0_0_50px_#fff] blur-md transform rotate-45 top-0 left-0"></div>

//               {/* Subtle Border Lines - Positioned Behind Content */}
//               <div className="absolute top-[15%] w-full h-[1px] bg-gradient-to-r from-gray-400 to-gray-800 z-0"></div>
//               <div className="absolute bottom-[15%] w-full h-[1px] bg-gray-600 z-0"></div>
//               <div className="absolute left-[10%] w-[1px] h-full bg-gradient-to-b from-gray-500 to-gray-800 z-0"></div>
//               <div className="absolute right-[10%] w-[1px] h-full bg-gray-600 z-0"></div>

//               {/* Icon, Title & Description - Moved Above Lines */}
//               <div className="relative z-10 flex flex-col items-center">
//                 {/* Icon */}
//                 <div className="mb-2">{feature.icon}</div>

//                 {/* Title */}
//                 <h3 className="text-xl font-bold">{feature.title}</h3>

//                 {/* Description */}
//                 <p className="text-gray-300 text-center text-sm mt-2">
//                   {feature.description}
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;



"use client";
import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import {
  FaLightbulb,
  FaRocket,
  FaShieldAlt,
  FaChartLine,
} from "react-icons/fa";

const ServicesSection = () => {
  const features = [
    {
      icon: <FaLightbulb size={50} className="text-yellow-400" />,
      title: "Personalized Solutions",
      description:
        "We give our customers unmatched personalized solutions as per their needs.",
    },
    {
      icon: <FaRocket size={50} className="text-blue-400" />,
      title: "Best Services @Low Cost",
      description:
        "We believe in customer delight rather than in the number of customers.",
    },
    {
      icon: <FaShieldAlt size={50} className="text-green-400" />,
      title: "Premium Customer Support",
      description: "We provide premium 24x7 support to our customers.",
    },
    {
      icon: <FaChartLine size={50} className="text-red-400" />,
      title: "Innovation & Implementation",
      description:
        "As a team of talented and young members, we believe in fresh ideas.",
    },
  ];

  return (
    <section className="py-16 px-6 lg:px-16 bg-gray-900">
      {/* Header Section */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-md font-semibold tracking-wide text-gray-400 uppercase">
          02 — How we give back
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-2">
          Our Main Features
        </h2>
        <div className="w-20 h-1 bg-red-500 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <HoverCard key={index} feature={feature} index={index} />
        ))}
      </div>
    </section>
  );
};

/* Hover Card Component */
const HoverCard = ({ feature, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const glowX = useTransform(x, (val) => `${val}px`);
  const glowY = useTransform(y, (val) => `${val}px`);

  const handleMouseMove = (e) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - left);
    y.set(e.clientY - top);
  };

  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative w-full max-w-[300px] mx-auto"
    >
      {/* Moving Dot Animation */}
      <motion.div
        className="absolute w-2 h-2 bg-white rounded-full shadow-md z-10"
        animate={{
          top: ["10%", "10%", "90%", "90%", "10%"],
          right: ["10%", "90%", "90%", "10%", "10%"],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }}
      ></motion.div>

      {/* Card with Mouse Hover Tracker */}
      <div
        className="relative w-full h-[250px] p-4 rounded-lg border border-gray-700 bg-gradient-radial from-gray-800 to-gray-900 flex flex-col items-center justify-center text-white"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
      >
        {/* Mouse Tracking Glow Effect */}
        {isHovered && (
          <motion.div
            className="absolute w-16 h-16 bg-blue-400 opacity-40 blur-lg rounded-full"
            style={{ top: glowY, left: glowX }}
          ></motion.div>
        )}

        {/* Ray Effect */}
        <div className="absolute w-56 h-12 bg-gray-300 opacity-40 shadow-[0_0_50px_#fff] blur-md transform rotate-45 top-0 left-0"></div>

        {/* Subtle Border Lines - Positioned Behind Content */}
        <div className="absolute top-[15%] w-full h-[1px] bg-gradient-to-r from-gray-400 to-gray-800 z-0"></div>
        <div className="absolute bottom-[15%] w-full h-[1px] bg-gray-600 z-0"></div>
        <div className="absolute left-[10%] w-[1px] h-full bg-gradient-to-b from-gray-500 to-gray-800 z-0"></div>
        <div className="absolute right-[10%] w-[1px] h-full bg-gray-600 z-0"></div>

        {/* Icon, Title & Description - Moved Above Lines */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Icon */}
          <div className="mb-2">{feature.icon}</div>

          {/* Title */}
          <h3 className="text-xl font-bold">{feature.title}</h3>

          {/* Description */}
          <p className="text-gray-300 text-center text-sm mt-2">
            {feature.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesSection;
