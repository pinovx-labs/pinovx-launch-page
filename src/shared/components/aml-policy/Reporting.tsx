// FILE: components/aml-policy/sections/ReportingCooperation.tsx
import React from "react";
import { motion } from "framer-motion";

import { fadeInScale, slideInBottom, staggerContainer } from "@/utils/animation";
import { cooperationEntities, improvementPillars, privacyControls, reportingAuthorities, vendorDueDiligence } from "../../../../public/assets/data/aml-policy";
import InfoBox, { AuthorityCard, BulletList, ControlItem } from "./RegulatoryCard";
import ComponentTitle from "../home/ComponentTitle";

export const ReportingCooperation: React.FC = () => (
  <motion.section 
    className="mb-16"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={staggerContainer}
  >
    <ComponentTitle className="my-4" text="Reporting & Cooperation with Authorities" />
    
    <div className="flex flex-col lg:flex-row gap-8">
      <motion.div 
        className="lg:w-2/3"
        variants={fadeInScale}
      >
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
          <p className="text-lg leading-relaxed mb-6">
            Where required by law, Pinov reports suspicious or legally notifiable activity to the appropriate authorities.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {reportingAuthorities.map((authority:any, idx:any) => (
              <AuthorityCard key={idx} {...authority} />
            ))}
          </div>
          
          <InfoBox variant="info">
            <p className="text-center font-medium text-[#19461D]">
              Pinov does not disclose the existence of such reports to customers or third parties.
            </p>
          </InfoBox>
        </div>
      </motion.div>
      
      <motion.div 
        className="lg:w-1/3"
        variants={fadeInScale}
      >
        <div className="bg-gradient-to-br from-[#19461D] to-[#02C112] rounded-2xl p-8 text-white h-full flex flex-col justify-center">
          <div className="text-4xl mb-4" role="img" aria-label="scales">⚖️</div>
          <h3 className="text-2xl font-bold mb-4">Legal Compliance</h3>
          <p className="mb-4">
            In addition to financial intelligence units, Pinov cooperates with:
          </p>
          <ul className="space-y-2">
            {cooperationEntities.map((entity, idx) => (
              <li key={idx} className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></div>
                <span>{entity}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  </motion.section>
);

export const ThirdPartyPrivacy: React.FC = () => (
  <motion.section 
    className="mb-16"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={staggerContainer}
  >
    <div className="grid md:grid-cols-2 gap-8">
      {/* Third-Party Compliance */}
      <motion.div 
        variants={fadeInScale}
        whileHover={{ y: -5 }}
      >
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200 h-full">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-[#19461D] to-[#02C112] rounded-full flex items-center justify-center mr-4">
              <span className="text-white text-xl" role="img" aria-label="handshake">🤝</span>
            </div>
            <h2 className="text-2xl font-bold text-[#19461D]">Third-Party & Partner Compliance</h2>
          </div>
          
          <p className="text-lg leading-relaxed mb-6">
            All partners, agents, and service providers engaged by Pinov are expected to meet appropriate AML/CTF and sanctions-compliance standards.
          </p>
          
          <InfoBox>
            <h3 className="font-semibold text-[#19461D] mb-3">Due Diligence Process</h3>
            <BulletList items={vendorDueDiligence} />
          </InfoBox>
        </div>
      </motion.div>
      
      {/* Privacy & Data Protection */}
      <motion.div 
        variants={fadeInScale}
        whileHover={{ y: -5 }}
      >
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200 h-full">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-[#19461D] to-[#02C112] rounded-full flex items-center justify-center mr-4">
              <span className="text-white text-xl" role="img" aria-label="lock">🔒</span>
            </div>
            <h2 className="text-2xl font-bold text-[#19461D]">Privacy & Data Protection</h2>
          </div>
          
          <p className="text-lg leading-relaxed mb-6">
            Customer information is handled in accordance with applicable privacy legislation and Pinov's Privacy Policy.
          </p>
          
          <div className="space-y-4">
            {privacyControls.map((control, idx) => (
              <ControlItem key={idx} {...control} />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </motion.section>
);

export const ContinuousImprovement: React.FC = () => (
  <motion.section 
    className="mb-16"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={staggerContainer}
  >
    <ComponentTitle className="my-4" text="Commitment to Continuous Improvement" />
    
    <motion.div 
      className="bg-gradient-to-r from-[#19461D] to-[#02C112] rounded-2xl shadow-2xl p-10 text-white"
      variants={fadeInScale}
    >
      <div className="grid md:grid-cols-3 gap-8">
        {improvementPillars.map((pillar, idx) => (
          <div key={idx} className="text-center">
            <div className="text-4xl mb-4" role="img" aria-label={pillar.title}>{pillar.icon}</div>
            <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
            <p className="text-sm opacity-90">{pillar.description}</p>
          </div>
        ))}
      </div>
    </motion.div>
  </motion.section>
);

export const ContactSection: React.FC = () => (
  <motion.section 
    className="mb-12"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={slideInBottom}
  >
    <div className="bg-white rounded-2xl shadow-xl p-10 border border-gray-200">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-[#19461D] mb-4">Contact — Compliance Enquiries</h2>
        <p className="text-lg text-gray-600">For compliance-related enquiries, please contact:</p>
      </div>
      
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        <motion.div 
          className="text-center"
          variants={fadeInScale}
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-20 h-20 bg-gradient-to-br from-[#19461D] to-[#02C112] rounded-full flex items-center justify-center mb-4 mx-auto">
            <span className="text-3xl" role="img" aria-label="email">✉️</span>
          </div>
          <h3 className="font-bold text-xl text-[#19461D] mb-2">Email</h3>
          <a 
            href="mailto:compliance@pinovx.com" 
            className="text-lg font-medium text-[#02C112] hover:underline hover:text-[#19461D] transition-colors"
          >
            compliance@pinovx.com
          </a>
        </motion.div>
        
        <div className="hidden lg:block">
          <div className="w-1 h-24 bg-gradient-to-b from-[#19461D] to-[#02C112] mx-auto"></div>
        </div>
        
        <motion.div 
          className="text-center"
          variants={fadeInScale}
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-20 h-20 bg-gradient-to-br from-[#19461D] to-[#02C112] rounded-full flex items-center justify-center mb-4 mx-auto">
            <span className="text-3xl" role="img" aria-label="office">🏢</span>
          </div>
          <h3 className="font-bold text-xl text-[#19461D] mb-2">Compliance Office</h3>
          <p className="text-lg font-medium text-[#19461D]">Pinov — Compliance Office</p>
        </motion.div>
      </div>
      
      <motion.div className="mt-10" variants={fadeInScale}>
        <InfoBox>
          <p className="text-center font-medium text-[#19461D]">
            We are committed to maintaining the highest standards of financial integrity and regulatory compliance across all our operations.
          </p>
        </InfoBox>
      </motion.div>
    </div>
  </motion.section>
);

