"use client";
import React, { useRef } from "react";
import CountUp from "react-countup";
import { useInView } from "framer-motion";

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, margin: "-100px 0px" });

  return (
    <div className="relative bg-white">
      {/* Stats Section */}
      <div ref={ref} className="relative mt-2 py-8 px-4">
        <div className="bg-white shadow-lg rounded-lg w-full h-[200px] md:p-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {/* Stat 1 */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-600">
              {isInView ? <CountUp start={0} end={259} duration={3} /> : "0"}
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              MINIMUM PROJECTS COMPLETED
            </p>
          </div>

          {/* Stat 2 */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">
              {isInView ? <CountUp start={0} end={10000} duration={3} separator="," /> : "0"}
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              SATISFIED CUSTOMERS
            </p>
          </div>

          {/* Stat 3 */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-600">
              {isInView ? <CountUp start={0} end={32} duration={3} /> : "0"}
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              AWARDS RECEIVED
            </p>
          </div>

          {/* Stat 4 */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-600">
              {isInView ? <CountUp start={0} end={10} duration={3} /> : "0"}
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              YEARS OF EXPERIENCE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
