"use client"

import { useState } from "react"
import Image from "next/image"

const About = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const timelineData = [
    { year: "2022", content: "The only Microsoft " },
    { year: "2021", content: "Expanded cloud services" },
    { year: "2018", content: "Digital transformation initiatives" },
    { year: "2016", content: "Enhanced Microsoft partnership" },
    { year: "2015", content: "Business growth milestone" },
    { year: "2014", content: "Company foundation" },
  ]

  return (
    <section className="py-22 px-8 max-w-[1200px] mx-auto relative">
      {/* Story Container */}
      <div className="text-center mb-16 mt-16">
        <h3 className="text-[#4040ff] text-xl mb-4 font-medium">Our story</h3>
        <h1 className="text-4xl md:text-5xl font-medium leading-tight mb-8 text-gray-800">
          10+ Years of Excellence in Outsourcing and Innovation
        </h1>
        <p className="text-lg text-gray-600 max-w-[800px] mx-auto leading-relaxed">
          BGS was founded in 2014 as one of India's pioneering Project Outsourcing start-ups, dedicated to bridging gaps
          in process management and outsourcing. From our roots in project outsourcing, we have expanded into diverse
          sectors with a commitment to delivering high-quality, cost-effective solutions that drive meaningful impact.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative py-8 flex justify-between mb-8">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className="relative flex-1"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="flex flex-col items-center relative transition-all duration-300">
              <div
                className={`text-base ${hoveredIndex === index ? "text-[#4040ff] font-semibold" : "text-gray-600"} mb-2 transition-colors duration-300`}
              >
                {item.year}
              </div>
              <div
                className={`w-3 h-3 rounded-full ${hoveredIndex === index ? "bg-[#4040ff] scale-110" : "bg-gray-300"} relative z-10 transition-all duration-300`}
              ></div>
              {index < timelineData.length - 1 && (
                <div className="absolute top-1/2 right-[-50%] w-full h-0.5 bg-gray-300 z-0"></div>
              )}
            </div>
            {hoveredIndex === index && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-6 text-center max-w-[300px] animate-[fadeIn_0.3s_ease_forwards]">
                <div className="backdrop-blur-md bg-[#5780d0]/20 border border-white/40 rounded-xl shadow-lg p-4 relative">
                  <p className="text-gray-800 text-base leading-relaxed">{item.content}</p>
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 rotate-45 backdrop-blur-md bg-[#5780d0]/20 border-t border-l border-white/40"></div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Partners Section */}
      <div className="flex flex-col md:flex-row justify-between items-center py-16 gap-8 md:gap-16 mt-8 mb-24">
        <div className="flex-1 max-w-[500px]">
          <h3 className="text-[#4040ff] text-2xl mb-4 font-medium">Partners</h3>
          <h2 className="text-4xl font-medium leading-tight mb-6 text-gray-800">Strategic Technology Partners</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            We collaborate with industry-leading technology providers to deliver cutting-edge solutions that drive
            innovation and digital transformation for our clients.
          </p>
        </div>
        <div className="flex-1">
          <div className="grid grid-cols-2 gap-6 md:gap-8 items-center justify-items-center">
            <Image src="/about/1_logo.png" alt="Microsoft" width={100} height={60} className="transition-transform duration-300 hover:scale-105" />
            <Image src="/about/2_logo.webp" alt="AWS" width={100} height={60} className="transition-transform duration-300 hover:scale-105" />
            <Image src="/about/3_logo.png" alt="AWS" width={100} height={60} className="transition-transform duration-300 hover:scale-105" />
            <Image src="/about/4_logo.png" alt="AWS" width={100} height={60} className="transition-transform duration-300 hover:scale-105" />
            <Image src="/about/5_logo.png" alt="AWS" width={100} height={60} className="transition-transform duration-300 hover:scale-105" />
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="py-24 bg-[#ededed] text-white -mt-16 -mx-8">
        <div className="max-w-[1200px] mx-auto px-8">
          <h3 className="text-[#4040ff] text-2xl mb-4 font-medium">Our Values</h3>
          <h2 className="text-4xl font-medium leading-tight mb-12 text-black opacity-90">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="relative before:content-[''] before:absolute before:left-0 before:top-[-10px] before:w-10 before:h-0.5 before:bg-[#4040ff]">
              <h3 className="text-3xl text-black opacity-90 mb-4 font-medium">Innovation</h3>
              <p className="text-xl text-black opacity-70 leading-relaxed">
                We constantly seek new and better ways to solve problems and create value for our clients.
              </p>
            </div>
            <div className="relative before:content-[''] before:absolute before:left-0 before:top-[-10px] before:w-10 before:h-0.5 before:bg-[#4040ff]">
              <h3 className="text-3xl text-black opacity-90 mb-4 font-medium">Excellence</h3>
              <p className="text-xl text-black opacity-70 leading-relaxed">
                We strive for excellence in everything we do, delivering high-quality solutions that exceed expectations.
              </p>
            </div>
            <div className="relative before:content-[''] before:absolute before:left-0 before:top-[-10px] before:w-10 before:h-0.5 before:bg-[#4040ff]">
              <h3 className="text-3xl text-black opacity-90 mb-4 font-medium">Integrity</h3>
              <p className="text-xl text-black opacity-70 leading-relaxed">
                We conduct our business with honesty, transparency, and ethical principles at all times.
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default About
