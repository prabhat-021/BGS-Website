"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const timelineData = [
  { year: "Us", text: "Bridge Group Solutions hold our associates, customers, employees, as well as our community in the highest regard, where we incorporate both the needs of our company, as well as the needs of our ever-changing world into our culture. Our core values are the backbone to our company which resonate with our vision:" },
  { year: "People", text: "We must be caring, show respect, compassion and humanity for our colleagues, associates and customers around the world, and always work for the benefit of the communities we serve." },
  { year: "Integrity", text: "Conducting our operations with integrity and with the respect for the each people, business associate whom we touch in different juncture of our business journey." },
  { year: "Customer Delight", text: "We are committed to foster customer centric culture where our processes, services and innovations are aligned around customer/franchisee/business associate expectations." },
  { year: "Excellence", text:"We must constantly strive to achieve the highest possible standards in our execution and in the quality of the services we provide at affordable cost and need based solutions." },
  { year: "Trust", text:"We as team believe that the trust is the foundation of our relationship with our associates, franchisee, customer and employees and we cultivate it every day by being accountable of every single property transaction we offer." }
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
      className="relative flex flex-col md:flex-row items-start md:items-center mb-5 w-full"
    >
      {/* Year Box */}
      <div className="w-full md:w-3/4 flex justify-start">
        <div className="px-6 py-3 bg-gray-900 rounded-lg text-center shadow-md">
          <h3 className="text-2xl font-extrabold text-white">{year}</h3>
        </div>
      </div>

      {/* Timeline Content */}
      <div className="w-full text-left px-0">
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

export default function Ourdata() {
  return (
    <div className="min-h-screen flex flex-col items-start justify-start px-4 md:px-12 space-y-12 mt-0">
      {/* Header Section */}
      <div className="w-full flex justify-end pr-10 md:pr-20  pl-9">
        
        <div className="flex items-center space-x-3 text-gray-900 uppercase text-xl md:text-2xl font-bold tracking-wide">
          <span>02</span>
          <div className="w-10 h-[2px] bg-red-500"></div>
          <span>OUR CORE VALUES</span>
        </div>
      </div>

      {/* Timeline Content */}
      <div className="relative w-full max-w-5xl border-l-4 border-red-500 pl-4 md:pl-6 ml-2 md:ml-8">
        {timelineData.map((item, index) => (
          <TimelineItem key={index} year={item.year} text={item.text} index={index} />
        ))}
      </div>
    </div>
  );
}
