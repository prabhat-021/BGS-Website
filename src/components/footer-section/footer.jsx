"use client"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Facebook, Instagram, Dribbble, Figma } from "lucide-react"
import { useMouseFollower } from "@/hooks/use-mouse-follower"

export default function Footer() {
  const [scrollY, setScrollY] = useState(0)
  const footerRef = useRef(null)

  const { mouseX, mouseY } = useMouseFollower({ hoverDetection: false })

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const [footerInView, setFooterInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setFooterInView(entry.isIntersecting),
      { threshold: 0.1 }
    )
    if (footerRef.current) observer.observe(footerRef.current)
    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current)
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <footer ref={footerRef} className="relative w-full bg-black text-white overflow-hidden">
      <div
        className="absolute left-0 bottom-0 h-[200px] w-[200px] rounded-full bg-gradient-to-br from-pink-500 via-orange-400 to-yellow-300 opacity-30 blur-3xl"
        style={{ transform: `translateY(${scrollY * -0.1}px)` }}
        aria-hidden="true"
      />
      <div className="py-20 border-b border-white/10 text-center">
        <motion.h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">Let's build something great together</motion.h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-10">
          Get in touch to explore how we can help your business reach its full potential.
        </p>
        <motion.button className="bg-white text-black px-8 py-3 rounded-md font-medium hover:bg-gray-200 transition-colors" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          Get Started Today
        </motion.button>
      </div>
      <motion.div className="py-16 container mx-auto px-6 md:px-12" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-12">
          <motion.div variants={itemVariants} className="lg:col-span-5 space-y-6">
            <h2 className="text-4xl font-light">BRIDGE GROUP SOLUTIONS</h2>
            <p className="text-gray-400 max-w-md text-sm leading-relaxed">
              We help businesses succeed in the digital space by creating beautiful web experiences.
            </p>
            <div className="flex space-x-6 pt-4">
              {[Facebook, Instagram, Dribbble, Figma].map((Icon, index) => (
                <Link key={index} href="#" className="group">
                  <motion.div whileHover={{ scale: 1.1 }} className="text-white/70 hover:text-white transition-colors">
                    <Icon size={20} />
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="lg:col-span-5 space-y-6 md:text-right">
            <p className="text-gray-400 text-sm">You can also email us at:</p>
            <motion.p className="text-xl font-light" whileHover={{ scale: 1.02 }}>contact@bridgegroupsolutions.com</motion.p>
            <div className="flex flex-wrap justify-start md:justify-end gap-8 pt-6">
              {["Home", "Projects", "Blog", "About Us", "Contact"].map((item, index) => (
                <Link key={index} href="#" className="relative group">
                  <span className="text-gray-400 hover:text-white transition-colors">{item}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all group-hover:w-full"></span>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.div variants={itemVariants} className="flex flex-col md:flex-row justify-between items-center mt-16 pt-8 border-t border-white/10">
          <p className="text-gray-500 text-xs">©{new Date().getFullYear()} bridgegroupsolutions. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {["Privacy Policy", "Terms of Service"].map((item, index) => (
              <Link key={index} href="#" className="relative group">
                <span className="text-gray-500 text-xs hover:text-white transition-colors">{item}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-[0.5px] bg-white transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </footer>
  )
}
