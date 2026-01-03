// FILE: components/privacy-policy/sections/DataProtection.tsx
import React from "react";
import { motion } from "framer-motion";
import { organizationalSafeguards, privacyRights, retentionPeriods, technicalSafeguards } from "../../../../public/assets/data/privacy-policy";
import { fadeInScale, fadeInUp, staggerContainer } from "@/utils/animation";
import { SafeguardItem, SectionBadge } from "./SectionBadge";

export const DataProtection: React.FC = () => (
  <motion.section 
    id="data-protection"
    className="relative mb-16 scroll-mt-24"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={staggerContainer}
  >
    <SectionBadge number={4} />
    <div className="ml-8 md:ml-12">
      <motion.h2 
        className="text-2xl md:text-3xl font-bold mb-8 text-[#19461D] pb-3 border-b border-gray-300"
        variants={fadeInUp}
      >
        How We Protect Your Information
      </motion.h2>
      <motion.div 
        className="grid md:grid-cols-2 gap-8"
        variants={staggerContainer}
      >
        <motion.div 
          className="bg-gradient-to-br from-[#19461D]/5 to-[#02C112]/5 rounded-2xl p-8 border border-[#19461D]/20"
          variants={fadeInScale}
        >
          <h3 className="font-bold text-2xl mb-6 text-[#19461D]">Technical Safeguards</h3>
          <div className="space-y-6">
            {technicalSafeguards.map((item, idx) => (
              <SafeguardItem key={idx} {...item} />
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="bg-gradient-to-br from-[#19461D]/5 to-[#02C112]/5 rounded-2xl p-8 border border-[#19461D]/20"
          variants={fadeInScale}
        >
          <h3 className="font-bold text-2xl mb-6 text-[#19461D]">Organizational Safeguards</h3>
          <div className="space-y-6">
            {organizationalSafeguards.map((item, idx) => (
              <SafeguardItem key={idx} {...item} />
            ))}
          </div>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="mt-8 bg-yellow-50 border border-yellow-200 rounded-xl p-6"
        variants={fadeInUp}
      >
        <p className="text-gray-700">
          <strong>Important:</strong> While we employ robust security measures, no system is completely secure. We cannot guarantee absolute security but remain committed to protecting your information using industry best practices.
        </p>
      </motion.div>
    </div>
  </motion.section>
);



export const InformationSharing: React.FC = () => (
  <motion.section 
    id="information-sharing"
    className="relative mb-16 scroll-mt-24"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={staggerContainer}
  >
    <SectionBadge number={5} />
    <div className="ml-8 md:ml-12">
      <motion.h2 
        className="text-2xl md:text-3xl font-bold mb-8 text-[#19461D] pb-3 border-b border-gray-300"
        variants={fadeInUp}
      >
        Sharing Your Information
      </motion.h2>
      <motion.div 
        className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200"
        variants={fadeInScale}
      >
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
          <p className="text-blue-900 font-semibold">
            We do not sell, rent, or trade your personal information.
          </p>
        </div>
        
        <p className="mb-6 text-lg">We may share your information only in the following circumstances:</p>
        
        <div className="space-y-6">
          <div className="border-l-4 border-[#02C112] pl-6">
            <h3 className="font-bold text-xl text-[#19461D] mb-3">Service Providers & Partners</h3>
            <p className="text-gray-700 mb-3">We engage trusted third-party service providers including:</p>
            <ul className="space-y-2 text-gray-600">
              <li>• Identity verification and KYC/AML screening services</li>
              <li>• Payment processors and banking partners</li>
              <li>• Cloud hosting and data storage providers</li>
              <li>• Customer support and communication platforms</li>
              <li>• Analytics and fraud detection services</li>
            </ul>
            <p className="text-sm text-gray-600 mt-3 italic">
              All service providers are bound by confidentiality agreements and authorized to use your information only as necessary.
            </p>
          </div>

          <div className="border-l-4 border-[#02C112] pl-6">
            <h3 className="font-bold text-xl text-[#19461D] mb-3">Regulatory & Legal Authorities</h3>
            <p className="text-gray-700 mb-3">We may disclose your information to:</p>
            <ul className="space-y-2 text-gray-600">
              <li>• FINTRAC (Financial Transactions and Reports Analysis Centre of Canada)</li>
              <li>• AUSTRAC (Australian Transaction Reports and Analysis Centre)</li>
              <li>• Law enforcement agencies in response to lawful requests</li>
              <li>• Courts and tribunals when required by legal process</li>
              <li>• Other regulatory bodies as required by applicable law</li>
            </ul>
          </div>

          <div className="border-l-4 border-[#02C112] pl-6">
            <h3 className="font-bold text-xl text-[#19461D] mb-3">Business Transfers</h3>
            <p className="text-gray-700">
              In the event of a merger, acquisition, reorganization, or sale of assets, your information may be transferred to the successor entity, subject to the same privacy protections.
            </p>
          </div>

          <div className="border-l-4 border-[#02C112] pl-6">
            <h3 className="font-bold text-xl text-[#19461D] mb-3">With Your Consent</h3>
            <p className="text-gray-700">
              We may share your information with third parties when you provide explicit consent for specific purposes.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </motion.section>
);


export const InternationalTransfers: React.FC = () => (
  <motion.section 
    id="international-transfers"
    className="relative mb-16 scroll-mt-24"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={fadeInUp}
  >
    <SectionBadge number={6} />
    <div className="ml-8 md:ml-12">
      <motion.h2 
        className="text-2xl md:text-3xl font-bold mb-8 text-[#19461D] pb-3 border-b border-gray-300"
        variants={fadeInUp}
      >
        International Data Transfers
      </motion.h2>
      <motion.div 
        className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200"
        variants={fadeInScale}
      >
        <p className="text-lg leading-relaxed mb-6">
          As we operate in multiple jurisdictions (Canada and Australia), your personal information may be transferred to, stored, and processed in countries other than your country of residence.
        </p>
        
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 mb-6">
          <h3 className="font-bold text-xl text-[#19461D] mb-4">We ensure appropriate safeguards are in place, including:</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="w-2 h-2 bg-[#02C112] rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Standard contractual clauses approved by relevant authorities</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-[#02C112] rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Ensuring recipients are subject to privacy laws providing adequate protection</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-[#02C112] rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Implementing additional security measures for cross-border transfers</span>
            </li>
          </ul>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
          <p className="text-gray-700">
            <strong>Note:</strong> Your information may be subject to access by law enforcement and regulatory authorities in accordance with the laws of the jurisdiction where it is stored or processed.
          </p>
        </div>
      </motion.div>
    </div>
  </motion.section>
);

export const PrivacyRights: React.FC = () => (
  <motion.section 
    id="privacy-rights"
    className="relative mb-16 scroll-mt-24"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={staggerContainer}
  >
    <SectionBadge number={7} />
    <div className="ml-8 md:ml-12">
      <motion.h2 
        className="text-2xl md:text-3xl font-bold mb-8 text-[#19461D] pb-3 border-b border-gray-300"
        variants={fadeInUp}
      >
        Your Privacy Rights
      </motion.h2>
      <motion.div 
        className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200"
        variants={fadeInScale}
      >
        <p className="mb-6 text-lg">Depending on your jurisdiction, you have the following rights regarding your personal information:</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {privacyRights.map((right, idx) => (
            <motion.div 
              key={idx}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:border-[#02C112] transition-colors"
              variants={fadeInScale}
              whileHover={{ y: -5 }}
            >
              <div className="text-3xl mb-4" role="img" aria-label={right.title}>{right.icon}</div>
              <h3 className="font-bold text-lg text-[#19461D] mb-2">{right.title}</h3>
              <p className="text-sm text-gray-600">{right.desc}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="bg-gradient-to-r from-[#19461D]/10 to-[#02C112]/10 rounded-xl p-6 border border-[#02C112]/30"
          variants={fadeInScale}
        >
          <p className="text-center text-gray-700">
            To exercise these rights, please contact us at{" "}
            <a href="mailto:compliance@pinovx.com" className="text-[#19461D] font-semibold hover:underline">
              compliance@pinovx.com
            </a>
            . We will respond within the timeframe required by applicable law.
          </p>
          <p className="text-center text-sm text-gray-600 mt-3">
            Please note that certain rights may be limited by legal or regulatory obligations, particularly regarding AML/CTF compliance.
          </p>
        </motion.div>
      </motion.div>
    </div>
  </motion.section>
);

 export const DataRetention: React.FC = () => (
  <motion.section 
    id="data-retention"
    className="relative mb-16 scroll-mt-24"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={staggerContainer}
  >
    <SectionBadge number={8} />
    <div className="ml-8 md:ml-12">
      <motion.h2 
        className="text-2xl md:text-3xl font-bold mb-8 text-[#19461D] pb-3 border-b border-gray-300"
        variants={fadeInUp}
      >
        Data Retention
      </motion.h2>
      <motion.div 
        className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200"
        variants={fadeInScale}
      >
        <p className="mb-6 text-lg">
          We retain your personal information for as long as necessary to:
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {[
            "Provide our services and maintain your account",
            "Comply with legal and regulatory obligations",
            "Resolve disputes and enforce our agreements",
            "Prevent fraud and ensure security"
          ].map((purpose, idx) => (
            <div key={idx} className="flex items-start">
              <div className="w-2 h-2 bg-[#02C112] rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>{purpose}</span>
            </div>
          ))}
        </div>
        
        <h3 className="font-bold text-xl text-[#19461D] mb-4 mt-8">Specific Retention Periods:</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {retentionPeriods.map((item, idx) => (
            <div key={idx} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <p className="font-semibold text-[#19461D]">{item.type}</p>
              <p className="text-sm text-gray-600 mt-1">{item.period}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <p className="text-gray-700">
            After the retention period expires, we securely delete or anonymize your information in accordance with our data disposal policies.
          </p>
        </div>
      </motion.div>
    </div>
  </motion.section>
);

