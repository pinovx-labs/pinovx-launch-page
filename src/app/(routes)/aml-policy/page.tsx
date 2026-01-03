

// FILE: components/aml-policy/AMLPolicyPage.tsx
"use client"
import React from "react";
import { motion } from "framer-motion";
import { HeroHeader, Introduction } from "@/shared/components/aml-policy/HeroHeader";
import { RegulatoryCompliance, RiskBasedApproach } from "@/shared/components/aml-policy/RegulatoryCompliance";
import { ContactSection, ContinuousImprovement, ReportingCooperation, ThirdPartyPrivacy } from "@/shared/components/aml-policy/Reporting";
import { fadeInUp } from "@/utils/animation";

const AMLPolicyPage: React.FC = () => {
  return (
    <div id="aml-policy" className="min-h-screen mt-14 bg-gradient-to-b from-gray-50 to-white text-gray-900 py-12 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32">
      <div className="max-w-6xl mx-auto">
        <HeroHeader />
        <Introduction />
        <RegulatoryCompliance />
        <RiskBasedApproach />
        <ReportingCooperation />
        <ThirdPartyPrivacy />
        <ContinuousImprovement />
        <ContactSection />
        
        {/* Footer Note */}
        <motion.div 
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
        >
          <p className="text-gray-600">
            This AML/CTF Policy is reviewed regularly and updated as required by changing regulations and risk assessments.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AMLPolicyPage;