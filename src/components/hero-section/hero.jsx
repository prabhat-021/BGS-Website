"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import MouseFollower from "@/components/addonFunctions/Mousefollower";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div className="min-h-screen bg-[#f8f8f8] relative overflow-hidden">
        <section
          ref={heroRef}
          className="relative min-h-screen px-6 md:px-12 pt-6 overflow-hidden flex flex-col justify-center"
        >
          <div
            className="absolute right-0 top-0 h-[300px] w-[300px] animate-pulse rounded-full bg-gradient-to-br from-pink-400 via-orange-300 to-yellow-200 opacity-70 blur-3xl"
            style={{ transform: `translateY(${scrollY * 0.2}px)` }}
            aria-hidden="true"
          />

          <div className="absolute right-20 top-20 z-10" aria-hidden="true">
            <div
              className="absolute h-16 w-16 rounded-full border-2 border-black opacity-20 animate-float-slow"
              style={{ transform: `translateY(${scrollY * 0.1}px)` }}
            ></div>
            <div
              className="absolute h-8 w-8 rounded-full bg-pink-300 opacity-40 -right-10 top-20 animate-float-medium"
              style={{ transform: `translateY(${scrollY * 0.15}px)` }}
            ></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto w-full">
            <h1 className="max-w-3xl text-6xl font-light leading-tight tracking-tight">
              <span className="block hover:text-pink-500 transition-colors duration-300">BRIDGE GROUP</span>
              <span className="block hover:text-orange-500 transition-colors duration-300">SOLUTION</span>
              <span className="block text-5xl hover:text-yellow-500 transition-colors duration-300">
                DIGITAL PRODUCTS.
              </span>
            </h1>

            <div className="mt-20 max-w-xl">
              <button className="rounded-full border-2 border-black px-8 py-3 group hover:bg-black hover:text-white transition-colors duration-300">
                <span className="relative flex items-center">
                  DISCUSS THE PROJECT
                  <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </span>
              </button>

              <p className="mt-10 text-sm leading-relaxed text-gray-600 tracking-wide">
                BRIDGE GROUP SOLUTION - LEADERS IN WEB & MOBILE
                <br />
                DESIGN AND DEVELOPMENT INDUSTRY.
              </p>
            </div>
          </div>

          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="relative h-10 w-5 rounded-full border border-black/10 flex flex-col items-center justify-start overflow-hidden bg-white/20 backdrop-blur-sm shadow-sm">
              <motion.div
                className="h-1.5 w-1.5 rounded-full bg-black/60 mt-1.5"
                animate={{ y: [0, 5, 0] }}
                transition={{
                  duration: 1.2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  repeatDelay: 0.3,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
