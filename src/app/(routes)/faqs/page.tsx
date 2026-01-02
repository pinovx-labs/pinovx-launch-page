
"use client"

import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/utils/animation";
import { faqs } from "../../../../public/assets/data/faqs";
import FaqAccordion from "@/shared/components/home/faqs/FaqsAccordion";
import Button from "@/shared/components/button/Button";

const Faqs = () => {
  return (
    <main className="w-full mt-24 md:mt-30   ">
      <section className="container mx-auto px-4 "  id="faqs" >
        <motion.div 
          className="w-full flex flex-col md:flex-row gap-7 "
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div 
            className="w-full md:w-4/12 flex-cols  gap-6"
            variants={fadeInUp}
          >
            <h2 className="font-geist font-medium text-[40px] md:font-semibold md:text-[50px] text-[#000000] max-width-[449px] ">
              Frequently asked questions
            </h2>
            <h5 className="font-geist font-medium text-[26px] text-[#000000] max-width-[369px] mt-8 ">
              More Questions? We can help
            </h5>
            <Button text="Contact Us" font="montserrat" className="my-4" />



            
          </motion.div>
          <motion.div 
            className="w-full md:w-8/12"
            variants={fadeInUp}
          >
            <FaqAccordion items={faqs} />
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
};

export default Faqs;