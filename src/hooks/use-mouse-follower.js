"use client";

import { useState, useEffect } from "react";
import { useMotionValue, useSpring } from "framer-motion";

export function useMouseFollower({
  dampingValue = 25,
  stiffnessValue = 150,
  hoverDetection = true,
} = {}) {
  const [isHoveringText, setIsHoveringText] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { damping: dampingValue, stiffness: stiffnessValue });
  const springY = useSpring(mouseY, { damping: dampingValue, stiffness: stiffnessValue });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      if (hoverDetection) {
        const element = document.elementFromPoint(e.clientX, e.clientY);
        const isTextElement =
          element?.tagName === "H1" ||
          element?.tagName === "H2" ||
          element?.tagName === "H3" ||
          element?.tagName === "P" ||
          element?.tagName === "SPAN" ||
          element?.closest("h1, h2, h3, p, span, button");

        setIsHoveringText(!!isTextElement);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, hoverDetection]);

  return {
    mouseX,
    mouseY,
    springX,
    springY,
    isHoveringText,
  };
}
