"use client";
import React from "react";
import ComponentTitle from "../ComponentTitle";
import ComponentHeading from "../ComponentHeading";
import { SecondRow } from "./SecondRow";
import { FirstRow } from "./FirstRow";
import { motion } from "framer-motion";
import { slideInBottom, staggerContainer } from "@/utils/animation";

const Feature = () => {
  return (
    <main className="w-full mt-10  ">
      <section className="container  mx-auto  px-4 " id="product" >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col gap-8  items-center justify-center "
        >
          <ComponentTitle text="Features"  className="text-[#4EDD5A]"/>
          <ComponentHeading
            text="Built to Move Money Smarter, Across Borders."
            className="max-w-[851px] text-center  text-[#19461D] "
          />
        </motion.div>

        <div className="flex flex-col gap-5 my-4   ">
          <FirstRow />

          <SecondRow />
        </div>
      </section>
    </main>
  );
};

export default Feature;
