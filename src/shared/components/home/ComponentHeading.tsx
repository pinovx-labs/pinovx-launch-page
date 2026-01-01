"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animation";

interface TextProps {
  text: string;
  className?: string;
}

const ComponentHeading = ({ text, className = "" }: TextProps) => {
  return (
    <motion.h2
      variants={fadeInUp}
      className={`font-bold font-geist text-[30px] md:text-[50px]  text-[#19461D]  ${className}`}
    >
      {text}
    </motion.h2>
  );
};

export default ComponentHeading;
