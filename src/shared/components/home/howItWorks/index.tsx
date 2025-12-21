"use client";
import React from "react";
import ComponentTitle from "../ComponentTitle";
import ComponentHeading from "../ComponentHeading";
import Image from "next/image";
import { bitcoinIcon, userIcon } from "@/utils/externalMedia";
import FirstRow from "./FirstRow";
import SecondRow from "./SecondRow";
import { staggerContainer } from "@/utils/animation";
import { motion } from "framer-motion";
const HowItWorks = () => {
  return (
    <main className="w-full mt-10   ">
      <section className="container  mx-auto  px-4 " id="process" >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col gap-5  items-center justify-center "
        >
          <ComponentTitle text="Process" />
          <ComponentHeading text="How Does It Work" />
        </motion.div>

        <div className="flex  flex-col gap-5 my-4">
          <FirstRow />

          <SecondRow />
        </div>
      </section>
    </main>
  );
};

export default HowItWorks;
