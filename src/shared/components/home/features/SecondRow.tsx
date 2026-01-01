"use client";

import { featureBuyCrypto, featurePayment, featureTransaction } from "@/utils/externalMedia";
import { CirclePlus, User2 } from "lucide-react";
import Image from "next/image";
import React from "react";

import { motion } from "framer-motion";
import { fadeInUp, fadeInScale, staggerContainer } from "@/utils/animation";
import { FeatureCard } from "./FeatureCard";

export const SecondRow = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-col md:flex-row  w-full  gap-7 justify-center md:justify-start "
    >
      {/* <div className="w-full md:w-7/12  flex flex-col gap-2 md:gap-8 relative bg-[#F2FDF3] h-[500px] justify-between  ">
        <div className="flex flex-col  mt-2  md:mt-8 items-start justify-between gap-5 p-10 ">
          <motion.div variants={fadeInUp} className="flex flex-col  gap-5  ">
            <h3 className="text-[#02CE13]   font-geist  font-bold  text-2xl md:text-3xl ">
              View Rates{" "}
            </h3>
            <p className="font-inter font-medium  text-lg text-black leading-[#000000] md:text-xl  max-w-[521px] ">
              View live exchange rates and convert between fiat and crypto with
              confidence.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={fadeInUp}
          className="flex gap-5 items-center px-10 "
        >
          <p className="font-inter  text-[#02CE13]  leading-[55px]">
            Learn More
          </p>
          <CirclePlus size={20} color="#02ce13" />
        </motion.div>

        <motion.div
          variants={fadeInScale}
          className="
    relative 
    h-[150px] 
    md:h-[299px]
    md:w-[277px]
    w-full
    flex 
    items-center 
    justify-center 
    md:absolute md:right-0 md:-bottom-8 
    z-10
  "
        >
          <Image
            src={featureTransaction}
            alt="send-money-icon"
            fill
            className="object-contain"
            priority
          />
        </motion.div>
      </div>

      <div
        className="w-full md:w-5/12  flex flex-col gap-8 relative h-[500px] justify-between  "
        style={{
          background: "linear-gradient(to bottom, #02CE13, #01680A)",
        }}
      >
        <div className="flex flex-col mt-2  md:mt-8 items-start justify-between gap-5 p-10 ">
          <motion.div variants={fadeInUp} className="flex flex-col  gap-5  ">
            <h3 className="text-white   font-geist  font-bold  text-2xl md:text-3xl ">
              Crypto Access{" "}
            </h3>
            <p className="font-inter font-medium  text-lg text-white leading-[#000000] md:text-xl  max-w-[446px] ">
              Buy digital assets seamlessly using cards, wallets, or available
              balance.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={fadeInUp}
          className="flex gap-5 items-center px-10 "
        >
          <p className="font-inter  text-white  leading-[55px]">Learn More</p>
          <CirclePlus size={20} color="#ffffff" />
        </motion.div>

        <motion.div
          variants={fadeInScale}
          className="
    relative 
    h-[150px] 
    md:h-[299px]
    md:w-[220px]
    w-full
    flex 
    items-center 
    justify-center 
    md:justify-end
    md:items-end
    md:absolute md:right-0 md:-bottom-8
    z-10 

  "
        >
          <Image
            src={featureBuyCrypto}
            alt="send-money-icon"
            fill
            className="object-contain"
            priority
          />
        </motion.div>
      </div> */}

      <FeatureCard
        className="md:w-7/12"
        title="Smart Rates"
        description="View live exchange rates and convert between fiat and crypto with confidence."
        imageSrc={featureTransaction}
        backgroundColor="bg-[#02C112]"
        titleColor="#ffffff"
        linkText="View Rates"
        linkColor="#ffffff"
      />

      <FeatureCard
        className="md:w-5/12"
        title="Buy Crypto"
        description="On-ramp In seconds. Pay your way - with cards, Interac e-Transfer, PayID."
        imageSrc={featurePayment}
        backgroundColor="bg-[linear-gradient(to_bottom,#02CE13_0%,#02CE13_20%,#019B10_60%,#01680A_100%)]"
        titleColor="#ffffff"
        linkColor="#ffffff"
        linkText="Access OTC"
      />
    </motion.div>
  );
};
