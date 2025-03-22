"use client";

import React, { useState, useRef } from "react";
import { Card } from "@/components/ui/card"; // Adjust the path as needed
import { cn } from "@/lib/utils"; // Adjust the path as needed

export function InteractiveCard({ children, className = "", intensity = 10, ...props }) {
  const cardRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateY = (x / (rect.width / 2)) * intensity;
    const rotateX = -((y / (rect.height / 2)) * intensity);

    setRotateX(rotateX);
    setRotateY(rotateY);
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => {
    setIsHovering(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      ref={cardRef}
      className={cn(
        "transition-transform transform-gpu duration-300 ease-out",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isHovering
          ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
          : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      }}
      {...props}
    >
      <Card className="h-full w-full overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
        <div className="relative h-full w-full">
          {children}
          {isHovering && (
            <div
              className="absolute inset-0 pointer-events-none bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-70"
              style={{
                borderRadius: "inherit",
                mixBlendMode: "overlay",
              }}
            />
          )}
        </div>
      </Card>
    </div>
  );
}