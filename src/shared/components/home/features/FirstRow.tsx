"use client";
import { featureBuyCrypto, featureSendMoney } from "@/utils/externalMedia";
import { CirclePlus } from "lucide-react";
import Image from "next/image";
import React from "react";

import { motion } from "framer-motion";
import { fadeInUp, fadeInScale, staggerContainer } from "@/utils/animation";
import { FeatureCard } from "./FeatureCard";

export const FirstRow = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-col md:flex-row    items-center md:items-start  w-full  gap-7 my-8"
    >
      <FeatureCard
        title="Seamless Onboarding"
        description="Skip the long forms. One-tap identity verification gets you in."
        imageSrc={featureSendMoney}
        backgroundColor="bg-[#19461D]"
        titleColor="#ffffff"
        linkColor="#ffffff"
      />

      <FeatureCard
        title="Crypto to Fiat, Simplified"
        description="Access our broad range of fiat liquidity for seamless settlements."
        imageSrc={featureBuyCrypto}
        backgroundColor="bg-[#02C112]"
        titleColor="#ffffff"
        linkColor="#ffffff"
        linkText="Supported Currencies"
      />
    </motion.div>
  );
};
