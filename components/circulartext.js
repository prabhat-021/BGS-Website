// // "use client";

// // import { motion, useAnimation } from "framer-motion";
// // import { useEffect, useState } from "react";

// // export default function CircularText() {
// //   const [scrollSpeed, setScrollSpeed] = useState(1);
// //   const controls = useAnimation();

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setScrollSpeed(1 + window.scrollY / 300);
// //     };

// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   useEffect(() => {
// //     controls.start({
// //       rotate: 360,
// //       transition: { duration: 10 / scrollSpeed, repeat: Infinity, ease: "linear" },
// //     });
// //   }, [scrollSpeed, controls]);

// //   const text = "BRIDGE GROUP SOLUTIONS -- "; // The text to be displayed in a circular pattern
// //   const radius = 100; // Adjust the circle size

// //   return (
// //     <div className="flex justify-center items-center h-screen">
// //       <motion.div animate={controls} className="relative w-[250px] h-[250px] flex items-center justify-center">
// //         {Array.from(text).map((letter, index) => {
// //           const angle = (360 / text.length) * index; // Evenly distribute letters around the circle
// //           const x = radius * Math.cos((angle * Math.PI) / 180);
// //           const y = radius * Math.sin((angle * Math.PI) / 180);
// //           return (
// //             <span
// //               key={index}
// //               className="absolute text-md uppercase font-bold text-black"
// //               style={{
// //                 transform: `translate(${x}px, ${y}px) rotate(${angle}deg)`, // Positions letters properly
// //                 transformOrigin: "center",
// //                 whiteSpace: "nowrap",
// //               }}
// //             >
// //               {letter}
// //             </span>
// //           );
// //         })}
// //       </motion.div>
// //     </div>
// //   );
// // }



"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function HomePage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, margin: "-100px 0px" });

  return (
    <div
      ref={ref}
      className="relative min-h-screen flex flex-col lg:flex-row items-center justify-between bg-[#fefaf8] px-10 lg:px-20 py-10"
    >
      {/* Left Side Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="lg:w-1/2 w-full text-center lg:text-left"
      >
        <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-black">
          At BRIDGE GROUP SOLUTIONS, we build digital assets and immersive experiences
          for purposeful brands.
        </h1>
        <p className="mt-4 text-md text-black">
          B.G.S was found in 2014 as one of India's original Project Outsourcing
          start-ups, with an aim to bridge gaps in process management and
          outsourcing. We started as project outsourcing firm and later on moved
          into different zones with a motto of providing high-quality, low-cost,
          and applicable interventions to handle gaps.
        </p>
        
      </motion.div>

      {/* Right Side - Circular Text */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="lg:w-1/2 w-full flex justify-center lg:justify-center mb-10 lg:mt-0"
      >
        <CircularText isInView={isInView} />
      </motion.div>
    </div>
  );
}




function CircularText() {
  const controls = useAnimation();
  const text = "BRIDGE GROUP SOLUTIONS | ";
  const [radius, setRadius] = useState(90); // Default for small screens

  // Update radius dynamically based on screen size
  useEffect(() => {
    const updateRadius = () => {
      if (window.innerWidth >= 1024) {
        setRadius(200); // Large screens
      } else if (window.innerWidth >= 768) {
        setRadius(130); // Medium screens
      } else {
        setRadius(100); // Small screens
      }
    };

    updateRadius(); // Set initial radius
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  useEffect(() => {
    controls.start({
      rotate: 360,
      transition: {
        duration: 8, // Constant speed
        repeat: Infinity,
        ease: "linear",
      },
    });
  }, [controls]);

  return (
    <div className="flex justify-center items-center w-full h-full">
      <motion.div
        animate={controls}
        className="relative flex items-center justify-center w-[180px] h-[180px] md:w-[220px] md:h-[220px] lg:w-[280px] lg:h-[280px]"
      >
        {Array.from(text).map((letter, index) => {
          const angle = (360 / text.length) * index;
          const x = radius * Math.cos((angle * Math.PI) / 180);
          const y = radius * Math.sin((angle * Math.PI) / 180);

          return (
            <span
              key={index}
              className="absolute text-[12px] md:text-[14px] lg:text-[16px] uppercase font-extrabold text-black"
              style={{
                transform: `translate(${x}px, ${y}px) rotate(${angle}deg)`,
                transformOrigin: "center",
                whiteSpace: "nowrap",
              }}
            >
              {letter}
            </span>
          );
        })}
      </motion.div>
    </div>
  );
}


