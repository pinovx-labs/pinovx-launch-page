"use client"


import { bitcoinIcon, userIcon } from "@/utils/externalMedia";
import Image from "next/image";
import React from "react";

import { motion } from "framer-motion";
import { fadeInUp, fadeInScale, staggerContainer } from "@/utils/animation";

const FirstRow = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-col md:flex-row w-full gap-7 items-center md:items-start   "
    >
      <motion.div
        variants={fadeInScale}
        className="flex flex-col gap-5 rounded-2xl p-7 bg-[#F7F4ED] w-[370px]   md:w-6/12"
      >
        <motion.div
          variants={fadeInScale}
          className="
              w-[60px] h-[60px] bg-[#19451D] 
              flex items-center justify-center rounded-lg
              transition-all duration-300
              group-hover:bg-[#28D536] 
              group-focus:bg-[#28D536]
            "
        >
          <Image
            src={userIcon}
            alt={` icon`}
            width={30}
            height={3}
            className="transition-transform duration-300 group-hover:scale-110 group-focus:scale-110"
          />
        </motion.div>

        <motion.p
          variants={fadeInUp}
          className="font-geist font-semibold text-xl md:text-[35px]  leading-[65px] my-7  text-black "
        >
          Verify Id
        </motion.p>

        <motion.span
          variants={fadeInUp}
          className="font-inter text-xl leading-[35px] max-w-[378px] "
        >
          Automated secure system to verify your identity.
        </motion.span>
      </motion.div>

      <motion.div
        variants={fadeInScale}
        className="flex flex-col gap-5 rounded-2xl p-7 bg-[#F2FDF3] w-[370px]   md:w-6/12"
      >
        <motion.div
          variants={fadeInScale}
          className="
              w-[60px] h-[60px] bg-[#19451D] 
              flex items-center justify-center rounded-lg
              transition-all duration-300
              group-hover:bg-[#28D536] 
              group-focus:bg-[#28D536]
            "
        >
          <Image
            src={bitcoinIcon}
            alt={` icon`}
            width={30}
            height={3}
            className="transition-transform duration-300 group-hover:scale-110 group-focus:scale-110"
          />
        </motion.div>

        <motion.p
          variants={fadeInUp}
          className="font-geist font-semibold text-xl md:text-[35px]  leading-[65px] my-7 text-black "
        >
          Request A Trade{" "}
        </motion.p>

        <motion.span
          variants={fadeInUp}
          className="font-inter text-xl leading-[35px] max-w-[434px] "
        >
          Tell us what you want to buy or sell, and we’ll provide a quote.{" "}
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export default FirstRow;
