// components/Card.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, fadeInScale } from "@/utils/animation";
import Button from "../../button/Button";
import clsx from "clsx";

interface CardProps {
  bgColor?: string; // Made optional
  pText: string;
  spanText: string;
  imageSrc?: string | undefined;
  iconBgColor?: string;
  hoverIconBgColor?: string;
  iconWidth?: number;
  iconHeight?: number;
  imageAlt?: string;
  className?: string;
  otcBtn?: boolean;
  showIconContainer?: boolean;
  maxWidth:number
}

const Card = ({
  bgColor,
  imageSrc,
  pText,
  spanText,
  iconBgColor = "",
  hoverIconBgColor = "#28D536",
  iconWidth = 30,
  iconHeight = 30,
  imageAlt = " icon",
  className = "",
  otcBtn = false,
  showIconContainer = true, maxWidth
}: CardProps) => {
  const shouldShowIconContainer = showIconContainer && imageSrc;

  return (
    <motion.div
      variants={fadeInScale}
      className={clsx(
        "flex flex-col gap-5 rounded-2xl p-7 w-[370px] h-[360px] md:w-6/12",
        !className.includes("bg-") && bgColor && `bg-[${bgColor}]`,
        className
      )}
      style={
        bgColor && !bgColor.includes("linear-gradient") && !bgColor.startsWith("bg-")
          ? { backgroundColor: bgColor }
          : undefined
      }
    >
      {shouldShowIconContainer && (
        <motion.div
          variants={fadeInScale}
          className="
            w-[60px] h-[60px] 
            flex items-center justify-center rounded-lg
            transition-all duration-300
            hover:bg-[#28D536] 
            focus:bg-[#28D536] 
          "
          style={
            {
              backgroundColor: iconBgColor,
              "--hover-bg-color": hoverIconBgColor,
            } as React.CSSProperties
          }
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={iconWidth}
            height={iconHeight}
            className="transition-transform duration-300 hover:scale-110 focus:scale-110"
          />
        </motion.div>
      )}

      <motion.p
        variants={fadeInUp}
        className="font-geist font-semibold text-xl md:text-[35px] leading-[65px] my-7 text-white"
      >
        {pText}
      </motion.p>

      <motion.span
        variants={fadeInUp}
        className={`font-inter text-xl leading-[35px] max-w-[${maxWidth}px] text-white `}
      >
        {spanText}
      </motion.span>
      {otcBtn && <Button text="Start OTC" type="button" />}
    </motion.div>
  );
};

export default Card;