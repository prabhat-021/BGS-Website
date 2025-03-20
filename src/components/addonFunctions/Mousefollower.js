"use client";

import { motion } from "framer-motion";
import { useMouseFollower } from "@/hooks/use-mouse-follower";

export default function MouseFollower({
  normalSize = "30px",
  hoverSize = "80px",
  color = "white",
  mixBlendMode = "difference",
  pulseOnHover = true,
}) {
  const { springX, springY, isHoveringText } = useMouseFollower();

  return (
    <motion.div
      className="pointer-events-none fixed z-50 rounded-full"
      style={{
        width: isHoveringText ? hoverSize : normalSize,
        height: isHoveringText ? hoverSize : normalSize,
        backgroundColor: color,
        mixBlendMode: mixBlendMode,
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
        transition: "width 0.3s ease, height 0.3s ease",
      }}
      animate={{
        scale: pulseOnHover && isHoveringText ? [1, 1.2, 1] : 1,
      }}
      transition={{
        duration: 1.5,
        ease: "easeInOut",
        repeat: pulseOnHover && isHoveringText ? Number.POSITIVE_INFINITY : 0,
      }}
      aria-hidden="true"
    />
  );
}
