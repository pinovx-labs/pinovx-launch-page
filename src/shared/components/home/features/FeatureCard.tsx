"use client";
import { CirclePlus } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, fadeInScale } from "@/utils/animation";

interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc: any; // Next.js Image src type
  backgroundColor: string;
  titleColor: string;
  linkColor: string;
  linkText?: string;
  imageWidth?: number;
  imageHeight?: number;
  className?: string;
}

export const FeatureCard = ({
  title,
  description,
  imageSrc,
  backgroundColor,
  titleColor,
  linkColor,
  linkText = "Learn More",

  className = "",
}: FeatureCardProps) => {
  return (
    <div
      className={`w-full md:w-6/12 flex flex-col h-[500px] gap-4 md:gap-8 relative justify-between rounded-lg ${backgroundColor} ${className}`}
    >
      {/* Content Section */}
      <div className="flex flex-col mt-2 md:mt-8 items-start md:justify-between gap-5 p-10">
        <motion.div
          variants={fadeInUp}
          className="flex flex-col gap-2 md:gap-5"
        >
          <h3
            className="font-geist font-bold text-2xl md:text-3xl"
            style={{ color: titleColor }}
          >
            {title}
          </h3>
          <p className="font-inter font-medium text-lg md:text-xl text-white max-w-[521px]">
            {description}
          </p>
        </motion.div>
      </div>

      {/* Learn More Link */}
      <motion.div
        variants={fadeInUp}
        className="flex gap-3 items-center px-10   md:hidden lg:flex
 "
      >
        <p
          className="font-inter text-lg md:text-xl leading-[55px]"
          style={{ color: linkColor }}
        >
          {linkText}
        </p>
        <CirclePlus size={20} style={{ color: linkColor }} />
      </motion.div>

      {/* Image Section */}
      <motion.div
        variants={fadeInScale}
        className="
    relative 
    h-[180px] 
    md:h-60
    lg:h-[299px]
    md:w-[277px]
    w-full
    flex 
    items-center 
    justify-center 
    md:absolute md:right-0 md:bottom-0 
    z-10
  "
      >
        <Image
          src={imageSrc}
          alt={`${title} icon`}
          fill
          className="object-contain"
          priority
        />
      </motion.div>
    </div>
  );
};
