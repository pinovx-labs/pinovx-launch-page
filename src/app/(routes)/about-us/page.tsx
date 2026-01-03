




// pages/about/About.tsx (Main Component)
"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { slideInBottom, staggerContainer } from "@/utils/animation";
import { CallToAction, DifferenceSection, FeaturesSection, HeroSection, MissionSection, OriginStory, VisionSection } from "@/shared/components/about-us/HeroSection";

const About: React.FC = () => {
  return (
    <div 
      id="about-us" 
      className="min-h-screen mt-14 bg-gradient-to-b from-gray-50 to-white text-gray-900 py-12 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32"
    >
      <div className="max-w-6xl mx-auto">
        <HeroSection />

        {/* Main Content Card */}
        <motion.div 
          className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl overflow-hidden mb-12 border border-gray-200"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={slideInBottom}
        >
          <div className="p-8 md:p-10 lg:p-12">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <OriginStory />
              <MissionSection />
              <FeaturesSection />
              <VisionSection />
            </motion.div>
          </div>
        </motion.div>

        <DifferenceSection />
        <CallToAction />
      </div>
    </div>
  );
};

export default About;