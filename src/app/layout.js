"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import useSmoothScroll from "@/components/addonFunctions/UseSmoothScroll";
import ScrollToTopButton from "@/components/addonFunctions/Scroll-top";
import MouseFollower from "@/components/addonFunctions/Mousefollower";
<<<<<<< HEAD
// import  navbar from "@/components/header/navbar";
import Navbar from "@/components/header/navbar";
=======

import Footer from "@/components/footer-section/footer";
>>>>>>> ca365f3b54417b57fd59c98f133a2f5db0f75514
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({ children }) {
  // useSmoothScroll();
  return (
    <html lang="en">
      <head>
        <title>Bridge Group Solution</title>
        <meta name="description" content="It outsourcing & Financial Planning" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <Navbar/>
        <MouseFollower />
        <ScrollToTopButton />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
