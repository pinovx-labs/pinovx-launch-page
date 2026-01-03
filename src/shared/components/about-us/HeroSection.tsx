// components/about/AnimatedSection.tsx
"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { fadeInScale, fadeInUp, slideInBottom, staggerContainer } from "@/utils/animation";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  variants?: any;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  className = "",
  variants = fadeInUp 
  }) => (
  <motion.div 
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={variants}
  >
    {children}
  </motion.div>
);


export const HeroSection: React.FC = () => (
  <AnimatedSection className="text-center mb-12">
    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#19461D]">
      About PinovX
    </h1>
    <p className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-[#19461D] to-[#02C112] bg-clip-text text-transparent">
      Proven in the Network of Value
    </p>
  </AnimatedSection>
);


export const OriginStory: React.FC = () => (
  <motion.div 
    className="prose max-w-none"
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
  >
    <motion.div className="mb-8" variants={fadeInUp}>
      <p className="text-lg leading-relaxed mb-4">
        <span className="font-bold text-[#19461D]">PinovX</span> — short for Pinov eXpress — was born from real-world experience with the challenges of accessing and moving value across financial systems. In situations where funds needed to be converted or accessed quickly, the process was often fragmented, delayed, or overly dependent on intermediaries.
      </p>
      <p className="text-lg leading-relaxed mb-6">
        That experience shaped a simple belief: moving value should be as direct and transparent as possible — without requiring users to give up control of their assets.
      </p>
    </motion.div>
    
    <motion.div 
      className="bg-gradient-to-r from-[#19461D]/5 to-[#02C112]/5 rounded-xl p-6 mb-8 border-l-4 border-[#02C112]"
      variants={fadeInScale}
    >
      <p className="text-lg leading-relaxed">
        PinovX is a registered Money Services Business and Digital Currency Exchange that enables individuals and businesses to buy and sell cryptocurrency using local currency, send compliant fiat remittances, and move value across digital and traditional rails — while retaining ownership through <span className="font-semibold text-[#19461D]">non-custodial wallet settlement</span>.
      </p>
    </motion.div>
    
    <motion.p className="text-lg leading-relaxed mb-8" variants={fadeInUp}>
      Rather than holding customer assets, PinovX operates a broker-style execution and settlement model, with digital assets delivered directly to the user's own wallet. This approach reflects the lessons learned from real-world barriers to financial access and conversion — and informs our mission to make value movement simpler, clearer, and more reliable wherever users operate.
    </motion.p>
  </motion.div>
);


export const MissionSection: React.FC = () => (
  <motion.div className="mb-12" variants={fadeInUp}>
    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#19461D]">
      Powering Payments With Purpose
    </h2>
    <p className="text-lg leading-relaxed mb-4">
      PinovX bridges traditional finance and decentralized networks, helping users convert, move, and settle value with clarity and confidence. The platform is built around predictable settlement flows, compliance-aligned execution, and user ownership, instead of speculation-driven trading.
    </p>
    <motion.div 
      className="bg-gray-50 rounded-lg p-5 border border-gray-200 mt-4"
      variants={fadeInScale}
    >
      <p className="text-base italic text-gray-700">
        <span className="font-semibold text-[#19461D]">Note:</span> Although PinovX itself is a non-custodial, broker-style platform, elements of the broader Pinov ecosystem — including certain associated digital assets — are listed or may be listed on independent, third-party exchanges from time to time. These listings are separate from the PinovX service model and do not change our focus on user-controlled asset delivery and non-custodial settlement.
      </p>
    </motion.div>
  </motion.div>
);


interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <motion.div 
    className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#02C112] hover:shadow-lg transition-all duration-300"
    variants={fadeInScale}
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
  >
    <div className="w-12 h-12 bg-gradient-to-br from-[#19461D] to-[#02C112] rounded-full flex items-center justify-center mb-4">
      <span className="text-white text-xl">{icon}</span>
    </div>
    <h3 className="text-xl font-semibold mb-2 text-[#19461D]">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);


const features = [
  {
    icon: "💱",
    title: "Crypto with Local Currency",
    description: "Buy and sell crypto using local currency"
  },
  {
    icon: "🔐",
    title: "Non-Custodial Model",
    description: "Assets remain in the user's own wallet"
  },
  {
    icon: "🌍",
    title: "Global Fiat Remittances",
    description: "Compliant and secure fiat remittance capabilities"
  },
  {
    icon: "🧾",
    title: "KYC-Aligned Onboarding",
    description: "For individuals and businesses"
  },
  {
    icon: "🛡",
    title: "Transparent Broker Execution",
    description: "With transparency and settlement clarity"
  },
  {
    icon: "⚡",
    title: "Confidence-First Design",
    description: "Value movement designed for confidence, not speculation"
  }
];

export const FeaturesSection: React.FC = () => (
  <div className="border-t border-b border-gray-200 py-10 my-10">
    <motion.h2 
      className="text-2xl md:text-3xl font-bold mb-8 text-center text-[#19461D]"
      variants={fadeInUp}
    >
      What We Offer
    </motion.h2>
    
    <motion.div 
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </motion.div>
  </div>
);


export const VisionSection: React.FC = () => (
  <motion.div className="mb-10" variants={fadeInUp}>
    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#19461D]">
      Our Vision
    </h2>
    <motion.div 
      className="bg-gradient-to-r from-[#19461D] to-[#02C112] rounded-xl p-8 text-white"
      variants={fadeInScale}
      whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
    >
      <p className="text-xl leading-relaxed text-center font-medium">
        To build a financial environment where value moves with confidence, flexibility, and user ownership — across currencies, networks, and payment systems.
      </p>
    </motion.div>
  </motion.div>
);


const keyPoints = [
  "User-controlled asset delivery",
  "Broker-style execution",
  "Predictable settlement flows",
  "Compliance-aligned operations"
];

export const DifferenceSection: React.FC = () => (
  <motion.div 
    className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl overflow-hidden border border-gray-200"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={slideInBottom}
  >
    <div className="p-8 md:p-10 lg:p-12">
      <motion.h2 
        className="text-2xl md:text-3xl font-bold mb-8 text-center text-[#19461D]"
        variants={fadeInUp}
      >
        Our Difference
      </motion.h2>
      
      <motion.div 
        className="flex flex-col md:flex-row items-center gap-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div className="md:w-1/3" variants={fadeInScale}>
          <div className="bg-gradient-to-br from-[#19461D] to-[#02C112] rounded-2xl p-8 text-white text-center shadow-lg">
            <div className="text-4xl mb-4">🚫</div>
            <h3 className="text-2xl font-bold mb-2">Not a Trading Marketplace</h3>
            <p className="opacity-90">Not a custodial exchange</p>
          </div>
        </motion.div>
        
        <motion.div className="md:w-2/3" variants={fadeInUp}>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-start mb-4">
              <div className="w-10 h-10 bg-[#02C112]/20 rounded-full flex items-center justify-center mr-4 mt-1">
                <span className="text-[#19461D] text-xl">→</span>
              </div>
              <p className="text-lg leading-relaxed">
                <span className="font-bold text-[#19461D]">PinovX is a settlement-driven, non-custodial value access platform</span> — created from real-world experience and built for people and businesses who want control, clarity, and trust when moving value across financial networks.
              </p>
            </div>
            
            <motion.div 
              className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
              variants={staggerContainer}
            >
              {keyPoints.map((point, index) => (
                <motion.div key={index} className="flex items-center" variants={fadeInScale}>
                  <div className="w-6 h-6 rounded-full bg-[#02C112] flex items-center justify-center mr-3">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <span className="text-gray-700">{point}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </motion.div>
);


export const CallToAction: React.FC = () => (
  <motion.div 
    className="mt-12 text-center"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    variants={fadeInUp}
  >
    <motion.div 
      className="inline-block bg-gradient-to-r from-[#19461D] to-[#02C112] text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 20px 25px -5px rgba(25, 70, 29, 0.3)"
      }}
      whileTap={{ scale: 0.98 }}
    >
      Experience the PinovX Difference
    </motion.div>
    <p className="text-gray-600 mt-4">
      Join a financial platform built on real-world experience and user-first principles
    </p>
  </motion.div>
);
