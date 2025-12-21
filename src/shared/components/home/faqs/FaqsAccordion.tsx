
"use client"

"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react"; // or your own icons
import { addFaqs, removeFaqs } from "@/utils/externalMedia";
import Image from "next/image";
import { fadeInUp } from "@/utils/animation";

type Faq = {
  question: string;
  answer: string;
};

type Props = {
  items: Faq[];
};

const FaqAccordion = ({ items }: Props) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="flex flex-col gap-4">
      {items.map((faq, index) => {
        const isOpen = activeIndex === index;
        return (
          <motion.div
            key={index}
            className="bg-[#19451D] rounded-[15px] px-6 py-[15px] text-white"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.1 }}
          >
            {/* Question */}
            <div
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between text-left"
            >
              <h4 className="font-inter font-semibold text-xl ">{faq.question}</h4>
              <Image
                src={isOpen ? removeFaqs : addFaqs}
                alt="faqs "
                width={24}
                height={24}
              />
            </div>
            {/* Answer */}
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr] mt-3" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p
                  className={`overflow-hidden transition-all text-white  duration-900 ease-in-out font-inter font-medium text-[16px]  ${
                    isOpen ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
                  }`}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default FaqAccordion;