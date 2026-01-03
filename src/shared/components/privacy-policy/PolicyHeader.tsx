// FILE: components/privacy-policy/sections/PolicyHeader.tsx
import React from "react";
import { motion } from "framer-motion";
import { InfoCard, SectionBadge, UsageCard } from "./SectionBadge";
import { fadeInScale, fadeInUp, staggerContainer } from "@/utils/animation";
import { infoCategories, usageCategories } from "../../../../public/assets/data/privacy-policy";

export const PolicyHeader: React.FC = () => (
  <motion.div 
    className="bg-gradient-to-r from-[#19461D] to-[#02C112] rounded-2xl shadow-2xl overflow-hidden mb-12"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={fadeInUp}
  >
    <div className="p-8 md:p-10 text-white">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
      <div className="flex flex-wrap gap-4">
        <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
          <p className="text-sm font-semibold">Effective Date: January 2, 2026</p>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
          <p className="text-sm font-semibold">Pinov Inc. & Pinov Pty Ltd</p>
        </div>
      </div>
    </div>
  </motion.div>
);




export const Introduction: React.FC = () => (
  <motion.section 
    id="introduction"
    className="mb-16 scroll-mt-24"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={fadeInUp}
  >
    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-200">
      <div className="border-l-4 border-[#02C112] pl-6">
        <h2 className="text-2xl font-bold mb-6 text-[#19461D]">Introduction</h2>
        <p className="text-lg leading-relaxed mb-4">
          At Pinov Inc, protecting your privacy and ensuring a secure user experience are our top priorities. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you engage with our digital currency exchange services or visit our website or mobile application.
        </p>
        <p className="text-lg leading-relaxed">
          By using our services, you acknowledge that you have read and understood this Privacy Policy and consent to the collection, use, and disclosure of your information as described herein.
        </p>
      </div>
    </div>
  </motion.section>
);



export const InformationCollection: React.FC = () => (
  <motion.section 
    id="information-collection"
    className="relative mb-16 scroll-mt-24"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={staggerContainer}
  >
    <SectionBadge number={1} />
    <div className="ml-8 md:ml-12">
      <motion.h2 
        className="text-2xl md:text-3xl font-bold mb-8 text-[#19461D] pb-3 border-b border-gray-300"
        variants={fadeInUp}
      >
        Information We Collect
      </motion.h2>
      <motion.div 
        className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200"
        variants={fadeInScale}
      >
        <p className="mb-6 text-lg">
          We collect information necessary to provide secure and compliant digital currency exchange services:
        </p>
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
        >
          {infoCategories.map((category, idx) => (
            <InfoCard key={idx} {...category} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  </motion.section>
);



export const InformationUsage: React.FC = () => (
  <motion.section 
    id="information-usage"
    className="relative mb-16 scroll-mt-24"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={staggerContainer}
  >
    <SectionBadge number={2} />
    <div className="ml-8 md:ml-12">
      <motion.h2 
        className="text-2xl md:text-3xl font-bold mb-8 text-[#19461D] pb-3 border-b border-gray-300"
        variants={fadeInUp}
      >
        How We Use Your Information
      </motion.h2>
      <motion.div 
        className="grid md:grid-cols-2 gap-8"
        variants={staggerContainer}
      >
        {usageCategories.map((category, idx) => (
          <UsageCard key={idx} {...category} />
        ))}
      </motion.div>
    </div>
  </motion.section>
);



export const LegalBasis: React.FC = () => {
  const legalBases = [
    {
      title: "Contractual Necessity",
      desc: "To fulfill our obligations under our Terms of Service"
    },
    {
      title: "Legal Obligations",
      desc: "To comply with AML/CTF regulations and other legal requirements"
    },
    {
      title: "Legitimate Interests",
      desc: "To prevent fraud, ensure security, and improve our services"
    },
    {
      title: "Consent",
      desc: "For marketing communications and certain optional services (where applicable)"
    }
  ];

  return (
    <motion.section 
      id="legal-basis"
      className="relative mb-16 scroll-mt-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
    >
      <SectionBadge number={3} />
      <div className="ml-8 md:ml-12">
        <motion.h2 
          className="text-2xl md:text-3xl font-bold mb-8 text-[#19461D] pb-3 border-b border-gray-300"
          variants={fadeInUp}
        >
          Legal Basis for Processing
        </motion.h2>
        <motion.div 
          className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200"
          variants={fadeInScale}
        >
          <p className="mb-6 text-lg">We process your personal information based on:</p>
          <div className="grid md:grid-cols-2 gap-6">
            {legalBases.map((basis, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-bold text-lg text-[#19461D] mb-2">{basis.title}</h3>
                <p className="text-gray-600">{basis.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

