"use client";

import { bitcoinIcon, userIcon } from "@/utils/externalMedia";
import Image from "next/image";
import React from "react";

import { motion } from "framer-motion";
import {  staggerContainer } from "@/utils/animation";
import Card from "./Card";

const FirstRow = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-col md:flex-row w-full gap-7 items-center md:items-start   "
    >
      <Card
        bgColor="#02C112"
        imageSrc={userIcon}
        pText={"Start"}
        spanText="Start session using same PinovX email. You must already be registered on the PinovX app."
        iconBgColor="#19451D"
        hoverIconBgColor="#28D536"
        className=""
      />

      <Card
        bgColor="#19461D"
        imageSrc={bitcoinIcon}
        pText={"Seek"}
        spanText="Toggle conversion engine to achieve your choice of order"
        iconBgColor="#28D536"
        hoverIconBgColor="#19461D"
        className=""
      />
    </motion.div>
  );
};

export default FirstRow;
