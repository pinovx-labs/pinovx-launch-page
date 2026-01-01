
"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, fadeInScale } from "@/utils/animation";

interface CardProps {
  imgSrc: string;
  text: string;
  heading: string;
  bgColor:string
}

const Card = ({ imgSrc, text, heading, bgColor }: CardProps) => {
  return (
    <motion.div
      variants={fadeInScale}
      className={` h-[236px]
        group flex flex-col w-[370px] p-7 gap-5 rounded-2xl 
        bg-[${bgColor}] cursor-pointer 
        transition-all duration-300 ease-in-out
        hover:bg-[#19451D] 
        focus:bg-[#19451D] focus:outline-none focus:ring-2 focus:ring-[#28D536] focus:ring-offset-2
        transform hover:scale-[1.02] hover:shadow-xl
        m-1
      `}
      tabIndex={0}
      role="button"
      aria-label={`${heading} card`}
    >
      {/* Icon Container */}
      <motion.div
        variants={fadeInScale}
        className="
          w-[60px] h-[60px] bg-[#28D536] 
          flex items-center justify-center rounded-lg
          transition-all duration-300
          group-hover:bg-[#28D536] 
          group-focus:bg-[#28D536]
        "
      >
        <Image
          src={imgSrc}
          alt={`${heading} icon`}
          width={34}
          height={34}
          className="transition-transform duration-300 group-hover:scale-110 group-focus:scale-110"
        />
      </motion.div>

      {/* Text Content */}
      <div className="flex flex-col gap-3">
        <motion.p
          variants={fadeInUp}
          className="
            font-inter  mb-8 font-bold text-xl text-white
            transition-colors duration-300
            group-hover:text-white 
            group-focus:text-white
          "
        >
          {heading}
        </motion.p>

        <motion.p
          variants={fadeInUp}
          className="
            font-inter font-medium text-[16px] text-white
            transition-colors duration-300
            group-hover:text-white 
            group-focus:text-white
          "
        >
          {text}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Card;
