"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import useSmoothScroll from "@/components/addonFunctions/UseSmoothScroll";
import ScrollToTopButton from "@/components/addonFunctions/Scroll-top";
import MouseFollower from "@/components/addonFunctions/Mousefollower";

import Footer from "@/components/footer-section/footer";
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
        <meta name="description" content="IT OUTSOURCING & FINANCE PLANNING" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MouseFollower />
        <ScrollToTopButton />
        {children}
        <Footer />
      </body>
    </html>
  );
}
