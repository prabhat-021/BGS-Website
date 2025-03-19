"use client";

import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdArrowForward } from "react-icons/md";

export default function Footer() {
  // Stagger animations for smooth entrance
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, ease: "easeInOut" },
    },
  };

  // Fade in & slide-up effect
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 3, ease: "easeInOut" },
    },
  };

  // Line animation (moves left to right, then resets)
  const lineAnimation = {
    initial: { x: "-50%" },
    animate: {
      x: "50%",
      transition: {
        duration: 2,
        delay: 2, // Pause before restarting
        repeat: Infinity, // Keep looping
        repeatType: "restart", // Restart from the start instead of going back
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.footer
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="w-full bg-gradient-to-r from-[#00093c] to-[#2d0b00] text-white py-12 text-sm"
    >
      <div className="container mx-auto px-5 flex flex-wrap justify-between items-start">
        {/* Column 1 */}
        <motion.div variants={fadeInUp} className="w-full sm:w-1/4 mb-8">
          <img src="/image.png" alt="Logo" className="w-20 mb-4" />
          
          <p><strong>Bridge Group Solutions</strong><br></br>
            We build bridges between people, technology, and business.
          </p>
        </motion.div>

        {/* Column 2 */}
        <motion.div variants={fadeInUp} className="w-25 sm:w-1/6 mb-8">
          <h3 className="relative text-lg px-7 font-semibold mb-6">
            Office
            <motion.div
              className="w-15 h-1 bg-orange-500 absolute bottom-0"
              {...lineAnimation}
            />
          </h3>
          <p>Moti Vihar , Sector 41</p>
          <p>Gurugram,122003, Haryana</p>
          <p className="border-b border-orange-500 w-fit my-4">contactus@bridgegroupsolutions.com</p>
          <h4>	+91-8860060616</h4>
        </motion.div>

        {/* Column 3 */}
        <motion.div variants={fadeInUp} className="w-full sm:w-1/6 mb-8">
          <h3 className="relative text-lg font-semibold mb-6">
            Links
            <motion.div
              className="w-15 h-1 bg-orange-500 absolute bottom-0"
              {...lineAnimation}
            />
          </h3>
          <ul className="space-y-3">
            {["HOME", "ABOUT", "SERVICE", "CONTACT US"].map((link, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                className="relative w-fit group"
              >
                <a href="#" className="hover:text-orange-500">{link}</a>
                <motion.div
                  className="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Column 4 */}
        <motion.div variants={fadeInUp} className="w-full sm:w-1/4 mb-8">
          <h3 className="relative text-lg font-semibold mb-6">
            Newsletter
            <motion.div
              className="w-15 h-1 bg-orange-500 absolute bottom-0"
              {...lineAnimation}
            />
          </h3>
          <form className="flex items-center border-b border-orange-500 pb-2">
            <MdEmail className="text-lg mr-2" />
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent focus:outline-none text-white w-full"
              required
            />
            <button type="submit">
              <MdArrowForward className="text-lg text-gray-400 hover:text-orange-500" />
            </button>
          </form>
          <div className="flex space-x-3 mt-6">
            {[FaFacebookF, FaWhatsapp, FaTwitter, FaInstagram].map((Icon, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.3, transition: { type: "spring", stiffness: 300 } }}
                className="bg-orange-500 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer"
              >
                <Icon />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Line */}
      <hr className="border-gray-500 my-6 w-10/12 mx-auto" />
      <p className="text-center">Cosas Learning Ⓒ {new Date().getFullYear()} - All Rights Reserved</p>
    </motion.footer>
  );
}
