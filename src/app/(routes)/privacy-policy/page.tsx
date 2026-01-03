



"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import { InformationCollection, InformationUsage, Introduction, LegalBasis, PolicyHeader } from "@/shared/components/privacy-policy/PolicyHeader";
import { BackToTop, TableOfContents } from "@/shared/components/privacy-policy/SectionBadge";
import { sections } from "../../../../public/assets/data/privacy-policy";
import { DataProtection, DataRetention, InformationSharing, InternationalTransfers, PrivacyRights } from "@/shared/components/privacy-policy/DataProtection";
import { ChildrensPrivacy, ContactInfo, CookiesTracking, MarketingCommunications, PolicyChanges, ThirdPartyLinks } from "@/shared/components/privacy-policy/CookiesTracking";
import { fadeInUp } from "@/utils/animation";


const PrivacyPolicyPage = () => {
  const [showTOC, setShowTOC] = useState(false);

  return (
    <div id="privacy-policy" className="min-h-screen mt-14 bg-gradient-to-b from-gray-50 to-white text-gray-900 py-12 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32">
      <div className="max-w-6xl mx-auto">
        <PolicyHeader />
        
        {/* TOC Toggle Button - Mobile */}
        <button
          onClick={() => setShowTOC(!showTOC)}
          className="md:hidden mb-8 w-full bg-white border border-gray-300 rounded-xl py-3 px-4 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow"
        >
          <span className="font-semibold text-[#19461D]">Table of Contents</span>
          <span className="text-xl">{showTOC ? "▲" : "▼"}</span>
        </button>

        {/* TOC - Desktop Sidebar / Mobile Dropdown */}
        <TableOfContents sections={sections} showMobile={showTOC} />

        <Introduction />
        <InformationCollection />
        <InformationUsage />
        <LegalBasis />
        <DataProtection />
        <InformationSharing />
        <InternationalTransfers />
        <PrivacyRights />
        <DataRetention />
        <CookiesTracking />
        <ChildrensPrivacy />
        <MarketingCommunications />
        <ThirdPartyLinks />
        <PolicyChanges />
        <ContactInfo />

        {/* Footer */}
        <motion.div 
          className="mt-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
        >
          <div className="inline-block bg-gradient-to-r from-[#19461D] to-[#02C112] text-white font-semibold py-3 px-8 rounded-full shadow-lg">
            Last Updated: January 2, 2026
          </div>
          <p className="text-gray-600 mt-4">
            This Privacy Policy is regularly reviewed and updated to ensure compliance with evolving regulations.
          </p>
        </motion.div>
      </div>

      <BackToTop />
    </div>
  );
};

export default PrivacyPolicyPage;

