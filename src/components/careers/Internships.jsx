import { useState } from "react";
import { motion } from "framer-motion";
import { IconArrowDown, IconArrowUp } from "@tabler/icons-react";
import { internshipsData } from "@/utils/data/internshipsData";

const Internships = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleExpandToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="container  py-10 px-6">
      <div className="px-6 py-6   border-b-gray-300 border-b-1 ">
        <div className="flex w-[80%] gap-4 text-end  px-5 items-baseline">
          <div className="text-lg font-bold w-1/3 text-start">Job Role</div>
          <div className="text-lg font-bold w-1/3">Location</div>
          <div className="text-lg font-bold w-1/3">Duration</div>
        </div>
      </div>
      <div className=" mx-auto  pb-6 rounded-lg ">
        {internshipsData.map((section, index) => (
          <div
            key={index}
            className="border-b border-gray-300 hover:bg-gray-200"
          >
            <div
              className="flex justify-between items-center py-4 cursor-pointer  px-4 rounded-lg"
              onClick={() => handleExpandToggle(index)}
            >
              <div className="flex gap-4 w-[80%]  text-end">
                <div className="text-lg font-bold w-1/3 text-start">
                  {section.department} Internship/Jobs
                </div>
                <div className="text-lg font-bold w-1/3">
                  {section.location}
                </div>
                <div className="text-lg font-bold w-1/3">Full Time</div>
              </div>
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-500 text-white">
                {expandedIndex === index ? (
                  <IconArrowUp stroke={2} />
                ) : (
                  <IconArrowDown stroke={2} />
                )}
              </button>
            </div>
            {/* expanded content */}
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: expandedIndex === index ? "auto" : 0,
                opacity: expandedIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden px-4  py-4"
            >
              <p>
                <strong>Eligibility:</strong> {section.eligibilityCriteria}
              </p>
              <p>
                <strong>Stipend:</strong> {section.stipend}
              </p>
              <strong>Key Responsibilities:</strong>
              <ul className="list-disc list-inside mt-2">
                {section.keyResponsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
              <strong>Rewards & Recognitions:</strong>
              <ul className="list-disc list-inside mt-2">
                {section.rewardsRecognitions.map((reward, i) => (
                  <li key={i}>{reward}</li>
                ))}
              </ul>
              <strong>Certifications:</strong>
              <ul className="list-disc list-inside mt-2">
                {section.certifications.map((cert, i) => (
                  <li key={i}>{cert}</li>
                ))}
              </ul>
              <motion.button
                className="mt-4 px-6 py-2 bg-black text-white rounded-full text-sm uppercase"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Apply Now
              </motion.button>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Internships;
