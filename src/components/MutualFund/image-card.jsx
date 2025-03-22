"use client";

import { InteractiveCard } from "./interactive-card"; // Ensure correct path

export function ImageCard({
  imageSrc,
  label,
  textColor = "text-white",
  intensity = 10,
}) {
  return (
    <InteractiveCard intensity={intensity} className="overflow-hidden p-0">
      <div className="relative h-full w-full">
        {imageSrc && (
          <img
            src={imageSrc}
            alt={label || "Image"}
            className="w-full h-full object-cover rounded-xl"
          />
        )}
        {/* Optional Label Overlay */}
        {label && (
          <div className={`${textColor} absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/40 px-4 py-1 rounded-md text-lg font-semibold`}>
            {label}
          </div>
        )}
      </div>
    </InteractiveCard>
  );
}