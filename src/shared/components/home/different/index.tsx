"use client";
import React from "react";
import Button from "../../button/Button";
import ComponentTitle from "../ComponentTitle";
import ComponentHeading from "../ComponentHeading";
import DifferentCard from "./Differentcard";
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/animation";
const Difference = () => {
  return (
    <main className="w-full mt-10   ">
      <section className="container mx-auto px-4" id="feature">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col md:flex-row justify-between  gap-8 items-start py-5 md:items-end  mb-3   "
        >
          <Button
            text="Learn More"
            type="button"
            font="inter"
            className="order-2 md:order-1"
          />
          <div className="flex flex-col gap-4 w-full md:w-auto items-center justify-center md:items-end md:justify-end   order-1 md:order-2 ">
            <ComponentTitle text="Feature" />
            <ComponentHeading text="Why we are different" />
          </div>
        </motion.div>

        <DifferentCard />
      </section>
    </main>
  );
};

export default Difference;
