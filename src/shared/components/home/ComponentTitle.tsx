"use client";

import { fadeInUp } from "@/utils/animation";
import { motion } from "framer-motion";
import React from "react";

interface textProps {
  text: string;
  className?:string
}

const ComponentTitle = ({ text, className }: textProps) => {
  return (
    <motion.h2
      variants={fadeInUp}
      className={`font-semibold uppercase font-geist text-lg md:text-xl text-[#4EDD5A]    ${className}`
 }   >
      {text}
    </motion.h2>
  );
};

export default ComponentTitle;
