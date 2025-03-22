"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { InteractiveCard } from "@/components/MutualFund/interactive-card";
import { ImageCard } from "@/components/MutualFund/image-card";

const MutualFundsPage = () => {
  return (
    <div className="bg-[#ededed] min-h-screen w-full">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-4">
          <div className="text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/investing" className="hover:text-blue-600">Investing</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800">Mutual Funds</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="min-h-[50vh] flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-grid-black/[0.02] -z-10" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900">
              Grow Your Wealth with Mutual Funds
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Mutual funds provide a simple way to invest with professional management. They offer diversification and suit various risk levels.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* SECTION 1 */}
          <InteractiveCard>
            <div className="p-6 h-full">
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">Mutual Funds</h2>
              <p className="text-gray-700">
                To many people, Mutual Funds can seem complicated or intimidating. We are going to try and simplify it for
                you at its very basic level. Essentially, the money pooled in by a large number of people (or investors)
                is what makes up a Mutual Fund. This fund is managed by a professional fund manager.
              </p>
            </div>
          </InteractiveCard>

          <ImageCard
            gradientFrom="blue-400"
            gradientTo="blue-600"
            label="Mutual Funds"
            imageSrc="/images/mutual.webp"
          />

          {/* SECTION 2 */}
          <InteractiveCard>
            <div className="p-6 h-full">
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">Benefits of Mutual Funds</h2>
              <p className="text-gray-700 mb-3">
                Many of us dread the thought of managing our own investments. With a professional fund management company,
                people are put in charge of various functions based on their education, experience, and skills.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>You do not know how to do the job best.</li>
                <li>You do not have enough time or inclination.</li>
                <li>When you are likely to save money by outsourcing.</li>
                <li>You can spend your time on other activities of your choice.</li>
              </ul>
            </div>
          </InteractiveCard>

          <ImageCard
            gradientFrom="blue-500"
            gradientTo="purple-500"
            label="Benefits"
            imageSrc="/images/mutual2.webp"
          />

          {/* SECTION 3 */}
          <InteractiveCard>
            <div className="p-6 h-full">
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">Why invest through Mutual Funds?</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-3">
                <li><span className="font-medium">Professional Money Management</span> - Fund managers implement strategies that reflect goals.</li>
                <li><span className="font-medium">Diversification</span> - Reduces risk by spreading investments.</li>
                <li><span className="font-medium">Liquidity</span> - Sell your units anytime.</li>
                <li><span className="font-medium">Affordability</span> - Start with as low as ₹500.</li>
                <li><span className="font-medium">Convenience</span> - Automated reinvestment & withdrawals.</li>
              </ul>
            </div>
          </InteractiveCard>

          <ImageCard
            gradientFrom="indigo-400"
            gradientTo="blue-600"
            label="Why Invest"
            imageSrc="/images/mutual3.webp"
          />

          {/* SECTION 4 */}
          <InteractiveCard className="col-span-1 md:col-span-2 lg:col-span-2">
            <div className="p-6 h-full">
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">Tax benefits on Investment in Mutual Funds</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-3">
                <li>100% Income Tax exemption on all Mutual Fund dividends.</li>
                <li>Equity Funds: Short-term capital gains taxed at 15%.</li>
                <li>Debt Funds: Short-term capital gains taxed per slab rates.</li>
                <li>Long-term capital gains tax: 10% without indexation or 20% with indexation.</li>
                <li>Open-end funds with equity exposure of more than 65% are exempt from dividend tax.</li>
              </ul>
            </div>
          </InteractiveCard>

          {/* FOOTNOTE */}
          <InteractiveCard>
            <div className="p-6 h-full bg-blue-50">
              <div className="text-center text-gray-700 text-sm">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Important Note</h3>
                <p>
                  Equity Funds are those where the investible funds are invested in domestic companies to the extent of
                  more than 65% of the total proceeds of such funds.
                </p>
              </div>
            </div>
          </InteractiveCard>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-[#000000] text-white rounded-xl p-8 text-center shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Investing?</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Take the first step towards financial freedom with our expert-managed mutual funds.
          </p>
          <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-200 transition-colors duration-300">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default MutualFundsPage;