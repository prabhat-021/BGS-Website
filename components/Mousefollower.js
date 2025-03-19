"use client"; // Ensures it runs only on the client side (important for Next.js)

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 bg-red-400 rounded-full pointer-events-none z-50"
      animate={{ x: position.x - 8, y: position.y - 8 }} // Centering the dot
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    />
  );
};

export default MouseFollower;