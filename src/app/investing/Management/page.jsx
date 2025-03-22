'use client'

import { useState } from "react"
import { motion } from "framer-motion"
import Link from 'next/link'
import {
  Wallet,
  BarChart3,
  TrendingUp,
  Shield,
  Users,
  LineChart,
  PieChart,
  Scale,
  Target,
  Briefcase
} from "lucide-react"

const wealthManagementServices = [
  {
    icon: <Wallet className="w-8 h-8" />,
    title: "Financial Planning",
    description: "Comprehensive financial planning tailored to your goals",
    features: [
      "Investment Strategy",
      "Retirement Planning",
      "Estate Planning",
      "Tax Planning",
      "Risk Management"
    ]
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Investment Advisory",
    description: "Expert guidance for your investment portfolio",
    features: [
      "Asset Allocation",
      "Portfolio Rebalancing",
      "Market Analysis",
      "Investment Selection",
      "Performance Monitoring"
    ]
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Asset Management",
    description: "Professional management of your investment assets",
    features: [
      "Portfolio Management",
      "Risk Assessment",
      "Regular Reporting",
      "Investment Research",
      "Market Insights"
    ]
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Risk Management",
    description: "Protecting and preserving your wealth",
    features: [
      "Insurance Planning",
      "Risk Assessment",
      "Asset Protection",
      "Succession Planning",
      "Liability Management"
    ]
  }
]

const portfolioManagementServices = [
  {
    icon: <LineChart className="w-8 h-8" />,
    title: "Investment Strategy",
    description: "Developing and implementing investment strategies",
    features: [
      "Asset Allocation",
      "Risk Assessment",
      "Market Analysis",
      "Portfolio Construction",
      "Strategy Implementation"
    ]
  },
  {
    icon: <PieChart className="w-8 h-8" />,
    title: "Portfolio Analysis",
    description: "In-depth analysis of portfolio performance",
    features: [
      "Performance Measurement",
      "Risk Analysis",
      "Attribution Analysis",
      "Benchmark Comparison",
      "Portfolio Optimization"
    ]
  },
  {
    icon: <Scale className="w-8 h-8" />,
    title: "Risk Management",
    description: "Managing and mitigating investment risks",
    features: [
      "Risk Assessment",
      "Diversification Strategy",
      "Hedging Techniques",
      "Risk Monitoring",
      "Stress Testing"
    ]
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Performance Tracking",
    description: "Monitoring and reporting portfolio performance",
    features: [
      "Regular Reporting",
      "Performance Analytics",
      "Goal Tracking",
      "Investment Review",
      "Client Communication"
    ]
  }
]

export default function ManagementPage() {
  const [selectedWealthService, setSelectedWealthService] = useState(0)
  const [selectedPortfolioService, setSelectedPortfolioService] = useState(0)

  return (
    <main className="bg-gradient-to-b from-gray-50 to-white">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-4">
          <div className="text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/investing" className="hover:text-blue-600">Investing</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800">Management</span>
          </div>
        </div>
      </div>

      {/* Wealth Management Section */}
      <section className="min-h-[50vh] flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-grid-black/[0.02] -z-10" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900">
              Wealth Management
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Expert wealth management services tailored to your financial goals and needs.
              We provide comprehensive solutions to protect and grow your wealth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Wealth Management Services Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {wealthManagementServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-xl transition-all duration-300 cursor-pointer
                  ${selectedWealthService === index
                    ? 'bg-blue-50 border-2 border-blue-200 shadow-lg'
                    : 'bg-white border-2 border-gray-100 hover:border-blue-100 hover:shadow-md'
                  }`}
                onClick={() => setSelectedWealthService(index)}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-blue-600">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                      <div className="w-1 h-1 bg-blue-400 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Management Section */}
      <section className="min-h-[50vh] flex items-center justify-center relative overflow-hidden bg-gray-50 pt-20">
        <div className="absolute inset-0 bg-grid-black/[0.02] -z-10" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900">
              Portfolio Management
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Professional portfolio management services to optimize your investment returns
              while managing risk through diversification and strategic asset allocation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Management Services Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {portfolioManagementServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-xl transition-all duration-300 cursor-pointer
                  ${selectedPortfolioService === index
                    ? 'bg-blue-50 border-2 border-blue-200 shadow-lg'
                    : 'bg-white border-2 border-gray-100 hover:border-blue-100 hover:shadow-md'
                  }`}
                onClick={() => setSelectedPortfolioService(index)}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-blue-600">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                      <div className="w-1 h-1 bg-blue-400 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Ready to Start Your Investment Journey?
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Let's discuss how our wealth and portfolio management expertise can help you achieve your financial goals.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Schedule a Consultation
          </motion.button>
        </div>
      </section>
    </main>
  )
}
