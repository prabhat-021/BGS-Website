"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Outsourcing",
    dropdown: [
      { label: "ERP & Customized Software", href: "/Outsourcing/ERP" },
      { label: "Software Testing", href: "/Outsourcing/Testing" },
    ],
  },
  { label: "Investing", href: "/" },
  { label: "Careers", href: "/" },
  { label: "Gallery", href: "/" },
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
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar Header */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? "py-3 bg-black/90 backdrop-blur-lg border-b border-white/10" : "py-4 bg-black border-b border-white/5"}`}>
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <Image src="/navlogo.png" alt="Bridge Group Logo" width={40} height={40} className="mr-3" />
              <motion.span className="text-2xl font-extralight text-white tracking-wider" whileHover={{ x: 3 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                BRIDGE GROUP
              </motion.span>
            </Link>

            {/* Desktop Navigation */}
            <nav ref={navRef} className="hidden md:flex items-center space-x-12 relative">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setHoveredItem(item.label)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {item.href ? (
                    <Link href={item.href} className="relative py-2 group" onClick={() => setActiveItem(item.label)}>
                      <span className={`text-sm tracking-wide font-light transition-colors duration-300 ${activeItem === item.label ? "text-white" : "text-gray-400 group-hover:text-white"}`}>
                        {item.label}
                      </span>
                    </Link>
                  ) : (
                    <button className="relative py-2 group text-sm tracking-wide font-light transition-colors duration-300 text-gray-400 hover:text-white">
                      {item.label}
                    </button>
                  )}

                  {/* Dropdown Menu */}
                  {item.dropdown && hoveredItem === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-[calc(100%+10px)] left-0 w-56 bg-[#C9C9C9]/95 backdrop-blur-xl rounded-lg shadow-2xl py-2 border border-white/20"
                    >
                      {item.dropdown.map((dropdownItem) => (
                        <Link key={dropdownItem.label} href={dropdownItem.href} className="block px-6 py-3 text-sm text-gray-800 hover:text-white hover:bg-black/80 transition-all duration-200 font-medium">
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Menu Toggle Button */}
            <motion.button className="md:hidden text-white p-2 rounded-full" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu" whileTap={{ scale: 0.9 }}>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div key={mobileMenuOpen ? "close" : "open"} initial={{ opacity: 0, rotate: mobileMenuOpen ? -90 : 90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: mobileMenuOpen ? 90 : -90 }} transition={{ duration: 0.2 }}>
                  {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
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
              {navItems.map((item) => (
                <motion.div key={item.label} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
                  {item.href ? (
                    <Link href={item.href} className="flex items-center justify-between py-4 border-b border-white/10">
                      <span className="font-light tracking-wide">{item.label}</span>
                      <ChevronRight className="h-4 w-4 opacity-50" />
                    </Link>
                  ) : (
                    <div className="py-4 border-b border-white/10">
                      <span className="font-light tracking-wide">{item.label}</span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
