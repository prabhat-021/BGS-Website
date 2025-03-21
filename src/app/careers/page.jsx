"use client";
import Internships from "@/components/careers/Internships";
import InternShipSection from "@/components/careers/InternshipSection";
import MindOverMatter from "@/components/careers/MindOverMatter";

export default function Internship() {
  return (
    <div className=" w-full  bg-slate-100  pt-20 ">
      <div className=" pt-10 pb-40  px-4 border-b-gray-200 border-b-1 ">
        {/* Title Section */}
        <div className="text-9xl font-bold py-5">Career</div>
        {/* Description Section */}
        <div className="px-4  ">
          <p className="text-lg opacity-100 transform transition-all">
            Join Our Team of Skilled Architects and Designers and
            <br />
            help us Create Innovative and Sustainable Spaces.
          </p>
        </div>
      </div>
      <InternShipSection />
      <Internships />
      <MindOverMatter />
    </div>
  );
}
