"use client";
import { downQuote, testimonialImg, topQuote } from "@/utils/externalMedia";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Rating } from "react-simple-star-rating";
import { fadeInUp } from "@/utils/animation";

interface testimonialProps {
  testimony: string;
  name: string;
  address: string;
  imgSrc: string;
  rating: number;
}

const TestimonyCard = ({
  testimony,
  name,
  address,
  imgSrc,
  rating,
}: testimonialProps) => {
  return (
    <div className="flex flex-col gap-[30px]  ">
      <motion.div
        className="relative  font-inter p-6 font-medium text-[16px] md:text-[21px]  text-black   leading-[47px] "
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        {testimony}

        <Image
          src={topQuote}
          alt="quote"
          width={27}
          height={24}
          className="absolute top-0 left-0"
        />
        <Image
          src={downQuote}
          alt="quote"
          width={27}
          height={24}
          className="absolute bottom-1 right-4 "
        />
      </motion.div>
      <motion.div
        className="flex flex-col md:flex-row justify-between items-start md:items-end  "
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2 }}
      >
        <div className="flex gap-5 items-start md:items-end   w-full  h-auto  ">
          <div className=" py-3 md:py-0 ">
            {" "}
            <Image src={imgSrc} alt="quote" width={113} height={112} />
          </div>

          <div className="flex flex-col gap-1 md:gap-3  items-start justify-center">
            <p className="font-inter font-medium md:font-semibold text-[21px]">
              {name}
            </p>
            <p className="font-inter font-medium md:font-semibold text-[21px]">
              {address}
            </p>
          </div>
        </div>
        <div className="inline-flex justify-center  w-full md:w-auto md:justify-end items-center  -mt-10 md:mt-0 ">
          <Rating
            initialValue={rating}
            readonly
            size={24}
            fillColor="#000000"
            emptyColor="#E5E7EB"
            SVGstyle={{ display: "inline" }}
            className="flex! flex-row!"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default TestimonyCard;
