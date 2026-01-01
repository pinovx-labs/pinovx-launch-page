
"use client"

import { diffPhoto } from "@/utils/externalMedia";
import Image from "next/image";
import React from "react";
import { different } from "../../../../../public/assets/data/different";
import Card from "./Card";

import { motion } from "framer-motion";
import { fadeInScale, staggerContainer } from "@/utils/animation";
import photo from "../../../../../public/assets/diff-photo.svg"
const DifferentCard = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-full flex flex-col md:flex-row  gap-4  justify-between  "
    >
      <motion.div
        variants={fadeInScale}
        className="w-full md:w-5/12  "
      >
        <Image
          src={photo}
          alt="image"
          width={431}
          height={485}
        />
      </motion.div>

      <div className="w-full md:w-7/12 flex flex-wrap justify-center md:justify-end  ">
        {different.map((item, index) => (
          <Card
            key={index}
            imgSrc={item.imgSrc}
            text={item.text}
            heading={item.heading}
            bgColor={item.bgColor}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default DifferentCard;
