// FILE: components/aml-policy/sections/RegulatoryCompliance.tsx
import React from "react";
import { motion } from "framer-motion";
import { regulatoryBodies, riskBasedApproach } from "../../../../public/assets/data/aml-policy";
import InfoBox, { RegulatoryCard, RiskCard } from "./RegulatoryCard";
import { fadeInScale, staggerContainer } from "@/utils/animation";
import ComponentTitle from "../home/ComponentTitle";

export const RegulatoryCompliance: React.FC = () => (
  <motion.section 
    className="mb-16"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={staggerContainer}
  >
    <ComponentTitle text="Regulatory Compliance" />
    
    <motion.div 
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={staggerContainer}
    >
      {regulatoryBodies.map((body:any, idx:any) => (
        <RegulatoryCard key={idx} {...body} />
      ))}
    </motion.div>
    
    <motion.div className="mt-8" variants={fadeInScale}>
      <InfoBox>
        <p className="text-center font-medium text-[#19461D]">
          Where regulatory expectations differ across jurisdictions, Pinov applies the stricter standard.
        </p>
      </InfoBox>
    </motion.div>
  </motion.section>
);


export const RiskBasedApproach: React.FC = () => (
  <motion.section 
    className="mb-16"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={staggerContainer}
  >
    <ComponentTitle text="Risk-Based Approach" className="my-4" />
    
    <motion.div 
      className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-8 border border-gray-200"
      variants={fadeInScale}
    >
      <p className="text-lg text-center mb-8 text-gray-700">
        Pinov uses a comprehensive risk-based AML/CTF program to identify, assess, and mitigate financial crime risks.
      </p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {riskBasedApproach.map((item, idx) => (
          <RiskCard key={idx} {...item} />
        ))}
      </div>
    </motion.div>
  </motion.section>
);

