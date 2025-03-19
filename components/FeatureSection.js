"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaRocket,
  FaShieldAlt,
  FaChartLine,
} from "react-icons/fa";

const FeaturesSection = () => {
  const features = [
    {
      icon: <FaLightbulb size={40} className="text-gray-500" />,
      title: "Personalized Solutions",
      description:
        "We give our customers an unmatched personalized solutions as per their needs.",
    },
    {
      icon: <FaRocket size={40} className="text-gray-500" />,
      title: "Best Service @ Low Cost",
      description:
        "We believe in customers delight rather than in number of customers.",
    },
    {
      icon: <FaShieldAlt size={40} className="text-gray-500" />,
      title: "Premium Customer Support",
      description: "We provide premium 24x7 support to our customers.",
    },
    {
      icon: <FaChartLine size={40} className="text-gray-500" />,
      title: "Innovation & Implementations",
      description:
        "As a team of talented and young members we believe in fresh ideas.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-20 px-6 mt-15 lg:px-20 flex flex-col lg:flex-row items-center justify-between"
    >
      {/* Left Side Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="lg:w-1/3 text-left"
      >
        <span className="text-sm font-semibold tracking-wide text-gray-500 uppercase">
          01 — What We Do
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-700 mt-4">
          Our Features
        </h2>
        <div className="w-16 h-1 bg-red-500 mt-4 rounded-full"></div>
      </motion.div>

      {/* Right Side Features Grid */}
      <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-10 lg:mt-0">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center text-center transition-all duration-300 hover:bg-gray-100"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default FeaturesSection