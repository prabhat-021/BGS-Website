

/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unescaped-entities */


// "use client";

// import { useEffect, useState, useRef } from "react";
// import { motion } from "framer-motion";

// const words = [
//   {
//     title: "Agile",
//     description:
//       "We live and breathe efficiency and are not limited by geography. Local to Amsterdam with hubs in London, Paris, Johannesburg, New York, and beyond, we curate the right team for each project and get moving swiftly.",
//   },
//   {
//     title: "Innovative",
//     description:
//       "We use carefully crafted digital processes and new technology to ensure our initiatives run smoothly, allowing our lean and international team to focus on what matters and maximize momentum and opportunity.",
//   },
//   {
//     title: "Cultured",
//     description:
//       "We are progressive and community-focused and don’t believe in maintaining the status quo or sticking to outdated ways. Our people reflect today’s realities and stay connected to culture.",
//   },
// ];

// export default function ScrollEffect() {
//   const sectionsRef = useRef([]);
//   const [visibleSections, setVisibleSections] = useState(new Set());

//   useEffect(() => {
//     const observerOptions = { threshold: 0.3 }; // Trigger animation when 30% of section is visible

//     const observerCallback = (entries) => {
//       setVisibleSections((prevVisibleSections) => {
//         const newVisibleSections = new Set(prevVisibleSections);
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             newVisibleSections.add(entry.target);
//           } else {
//             newVisibleSections.delete(entry.target);
//           }
//         });
//         return newVisibleSections;
//       });
//     };

//     const observer = new IntersectionObserver(
//       observerCallback,
//       observerOptions
//     );

//     sectionsRef.current.forEach((section) => {
//       if (section) observer.observe(section);
//     });

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div className="bg-white text-black min-h-screen w-full p-6 flex flex-col justify-center items-center space-y-32">
//       <motion.h2
//         className="text-5xl md:text-6xl font-bold text-gray-800 text-center mb-10"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         OUR BEST SERVICES
//       </motion.h2>

//       {words.map((item, index) => {
//         const isVisible = visibleSections.has(sectionsRef.current[index]);

//         return (
//           <motion.div
//             key={index}
//             ref={(el) => (sectionsRef.current[index] = el)}
//             className="flex w-full justify-between items-center border-b border-gray-300 py-16 overflow-hidden"
//           >
//             {/* Title Animation */}
//             <motion.h1 className="text-8xl md:text-9xl font-extrabold tracking-tight leading-none relative flex">
//               {item.title.split("").map((char, i) => (
//                 <motion.span
//                   key={i}
//                   initial={{ opacity: 0, y: 40 }}
//                   animate={
//                     isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
//                   }
//                   transition={{
//                     duration: 0.3,
//                     delay: isVisible ? i * 0.1 : 0, // Delay each letter
//                   }}
//                   className="inline-block"
//                 >
//                   {char}
//                 </motion.span>
//               ))}
//             </motion.h1>

//             {/* Description */}
//             <motion.p
//               className="w-1/3 text-lg text-gray-700"
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
//               transition={{ delay: 0.5, duration: 0.8 }}
//             >
//               {item.description}
//             </motion.p>
//           </motion.div>
//         );
//       })}
//     </div>
//   );
// }




"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const words = [
  {
    title: "Risk _Management",
    description:
      "Risk management is the identification, evaluation, and prioritization of risks followed by coordinated and economical application of resources to minimize, monitor, and control the probability or impact of unfortunate events or to maximize the realization of opportunities.",
  },
  {
    title: "Portfolio _Management",
    description:
      "Portfolio management is the art and science of making decisions about investment mix and policy, matching investments to objectives, asset allocation for individuals and institutions, and balancing risk against performance.",
  },
  {
    title: "Wealth _Management",
    description:
      "Wealth management is an investment-advisory discipline which incorporates financial planning, investment portfolio management and a number of aggregated financial services offered by a complex mix of asset managers, custodial banks, retail banks, financial planners and others.",
  },
  {
    title: "Project_Outsourcing",
    description:
"Outsourcing allows a company to subcontract a particular area within the organization. A company may outsource project management or any other task or department for one or more reasons."  },
  {
    title: "ERP & Customized _Software",
    description:
"Enterprise resource planning (ERP) is business process management software that allows an organization to use a system of integrated applications to manage the business and automate many back office functions related to technology, services and human resources."  },
];

export default function ScrollEffect() {
  const sectionsRef = useRef([]);
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    const observerOptions = { threshold: 0.3 };

    const observerCallback = (entries) => {
      setVisibleSections((prevVisibleSections) => {
        const newVisibleSections = new Set(prevVisibleSections);
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            newVisibleSections.add(entry.target);
          } else {
            newVisibleSections.delete(entry.target);
          }
        });
        return newVisibleSections;
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white text-black min-h-screen w-full p-6 flex flex-col justify-center items-center space-y-16 md:space-y-32">
      <motion.h2
        className="text-4xl md:text-6xl font-bold text-gray-800 text-center mb-6 md:mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        OUR BEST SERVICES
      </motion.h2>

      {words.map((item, index) => {
        const isVisible = visibleSections.has(sectionsRef.current[index]);

        return (
          <motion.div
            key={index}
            ref={(el) => (sectionsRef.current[index] = el)}
            className="flex flex-col md:flex-row w-full justify-between items-center border-b border-gray-300 py-10 md:py-16 overflow-hidden text-center md:text-left"
          >
            {/* Title Animation */}
            <motion.h1 className="text-xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-none flex">
              {item.title.split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                  transition={{
                    duration: 0.3,
                    delay: isVisible ? i * 0.1 : 0,
                  }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>

            {/* Description */}
            <motion.p
              className="w-full md:w-1/3 text-base sm:text-lg text-gray-700 mt-4 md:mt-0 px-4 md:px-0"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {item.description}
            </motion.p>
          </motion.div>
        );
      })}
    </div>
  );
}
