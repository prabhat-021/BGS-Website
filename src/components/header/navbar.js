"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { Menu, X, ChevronRight, ArrowRight } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
];

export default function MainNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const [hoveredItem, setHoveredItem] = useState(null);

  const navRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 300 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (navRef.current) {
        const rect = navRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-black/90 backdrop-blur-lg border-b border-white/10"
            : "py-4 bg-black border-b border-white/5"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center group">
              <motion.span
                className="text-2xl font-extralight text-white tracking-wider"
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                BRIDGE GROUP
              </motion.span>
            </Link>

            <nav ref={navRef} className="hidden md:flex items-center space-x-12 relative">
              <motion.div
                className="absolute bottom-0 h-[2px] bg-white opacity-30 rounded-full"
                style={{
                  width: hoveredItem ? "24px" : "0px",
                  left: springX,
                  top: springY,
                  translateX: "-50%",
                  translateY: "8px",
                  opacity: hoveredItem ? 0.5 : 0,
                }}
                transition={{
                  width: { duration: 0.2 },
                  opacity: { duration: 0.2 },
                }}
              />

              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="relative py-2 group"
                  onClick={() => setActiveItem(item.label)}
                  onMouseEnter={() => setHoveredItem(item.label)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <span
                    className={`text-sm tracking-wide font-light transition-colors duration-300 ${
                      activeItem === item.label ? "text-white" : "text-gray-400 group-hover:text-white"
                    }`}
                  >
                    {item.label}
                  </span>
                  <motion.span
                    className="absolute -bottom-1 left-0 h-[2px] bg-white"
                    initial={{ width: activeItem === item.label ? "100%" : "0%" }}
                    animate={{
                      width: activeItem === item.label ? "100%" : hoveredItem === item.label ? "100%" : "0%",
                    }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  />
                </Link>
              ))}

              <Link href="/contact">
                <motion.button
                  className="group relative overflow-hidden bg-white text-black rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 flex items-center"
                  whileHover="hover"
                  whileTap="tap"
                  variants={{ hover: {}, tap: { scale: 0.97 } }}
                >
                  <motion.span
                    className="relative z-10 flex items-center"
                    variants={{ hover: { x: 3 } }}
                    transition={{ duration: 0.3 }}
                  >
                    Contact Us
                    <motion.div
                      className="ml-1"
                      variants={{ hover: { x: 2, opacity: 1 } }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.div>
                  </motion.span>
                </motion.button>
              </Link>
            </nav>

            <motion.button
              className="md:hidden text-white p-2 rounded-full"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={mobileMenuOpen ? "close" : "open"}
                  initial={{ opacity: 0, rotate: mobileMenuOpen ? -90 : 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: mobileMenuOpen ? 90 : -90 }}
                  transition={{ duration: 0.2 }}
                >
                  {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
            className="fixed top-[65px] left-0 right-0 z-40 md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-1">
              {navItems.map((item, index) => (
                <motion.div key={item.label} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
                  <Link href={item.href} className="flex items-center justify-between py-4 border-b border-white/10">
                    <span className="font-light tracking-wide">{item.label}</span>
                    <ChevronRight className="h-4 w-4 opacity-50" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
