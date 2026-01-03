// FILE: components/aml-policy/sections/HeroHeader.tsx
import React from "react";
import { motion } from "framer-motion";
import { fadeInScale, fadeInUp, slideInBottom } from "@/utils/animation";
import { BulletList } from "./RegulatoryCard";
import { pinovOperations } from "../../../../public/assets/data/aml-policy";

export const HeroHeader: React.FC = () => (
  <motion.div 
    className="text-center mb-16"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={fadeInUp}
  >
    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#19461D]">
      AML / CTF Policy
    </h1>
    <div className="bg-gradient-to-r from-[#19461D] to-[#02C112] h-1 w-24 mx-auto mb-6"></div>
    <p className="text-xl md:text-2xl font-semibold text-gray-700">
      Commitment to Financial Integrity & Regulatory Compliance
    </p>
  </motion.div>
);



export const Introduction: React.FC = () => (
  <motion.section 
    className="mb-16"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={slideInBottom}
  >
    <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl p-8 md:p-10 border border-gray-200">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <motion.div 
          className="lg:w-1/3"
          variants={fadeInScale}
        >
          <div className="bg-gradient-to-br from-[#19461D] to-[#02C112] rounded-2xl p-8 text-white text-center shadow-lg">
            <div className="text-5xl mb-4" role="img" aria-label="shield">🛡️</div>
            <h3 className="text-2xl font-bold mb-2">Our Commitment</h3>
            <p className="opacity-90">Highest standards of integrity and compliance</p>
          </div>
        </motion.div>
        
        <motion.div 
          className="lg:w-2/3"
          variants={fadeInUp}
        >
          <p className="text-lg leading-relaxed mb-4">
            Pinov is committed to maintaining the highest standards of integrity, transparency, and regulatory compliance. We actively work to prevent money laundering, terrorist financing, sanctions evasion, fraud, and other financial crimes across all jurisdictions in which we operate.
          </p>
          
          <div className="bg-[#19461D]/5 rounded-xl p-5 mt-4">
            <h3 className="font-bold text-lg text-[#19461D] mb-3">Pinov operates as:</h3>
            <BulletList items={pinovOperations} />
          </div>
          
          <p className="text-lg leading-relaxed mt-4">
            Our compliance framework is built on internationally recognized AML/CTF standards and regulatory requirements.
          </p>
        </motion.div>
      </div>
    </div>
  </motion.section>
);

