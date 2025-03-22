'use client'
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const PensionPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-4">
          <div className="text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/investing" className="hover:text-blue-600">Investing</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800">Pension Funds</span>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-6">Pension Funds</h1>
            <p className="text-gray-600 mb-6">
              Pension Funds are pooled-contributions from pension plans set up by employers, unions, or other organizations
              to provide for the employees' or members' retirement benefits. As the largest investment blocks in most countries,
              they dominate stock markets and play a crucial role in institutional investing alongside insurance companies
              and investment trusts.
            </p>
            <p className="text-gray-600">
              A key advantage of pension funds is their tax treatment - they're typically exempt from capital gains tax,
              and their investment portfolio earnings are either tax deferred or tax exempt.
            </p>
          </div>
          <div className="relative h-[300px]">
            <Image
              src="/pension_fund.png"
              alt="Pension Fund Investment"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Classifications Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Pension Fund Classifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4">Open vs. Closed Pension Funds</h3>
              <p className="text-gray-600 mb-4">
                Open pension funds support at least one pension plan with no restriction on membership.
              </p>
              <h4 className="font-semibold mt-4 mb-2">Closed Pension Fund Types:</h4>
              <ul className="list-disc list-inside text-gray-600">
                <li>Single employer pension funds</li>
                <li>Multi-employer pension funds</li>
                <li>Related member pension funds</li>
                <li>Individual pension funds</li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4">Public vs. Private Pension Funds</h3>
              <p className="text-gray-600 mb-4">
                Public pension funds are regulated under public sector law, while private pension funds
                fall under private sector law regulation.
              </p>
              <p className="text-gray-600">
                The distinction between public and private funds varies by country, with some having
                very specific requirements for administration and investment. For example, U.S. local
                governmental bodies must follow state-specific laws regarding permitted investments
                and minimum municipal obligations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features of Pension Funds</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Professional Management</h3>
            <p className="text-gray-600">
              Managed by experienced fund managers who make strategic investment decisions to maximize returns
              while maintaining appropriate risk levels.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Market Influence</h3>
            <p className="text-gray-600">
              As major institutional investors, pension funds significantly influence market trends
              and corporate governance practices.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Tax Benefits</h3>
            <p className="text-gray-600">
              Enjoy special tax advantages including capital gains tax exemption and tax-deferred
              or tax-exempt investment earnings.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PensionPage;
