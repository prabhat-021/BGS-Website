"use client";
import Internships from "@/components/careers/Internships";
import InternShipSection from "@/components/careers/InternshipSection";
import MindOverMatter from "@/components/careers/MindOverMatter";

export default function Internship() {
  return (
    <div className="w-full bg-slate-100 pt-20">
      {/* Hero Section */}
      <div className="pt-10 pb-20 sm:pb-40 px-4 sm:px-6 border-b border-gray-200">
        {/* Title Section */}
        <div className="text-5xl sm:text-7xl lg:text-9xl font-bold py-5 text-center sm:text-left">
          Career
        </div>
        {/* Description Section */}
        <div className="px-4 sm:px-0">
          <p className="text-lg sm:text-xl text-center sm:text-left opacity-100 transform transition-all">
            Join Our Team of Skilled Architects and Designers and
            <br className="hidden sm:block" />{" "}
            {/* Break line only on larger screens */}
            help us Create Innovative and Sustainable Spaces.
          </p>
        </div>
      </div>

      {/* Components Section */}
      <InternShipSection />
      <Internships />
      <MindOverMatter />
    </div>
  );
}
