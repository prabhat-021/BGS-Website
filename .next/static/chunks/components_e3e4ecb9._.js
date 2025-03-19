(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/components_e3e4ecb9._.js", {

"[project]/components/card.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
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
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const ServicesSection = ()=>{
    const features = [
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaLightbulb"], {
                size: 50,
                className: "text-yellow-400"
            }, void 0, false, {
                fileName: "[project]/components/card.js",
                lineNumber: 398,
                columnNumber: 13
            }, this),
            title: "Personalized Solutions",
            description: "We give our customers unmatched personalized solutions as per their needs."
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaRocket"], {
                size: 50,
                className: "text-blue-400"
            }, void 0, false, {
                fileName: "[project]/components/card.js",
                lineNumber: 404,
                columnNumber: 13
            }, this),
            title: "Best Services @Low Cost",
            description: "We believe in customer delight rather than in the number of customers."
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaShieldAlt"], {
                size: 50,
                className: "text-green-400"
            }, void 0, false, {
                fileName: "[project]/components/card.js",
                lineNumber: 410,
                columnNumber: 13
            }, this),
            title: "Premium Customer Support",
            description: "We provide premium 24x7 support to our customers."
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaChartLine"], {
                size: 50,
                className: "text-red-400"
            }, void 0, false, {
                fileName: "[project]/components/card.js",
                lineNumber: 415,
                columnNumber: 13
            }, this),
            title: "Innovation & Implementation",
            description: "As a team of talented and young members, we believe in fresh ideas."
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-16 px-6 lg:px-16 bg-gray-900",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center max-w-2xl mx-auto mb-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-md font-semibold tracking-wide text-gray-400 uppercase",
                        children: "02 — How we give back"
                    }, void 0, false, {
                        fileName: "[project]/components/card.js",
                        lineNumber: 426,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-4xl md:text-5xl font-extrabold text-white mt-2",
                        children: "Our Main Features"
                    }, void 0, false, {
                        fileName: "[project]/components/card.js",
                        lineNumber: 429,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-20 h-1 bg-red-500 mx-auto mt-4 rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/components/card.js",
                        lineNumber: 432,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/card.js",
                lineNumber: 425,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8",
                children: features.map((feature, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HoverCard, {
                        feature: feature,
                        index: index
                    }, index, false, {
                        fileName: "[project]/components/card.js",
                        lineNumber: 438,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/card.js",
                lineNumber: 436,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/card.js",
        lineNumber: 423,
        columnNumber: 5
    }, this);
};
_c = ServicesSection;
/* Hover Card Component */ const HoverCard = ({ feature, index })=>{
    _s();
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const glowX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(x, {
        "HoverCard.useTransform[glowX]": (val)=>`${val}px`
    }["HoverCard.useTransform[glowX]"]);
    const glowY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(y, {
        "HoverCard.useTransform[glowY]": (val)=>`${val}px`
    }["HoverCard.useTransform[glowY]"]);
    const handleMouseMove = (e)=>{
        const { left, top } = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - left);
        y.set(e.clientY - top);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 50
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true
        },
        transition: {
            duration: 0.6,
            delay: index * 0.2
        },
        className: "relative w-full max-w-[300px] mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute w-2 h-2 bg-white rounded-full shadow-md z-10",
                animate: {
                    top: [
                        "10%",
                        "10%",
                        "90%",
                        "90%",
                        "10%"
                    ],
                    right: [
                        "10%",
                        "90%",
                        "90%",
                        "10%",
                        "10%"
                    ]
                },
                transition: {
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear"
                }
            }, void 0, false, {
                fileName: "[project]/components/card.js",
                lineNumber: 469,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full h-[250px] p-4 rounded-lg border border-gray-700 bg-gradient-radial from-gray-800 to-gray-900 flex flex-col items-center justify-center text-white",
                onMouseEnter: ()=>setIsHovered(true),
                onMouseLeave: ()=>setIsHovered(false),
                onMouseMove: handleMouseMove,
                children: [
                    isHovered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute w-16 h-16 bg-blue-400 opacity-40 blur-lg rounded-full",
                        style: {
                            top: glowY,
                            left: glowX
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/card.js",
                        lineNumber: 491,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute w-56 h-12 bg-gray-300 opacity-40 shadow-[0_0_50px_#fff] blur-md transform rotate-45 top-0 left-0"
                    }, void 0, false, {
                        fileName: "[project]/components/card.js",
                        lineNumber: 498,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-[15%] w-full h-[1px] bg-gradient-to-r from-gray-400 to-gray-800 z-0"
                    }, void 0, false, {
                        fileName: "[project]/components/card.js",
                        lineNumber: 501,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-[15%] w-full h-[1px] bg-gray-600 z-0"
                    }, void 0, false, {
                        fileName: "[project]/components/card.js",
                        lineNumber: 502,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-[10%] w-[1px] h-full bg-gradient-to-b from-gray-500 to-gray-800 z-0"
                    }, void 0, false, {
                        fileName: "[project]/components/card.js",
                        lineNumber: 503,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute right-[10%] w-[1px] h-full bg-gray-600 z-0"
                    }, void 0, false, {
                        fileName: "[project]/components/card.js",
                        lineNumber: 504,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 flex flex-col items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-2",
                                children: feature.icon
                            }, void 0, false, {
                                fileName: "[project]/components/card.js",
                                lineNumber: 509,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold",
                                children: feature.title
                            }, void 0, false, {
                                fileName: "[project]/components/card.js",
                                lineNumber: 512,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-300 text-center text-sm mt-2",
                                children: feature.description
                            }, void 0, false, {
                                fileName: "[project]/components/card.js",
                                lineNumber: 515,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/card.js",
                        lineNumber: 507,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/card.js",
                lineNumber: 483,
                columnNumber: 7
            }, this)
        ]
    }, index, true, {
        fileName: "[project]/components/card.js",
        lineNumber: 460,
        columnNumber: 5
    }, this);
};
_s(HoverCard, "FpppfaeXRo2mCD9sUR/cIawPXLo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c1 = HoverCard;
const __TURBOPACK__default__export__ = ServicesSection;
var _c, _c1;
__turbopack_context__.k.register(_c, "ServicesSection");
__turbopack_context__.k.register(_c1, "HoverCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/Carosel.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
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
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const performers = [
    {
        image: "/caro/image0.png"
    },
    {
        image: "/caro/image1.png"
    },
    {
        image: "/caro/image3.png"
    },
    {
        image: "/caro/image4.png"
    },
    {
        image: "/caro/image5.png"
    }
];
const StarPerformerSlider = ()=>{
    _s();
    const sliderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StarPerformerSlider.useEffect": ()=>{
            const slider = sliderRef.current;
            if (!slider) return;
            let scrollSpeed = 1;
            let requestID;
            const scroll = {
                "StarPerformerSlider.useEffect.scroll": ()=>{
                    if (slider.scrollLeft >= slider.scrollWidth / 2) {
                        slider.scrollLeft = 0; // Reset when reaching the end
                    } else {
                        slider.scrollLeft += scrollSpeed;
                    }
                    requestID = requestAnimationFrame(scroll);
                }
            }["StarPerformerSlider.useEffect.scroll"];
            requestID = requestAnimationFrame(scroll);
            return ({
                "StarPerformerSlider.useEffect": ()=>cancelAnimationFrame(requestID)
            })["StarPerformerSlider.useEffect"];
        }
    }["StarPerformerSlider.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex flex-col items-center bg-gradient-to-r from-blue-100 to-purple-100 py-16 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-3xl md:text-4xl font-bold text-blue-900 uppercase tracking-wide mb-8",
                children: "Star Performer of the Week"
            }, void 0, false, {
                fileName: "[project]/components/Carosel.js",
                lineNumber: 114,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full overflow-hidden max-w-5xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "flex space-x-6",
                    animate: {
                        x: [
                            0,
                            -1000
                        ]
                    },
                    transition: {
                        repeat: Infinity,
                        duration: 20,
                        ease: "linear"
                    },
                    ref: sliderRef,
                    children: [
                        ...performers,
                        ...performers
                    ].map((performer, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-none w-52 h-60 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: performer.image,
                                alt: "Performer",
                                className: "w-full h-full object-cover"
                            }, void 0, false, {
                                fileName: "[project]/components/Carosel.js",
                                lineNumber: 126,
                                columnNumber: 15
                            }, this)
                        }, index, false, {
                            fileName: "[project]/components/Carosel.js",
                            lineNumber: 125,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/Carosel.js",
                    lineNumber: 118,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Carosel.js",
                lineNumber: 117,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Carosel.js",
        lineNumber: 113,
        columnNumber: 5
    }, this);
};
_s(StarPerformerSlider, "ZJUOs54uyrVRVFn1eI1s3xtw2gw=");
_c = StarPerformerSlider;
const __TURBOPACK__default__export__ = StarPerformerSlider;
var _c;
__turbopack_context__.k.register(_c, "StarPerformerSlider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/circulartext.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
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
__turbopack_context__.s({
    "default": (()=>HomePage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
function HomePage() {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        triggerOnce: false,
        margin: "-100px 0px"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: "relative min-h-screen flex flex-col lg:flex-row items-center justify-between bg-[#fefaf8] px-10 lg:px-20 py-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 50
                },
                animate: isInView ? {
                    opacity: 1,
                    y: 0
                } : {
                    opacity: 0,
                    y: 50
                },
                transition: {
                    duration: 0.8,
                    ease: "easeOut"
                },
                className: "lg:w-1/2 w-full text-center lg:text-left",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl lg:text-5xl font-bold leading-tight text-black",
                        children: "At BRIDGE GROUP SOLUTIONS, we build digital assets and immersive experiences for purposeful brands."
                    }, void 0, false, {
                        fileName: "[project]/components/circulartext.js",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 text-md text-black",
                        children: "B.G.S was found in 2014 as one of India's original Project Outsourcing start-ups, with an aim to bridge gaps in process management and outsourcing. We started as project outsourcing firm and later on moved into different zones with a motto of providing high-quality, low-cost, and applicable interventions to handle gaps."
                    }, void 0, false, {
                        fileName: "[project]/components/circulartext.js",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/circulartext.js",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    scale: 0.8
                },
                animate: isInView ? {
                    opacity: 1,
                    scale: 1
                } : {
                    opacity: 0,
                    scale: 0.8
                },
                transition: {
                    duration: 0.8,
                    ease: "easeOut",
                    delay: 0.2
                },
                className: "lg:w-1/2 w-full flex justify-center lg:justify-center mb-10 lg:mt-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CircularText, {
                    isInView: isInView
                }, void 0, false, {
                    fileName: "[project]/components/circulartext.js",
                    lineNumber: 99,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/circulartext.js",
                lineNumber: 93,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/circulartext.js",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
_s(HomePage, "DljcBprJKYjULUac3YKdUV9OwZQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = HomePage;
function CircularText() {
    _s1();
    const controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"])();
    const text = "BRIDGE GROUP SOLUTIONS | ";
    const [radius, setRadius] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(90); // Default for small screens
    // Update radius dynamically based on screen size
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CircularText.useEffect": ()=>{
            const updateRadius = {
                "CircularText.useEffect.updateRadius": ()=>{
                    if (window.innerWidth >= 1024) {
                        setRadius(200); // Large screens
                    } else if (window.innerWidth >= 768) {
                        setRadius(130); // Medium screens
                    } else {
                        setRadius(100); // Small screens
                    }
                }
            }["CircularText.useEffect.updateRadius"];
            updateRadius(); // Set initial radius
            window.addEventListener("resize", updateRadius);
            return ({
                "CircularText.useEffect": ()=>window.removeEventListener("resize", updateRadius)
            })["CircularText.useEffect"];
        }
    }["CircularText.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CircularText.useEffect": ()=>{
            controls.start({
                rotate: 360,
                transition: {
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                }
            });
        }
    }["CircularText.useEffect"], [
        controls
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-center items-center w-full h-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            animate: controls,
            className: "relative flex items-center justify-center w-[180px] h-[180px] md:w-[220px] md:h-[220px] lg:w-[280px] lg:h-[280px]",
            children: Array.from(text).map((letter, index)=>{
                const angle = 360 / text.length * index;
                const x = radius * Math.cos(angle * Math.PI / 180);
                const y = radius * Math.sin(angle * Math.PI / 180);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "absolute text-[12px] md:text-[14px] lg:text-[16px] uppercase font-extrabold text-black",
                    style: {
                        transform: `translate(${x}px, ${y}px) rotate(${angle}deg)`,
                        transformOrigin: "center",
                        whiteSpace: "nowrap"
                    },
                    children: letter
                }, index, false, {
                    fileName: "[project]/components/circulartext.js",
                    lineNumber: 153,
                    columnNumber: 13
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/components/circulartext.js",
            lineNumber: 143,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/circulartext.js",
        lineNumber: 142,
        columnNumber: 5
    }, this);
}
_s1(CircularText, "MWV3KDcPsRzyO+Oos8bDG9n5mCo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"]
    ];
});
_c1 = CircularText;
var _c, _c1;
__turbopack_context__.k.register(_c, "HomePage");
__turbopack_context__.k.register(_c1, "CircularText");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/expanding.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// "use client";
// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Plus, Minus } from "lucide-react";
// const sections = [
//   { title: "CREATIVE", details: ["Art direction", "Creative direction"] },
//   { title: "DESIGN", details: ["Digital Design", "UX/UI Design", "Web Design", "Graphic Design", "3D Design", "Interactive Design"] },
//   { title: "ANIMATION", details: ["2D Animation", "3D Animation"] },
//   { title: "TECHNOLOGY", details: ["Web Development", "App Development"] },
//   { title: "PROJECT DELIVERY", details: ["Planning", "Execution"] },
//   { title: "EXAMPLE PRODUCTS", details: ["Prototypes", "Final Products"] },
// ];
// export default function Expanding() {
//   const [expandedIndex, setExpandedIndex] = useState(null);
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const handleExpandToggle = (index) => {
//     setExpandedIndex(expandedIndex === index ? null : index);
//   };
//   return (
//     <div className="h-screen w-full flex flex-col items-center justify-center bg-[#FDF9F8] text-black">
//       <div className="w-full flex flex-col">
//         {sections.map((section, index) => (
//           <div key={index} className="border-b border-black w-full">
//             {/* Section Header */}
//             <div
//               className="flex justify-between items-center py-6 px-6 md:px-12 cursor-pointer hover:bg-gray-200 transition-all duration-300 w-full"
//               onClick={() => handleExpandToggle(index)}
//             >
//               <span className="text-xl md:text-2xl font-bold">{section.title}</span>
//               <button className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white">
//                 {expandedIndex === index ? <Minus size={24} /> : <Plus size={24} />}
//               </button>
//             </div>
//             {/* Expanding Content */}
//             <motion.div
//               initial={{ height: 0, opacity: 0 }}
//               animate={{
//                 height: expandedIndex === index ? "auto" : 0,
//                 opacity: expandedIndex === index ? 1 : 0,
//               }}
//               transition={{ duration: 0.4, ease: "easeInOut" }}
//               className="overflow-hidden w-full"
//             >
//               {section.details.map((detail, i) => (
//                 <motion.div
//                   key={i}
//                   className="relative py-5 px-6 md:px-12 cursor-pointer text-lg md:text-xl overflow-hidden w-full"
//                   onMouseEnter={() => setHoveredIndex(`${index}-${i}`)}
//                   onMouseLeave={() => setHoveredIndex(null)}
//                 >
//                   {/* Background Hover Effect (Top to Bottom) */}
//                   <motion.div
//                     className="absolute inset-0 bg-black w-full"
//                     initial={{ height: "0%" }}
//                     animate={{ height: hoveredIndex === `${index}-${i}` ? "100%" : "0%" }}
//                     transition={{ duration: 0.3, ease: "easeOut" }}
//                   />
//                   {/* Text Effect */}
//                   <span
//                     className={`relative z-10 block transition-all duration-300 font-semibold ${
//                       hoveredIndex === `${index}-${i}` ? "text-white" : "text-black"
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
__turbopack_context__.s({
    "default": (()=>Expanding)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minus.js [app-client] (ecmascript) <export default as Minus>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const sections = [
    {
        title: "CREATIVE",
        details: [
            "Art direction",
            "Creative direction"
        ]
    },
    {
        title: "DESIGN",
        details: [
            "Digital Design",
            "UX/UI Design",
            "Web Design",
            "Graphic Design",
            "3D Design",
            "Interactive Design"
        ]
    },
    {
        title: "ANIMATION",
        details: [
            "2D Animation",
            "3D Animation"
        ]
    },
    {
        title: "TECHNOLOGY",
        details: [
            "Web Development",
            "App Development"
        ]
    },
    {
        title: "PROJECT DELIVERY",
        details: [
            "Planning",
            "Execution"
        ]
    },
    {
        title: "EXAMPLE PRODUCTS",
        details: [
            "Prototypes",
            "Final Products"
        ]
    }
];
function Expanding() {
    _s();
    const [expandedIndex, setExpandedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [hoveredIndex, setHoveredIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        triggerOnce: false,
        margin: "-100px 0px"
    });
    const handleExpandToggle = (index)=>{
        setExpandedIndex(expandedIndex === index ? null : index);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: "h-screen w-full flex flex-col items-center justify-center bg-[#FDF9F8] text-black",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                y: 50
            },
            animate: isInView ? {
                opacity: 1,
                y: 0
            } : {
                opacity: 0,
                y: 50
            },
            transition: {
                duration: 0.8,
                ease: "easeOut"
            },
            className: "w-full flex flex-col",
            children: sections.map((section, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "border-b border-black w-full",
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: isInView ? {
                        opacity: 1,
                        y: 0
                    } : {
                        opacity: 0,
                        y: 20
                    },
                    transition: {
                        delay: index * 0.1,
                        duration: 0.5
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center py-6 px-6 md:px-12 cursor-pointer hover:bg-gray-200 transition-all duration-300 w-full",
                            onClick: ()=>handleExpandToggle(index),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xl md:text-2xl font-bold",
                                    children: section.title
                                }, void 0, false, {
                                    fileName: "[project]/components/expanding.js",
                                    lineNumber: 136,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "w-10 h-10 flex items-center justify-center rounded-full bg-black text-white",
                                    children: expandedIndex === index ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                                        size: 24
                                    }, void 0, false, {
                                        fileName: "[project]/components/expanding.js",
                                        lineNumber: 138,
                                        columnNumber: 44
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        size: 24
                                    }, void 0, false, {
                                        fileName: "[project]/components/expanding.js",
                                        lineNumber: 138,
                                        columnNumber: 66
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/expanding.js",
                                    lineNumber: 137,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/expanding.js",
                            lineNumber: 132,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                height: 0,
                                opacity: 0
                            },
                            animate: {
                                height: expandedIndex === index ? "auto" : 0,
                                opacity: expandedIndex === index ? 1 : 0
                            },
                            transition: {
                                duration: 0.4,
                                ease: "easeInOut"
                            },
                            className: "overflow-hidden w-full",
                            children: section.details.map((detail, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "relative py-5 px-6 md:px-12 cursor-pointer text-lg md:text-xl overflow-hidden w-full",
                                    onMouseEnter: ()=>setHoveredIndex(`${index}-${i}`),
                                    onMouseLeave: ()=>setHoveredIndex(null),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            className: "absolute inset-0 bg-black w-full",
                                            initial: {
                                                height: "0%"
                                            },
                                            animate: {
                                                height: hoveredIndex === `${index}-${i}` ? "100%" : "0%"
                                            },
                                            transition: {
                                                duration: 0.3,
                                                ease: "easeOut"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/expanding.js",
                                            lineNumber: 160,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `relative z-10 block transition-all duration-300 font-semibold ${hoveredIndex === `${index}-${i}` ? "text-white" : "text-black"}`,
                                            children: detail
                                        }, void 0, false, {
                                            fileName: "[project]/components/expanding.js",
                                            lineNumber: 167,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/components/expanding.js",
                                    lineNumber: 153,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/expanding.js",
                            lineNumber: 143,
                            columnNumber: 13
                        }, this)
                    ]
                }, index, true, {
                    fileName: "[project]/components/expanding.js",
                    lineNumber: 124,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/components/expanding.js",
            lineNumber: 117,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/expanding.js",
        lineNumber: 116,
        columnNumber: 5
    }, this);
}
_s(Expanding, "R+qACuey2zBR58O6jvXCTjQ6pUY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = Expanding;
var _c;
__turbopack_context__.k.register(_c, "Expanding");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/expandingmenu.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
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
__turbopack_context__.s({
    "default": (()=>ScrollRevealText)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ScrollRevealText() {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])({
        target: ref,
        offset: [
            "start end",
            "end start"
        ]
    });
    // Translate text from left to right and fade in
    const x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        1
    ], [
        "-50%",
        "0%"
    ]);
    const opacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        1
    ], [
        0,
        1
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: "h-screen flex items-center justify-center bg-gray-100",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
            style: {
                x,
                opacity
            },
            className: "text-4xl font-bold text-gray-900",
            children: "Smooth Scroll Reveal"
        }, void 0, false, {
            fileName: "[project]/components/expandingmenu.js",
            lineNumber: 266,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/expandingmenu.js",
        lineNumber: 265,
        columnNumber: 5
    }, this);
}
_s(ScrollRevealText, "qldc3FxW2QVTdUx5WRmsMIGVF24=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c = ScrollRevealText;
var _c;
__turbopack_context__.k.register(_c, "ScrollRevealText");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/History.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
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
__turbopack_context__.s({
    "default": (()=>HistoryTimeline)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const timelineData = [
    {
        year: "2012",
        text: "We started our journey with an idea, courage, and loads of blessings and hopes."
    },
    {
        year: "2013",
        text: "BGS started getting recognized by people in the field of customized software."
    },
    {
        year: "2014",
        text: "We started RPO and Skill Development Programs. We got associated with Skill India."
    },
    {
        year: "2016",
        text: "Entered the most unorganized and diversified financial sector."
    }
];
const TimelineItem = ({ year, text, index })=>{
    _s();
    const controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"])();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TimelineItem.useEffect": ()=>{
            if (!ref.current) return;
            const observer = new IntersectionObserver({
                "TimelineItem.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        controls.start("visible");
                    } else {
                        controls.start("hidden");
                    }
                }
            }["TimelineItem.useEffect"], {
                threshold: 0.2
            });
            observer.observe(ref.current);
            return ({
                "TimelineItem.useEffect": ()=>observer.disconnect()
            })["TimelineItem.useEffect"];
        }
    }["TimelineItem.useEffect"], [
        controls
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: ref,
        initial: "hidden",
        animate: controls,
        variants: {
            hidden: {
                opacity: 0,
                y: 50
            },
            visible: {
                opacity: 1,
                y: 0
            }
        },
        transition: {
            duration: 0.8,
            ease: "easeOut"
        },
        className: "relative flex flex-col md:flex-row items-start md:items-center mb-12 w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full md:w-1/4 flex justify-start",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-6 py-3 bg-gray-900 rounded-lg text-center shadow-md",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-2xl font-extrabold text-white",
                        children: year
                    }, void 0, false, {
                        fileName: "[project]/components/History.js",
                        lineNumber: 137,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/History.js",
                    lineNumber: 136,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/History.js",
                lineNumber: 135,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full md:w-3/4 text-left px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            width: "0%"
                        },
                        whileInView: {
                            width: "100%"
                        },
                        viewport: {
                            once: false
                        },
                        transition: {
                            duration: 0.6,
                            delay: index * 0.2
                        },
                        className: "h-1 bg-red-500 mb-3"
                    }, void 0, false, {
                        fileName: "[project]/components/History.js",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-700 text-lg font-medium",
                        children: text
                    }, void 0, false, {
                        fileName: "[project]/components/History.js",
                        lineNumber: 150,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/History.js",
                lineNumber: 142,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/History.js",
        lineNumber: 123,
        columnNumber: 5
    }, this);
};
_s(TimelineItem, "stNu+Ao6JrRylefIfjwaIHcNIqI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"]
    ];
});
_c = TimelineItem;
function HistoryTimeline() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex flex-col items-start justify-start px-4 md:px-12 space-y-12 mt-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center pt-10 space-x-3 text-gray-900 uppercase text-xl md:text-2xl font-bold tracking-wide",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "01"
                    }, void 0, false, {
                        fileName: "[project]/components/History.js",
                        lineNumber: 161,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-10 h-[2px] bg-red-500"
                    }, void 0, false, {
                        fileName: "[project]/components/History.js",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "HISTORY"
                    }, void 0, false, {
                        fileName: "[project]/components/History.js",
                        lineNumber: 163,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/History.js",
                lineNumber: 160,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full max-w-3xl border-l-4 border-red-500 pl-4 md:pl-6 ml-2 md:ml-auto",
                children: timelineData.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TimelineItem, {
                        year: item.year,
                        text: item.text,
                        index: index
                    }, index, false, {
                        fileName: "[project]/components/History.js",
                        lineNumber: 169,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/History.js",
                lineNumber: 167,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/History.js",
        lineNumber: 158,
        columnNumber: 5
    }, this);
}
_c1 = HistoryTimeline;
var _c, _c1;
__turbopack_context__.k.register(_c, "TimelineItem");
__turbopack_context__.k.register(_c1, "HistoryTimeline");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/Overview.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Ourdata)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const timelineData = [
    {
        year: "Us",
        text: "Bridge Group Solutions hold our associates, customers, employees, as well as our community in the highest regard, where we incorporate both the needs of our company, as well as the needs of our ever-changing world into our culture. Our core values are the backbone to our company which resonate with our vision:"
    },
    {
        year: "People",
        text: "We must be caring, show respect, compassion and humanity for our colleagues, associates and customers around the world, and always work for the benefit of the communities we serve."
    },
    {
        year: "Integrity",
        text: "Conducting our operations with integrity and with the respect for the each people, business associate whom we touch in different juncture of our business journey."
    },
    {
        year: "Customer Delight",
        text: "We are committed to foster customer centric culture where our processes, services and innovations are aligned around customer/franchisee/business associate expectations."
    },
    {
        year: "Excellence",
        text: "We must constantly strive to achieve the highest possible standards in our execution and in the quality of the services we provide at affordable cost and need based solutions."
    },
    {
        year: "Trust",
        text: "We as team believe that the trust is the foundation of our relationship with our associates, franchisee, customer and employees and we cultivate it every day by being accountable of every single property transaction we offer."
    }
];
const TimelineItem = ({ year, text, index })=>{
    _s();
    const controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"])();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TimelineItem.useEffect": ()=>{
            if (!ref.current) return;
            const observer = new IntersectionObserver({
                "TimelineItem.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        controls.start("visible");
                    } else {
                        controls.start("hidden");
                    }
                }
            }["TimelineItem.useEffect"], {
                threshold: 0.2
            });
            observer.observe(ref.current);
            return ({
                "TimelineItem.useEffect": ()=>observer.disconnect()
            })["TimelineItem.useEffect"];
        }
    }["TimelineItem.useEffect"], [
        controls
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: ref,
        initial: "hidden",
        animate: controls,
        variants: {
            hidden: {
                opacity: 0,
                y: 50
            },
            visible: {
                opacity: 1,
                y: 0
            }
        },
        transition: {
            duration: 0.8,
            ease: "easeOut"
        },
        className: "relative flex flex-col md:flex-row items-start md:items-center mb-5 w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full md:w-3/4 flex justify-start",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-6 py-3 bg-gray-900 rounded-lg text-center shadow-md",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-2xl font-extrabold text-white",
                        children: year
                    }, void 0, false, {
                        fileName: "[project]/components/Overview.js",
                        lineNumber: 51,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Overview.js",
                    lineNumber: 50,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Overview.js",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full text-left px-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            width: "0%"
                        },
                        whileInView: {
                            width: "100%"
                        },
                        viewport: {
                            once: false
                        },
                        transition: {
                            duration: 0.6,
                            delay: index * 0.2
                        },
                        className: "h-1 bg-red-500 mb-3"
                    }, void 0, false, {
                        fileName: "[project]/components/Overview.js",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-700 text-lg font-medium",
                        children: text
                    }, void 0, false, {
                        fileName: "[project]/components/Overview.js",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Overview.js",
                lineNumber: 56,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Overview.js",
        lineNumber: 37,
        columnNumber: 5
    }, this);
};
_s(TimelineItem, "stNu+Ao6JrRylefIfjwaIHcNIqI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"]
    ];
});
_c = TimelineItem;
function Ourdata() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex flex-col items-start justify-start px-4 md:px-12 space-y-12 mt-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full flex justify-end pr-10 md:pr-20  pl-9",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center space-x-3 text-gray-900 uppercase text-xl md:text-2xl font-bold tracking-wide",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "02"
                        }, void 0, false, {
                            fileName: "[project]/components/Overview.js",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-10 h-[2px] bg-red-500"
                        }, void 0, false, {
                            fileName: "[project]/components/Overview.js",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "OUR CORE VALUES"
                        }, void 0, false, {
                            fileName: "[project]/components/Overview.js",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Overview.js",
                    lineNumber: 76,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Overview.js",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full max-w-5xl border-l-4 border-red-500 pl-4 md:pl-6 ml-2 md:ml-8",
                children: timelineData.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TimelineItem, {
                        year: item.year,
                        text: item.text,
                        index: index
                    }, index, false, {
                        fileName: "[project]/components/Overview.js",
                        lineNumber: 86,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/Overview.js",
                lineNumber: 84,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Overview.js",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
_c1 = Ourdata;
var _c, _c1;
__turbopack_context__.k.register(_c, "TimelineItem");
__turbopack_context__.k.register(_c1, "Ourdata");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ScrollEffect.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* eslint-disable react/no-unescaped-entities */ /* eslint-disable react/no-unescaped-entities */ // "use client";
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
__turbopack_context__.s({
    "default": (()=>ScrollEffect)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const words = [
    {
        title: "Risk _Management",
        description: "Risk management is the identification, evaluation, and prioritization of risks followed by coordinated and economical application of resources to minimize, monitor, and control the probability or impact of unfortunate events or to maximize the realization of opportunities."
    },
    {
        title: "Portfolio _Management",
        description: "Portfolio management is the art and science of making decisions about investment mix and policy, matching investments to objectives, asset allocation for individuals and institutions, and balancing risk against performance."
    },
    {
        title: "Wealth _Management",
        description: "Wealth management is an investment-advisory discipline which incorporates financial planning, investment portfolio management and a number of aggregated financial services offered by a complex mix of asset managers, custodial banks, retail banks, financial planners and others."
    },
    {
        title: "Project_Outsourcing",
        description: "Outsourcing allows a company to subcontract a particular area within the organization. A company may outsource project management or any other task or department for one or more reasons."
    },
    {
        title: "ERP & Customized _Software",
        description: "Enterprise resource planning (ERP) is business process management software that allows an organization to use a system of integrated applications to manage the business and automate many back office functions related to technology, services and human resources."
    }
];
function ScrollEffect() {
    _s();
    const sectionsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const [visibleSections, setVisibleSections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollEffect.useEffect": ()=>{
            const observerOptions = {
                threshold: 0.3
            };
            const observerCallback = {
                "ScrollEffect.useEffect.observerCallback": (entries)=>{
                    setVisibleSections({
                        "ScrollEffect.useEffect.observerCallback": (prevVisibleSections)=>{
                            const newVisibleSections = new Set(prevVisibleSections);
                            entries.forEach({
                                "ScrollEffect.useEffect.observerCallback": (entry)=>{
                                    if (entry.isIntersecting) {
                                        newVisibleSections.add(entry.target);
                                    } else {
                                        newVisibleSections.delete(entry.target);
                                    }
                                }
                            }["ScrollEffect.useEffect.observerCallback"]);
                            return newVisibleSections;
                        }
                    }["ScrollEffect.useEffect.observerCallback"]);
                }
            }["ScrollEffect.useEffect.observerCallback"];
            const observer = new IntersectionObserver(observerCallback, observerOptions);
            sectionsRef.current.forEach({
                "ScrollEffect.useEffect": (section)=>{
                    if (section) observer.observe(section);
                }
            }["ScrollEffect.useEffect"]);
            return ({
                "ScrollEffect.useEffect": ()=>observer.disconnect()
            })["ScrollEffect.useEffect"];
        }
    }["ScrollEffect.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white text-black min-h-screen w-full p-6 flex flex-col justify-center items-center space-y-16 md:space-y-32",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                className: "text-4xl md:text-6xl font-bold text-gray-800 text-center mb-6 md:mb-10",
                initial: {
                    opacity: 0,
                    y: -20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.8
                },
                children: "OUR BEST SERVICES"
            }, void 0, false, {
                fileName: "[project]/components/ScrollEffect.js",
                lineNumber: 185,
                columnNumber: 7
            }, this),
            words.map((item, index)=>{
                const isVisible = visibleSections.has(sectionsRef.current[index]);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    ref: (el)=>sectionsRef.current[index] = el,
                    className: "flex flex-col md:flex-row w-full justify-between items-center border-b border-gray-300 py-10 md:py-16 overflow-hidden text-center md:text-left",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                            className: "text-xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-none flex",
                            children: item.title.split("").map((char, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                    initial: {
                                        opacity: 0,
                                        y: 40
                                    },
                                    animate: isVisible ? {
                                        opacity: 1,
                                        y: 0
                                    } : {
                                        opacity: 0,
                                        y: 40
                                    },
                                    transition: {
                                        duration: 0.3,
                                        delay: isVisible ? i * 0.1 : 0
                                    },
                                    className: "inline-block",
                                    children: char
                                }, i, false, {
                                    fileName: "[project]/components/ScrollEffect.js",
                                    lineNumber: 206,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/ScrollEffect.js",
                            lineNumber: 204,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                            className: "w-full md:w-1/3 text-base sm:text-lg text-gray-700 mt-4 md:mt-0 px-4 md:px-0",
                            initial: {
                                opacity: 0,
                                y: 10
                            },
                            animate: {
                                opacity: isVisible ? 1 : 0,
                                y: isVisible ? 0 : 10
                            },
                            transition: {
                                delay: 0.5,
                                duration: 0.8
                            },
                            children: item.description
                        }, void 0, false, {
                            fileName: "[project]/components/ScrollEffect.js",
                            lineNumber: 222,
                            columnNumber: 13
                        }, this)
                    ]
                }, index, true, {
                    fileName: "[project]/components/ScrollEffect.js",
                    lineNumber: 198,
                    columnNumber: 11
                }, this);
            })
        ]
    }, void 0, true, {
        fileName: "[project]/components/ScrollEffect.js",
        lineNumber: 184,
        columnNumber: 5
    }, this);
}
_s(ScrollEffect, "aIIf9FilMLg/tVXGkjERPPLZD7E=");
_c = ScrollEffect;
var _c;
__turbopack_context__.k.register(_c, "ScrollEffect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/statsmodel.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$countup$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-countup/build/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const StatsSection = ()=>{
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        triggerOnce: false,
        margin: "-100px 0px"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: ref,
            className: "relative mt-2 py-8 px-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white shadow-lg rounded-lg w-full h-[200px] md:p-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-2xl sm:text-3xl font-bold text-gray-600",
                                children: isInView ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$countup$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    start: 0,
                                    end: 259,
                                    duration: 3
                                }, void 0, false, {
                                    fileName: "[project]/components/statsmodel.js",
                                    lineNumber: 18,
                                    columnNumber: 27
                                }, this) : "0"
                            }, void 0, false, {
                                fileName: "[project]/components/statsmodel.js",
                                lineNumber: 17,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 text-xs sm:text-sm",
                                children: "MINIMUM PROJECTS COMPLETED"
                            }, void 0, false, {
                                fileName: "[project]/components/statsmodel.js",
                                lineNumber: 20,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/statsmodel.js",
                        lineNumber: 16,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-2xl sm:text-3xl font-bold text-gray-800",
                                children: isInView ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$countup$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    start: 0,
                                    end: 10000,
                                    duration: 3,
                                    separator: ","
                                }, void 0, false, {
                                    fileName: "[project]/components/statsmodel.js",
                                    lineNumber: 28,
                                    columnNumber: 27
                                }, this) : "0"
                            }, void 0, false, {
                                fileName: "[project]/components/statsmodel.js",
                                lineNumber: 27,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 text-xs sm:text-sm",
                                children: "SATISFIED CUSTOMERS"
                            }, void 0, false, {
                                fileName: "[project]/components/statsmodel.js",
                                lineNumber: 30,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/statsmodel.js",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-2xl sm:text-3xl font-bold text-gray-600",
                                children: isInView ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$countup$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    start: 0,
                                    end: 32,
                                    duration: 3
                                }, void 0, false, {
                                    fileName: "[project]/components/statsmodel.js",
                                    lineNumber: 38,
                                    columnNumber: 27
                                }, this) : "0"
                            }, void 0, false, {
                                fileName: "[project]/components/statsmodel.js",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 text-xs sm:text-sm",
                                children: "AWARDS RECEIVED"
                            }, void 0, false, {
                                fileName: "[project]/components/statsmodel.js",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/statsmodel.js",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-2xl sm:text-3xl font-bold text-gray-600",
                                children: isInView ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$countup$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    start: 0,
                                    end: 10,
                                    duration: 3
                                }, void 0, false, {
                                    fileName: "[project]/components/statsmodel.js",
                                    lineNumber: 48,
                                    columnNumber: 27
                                }, this) : "0"
                            }, void 0, false, {
                                fileName: "[project]/components/statsmodel.js",
                                lineNumber: 47,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 text-xs sm:text-sm",
                                children: "YEARS OF EXPERIENCE"
                            }, void 0, false, {
                                fileName: "[project]/components/statsmodel.js",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/statsmodel.js",
                        lineNumber: 46,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/statsmodel.js",
                lineNumber: 14,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/statsmodel.js",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/statsmodel.js",
        lineNumber: 11,
        columnNumber: 5
    }, this);
};
_s(StatsSection, "DljcBprJKYjULUac3YKdUV9OwZQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = StatsSection;
const __TURBOPACK__default__export__ = StatsSection;
var _c;
__turbopack_context__.k.register(_c, "StatsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=components_e3e4ecb9._.js.map