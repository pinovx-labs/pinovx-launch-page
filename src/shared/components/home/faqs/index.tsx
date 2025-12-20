import React from "react";
import Button from "../../button/Button";
import FaqAccordion from "./FaqsAccordion";
import { faqs } from "../../../../../public/assets/data/faqs";

const Faqs = () => {
  return (
    <main className="w-full mt-10  border border-yellow-500 ">
      <section className="container mx-auto px-4 ">
        <div className="w-full flex flex-col md:flex-row  ">
          <div className="w-full md:w-4/12 flex-cols  gap-6">
            <h2 className="font-geist font-semibold text-[50px] text-[#000000] max-width-[449px] ">
              Frequently asked questions
            </h2>
            <h5 className="font-geist font-medium text-[26px] text-[#000000] max-width-[369px] mt-8 ">
              More Questions? We can help
            </h5>
            <Button text="Contact Us" font="montserrat" className="mt-4" />
          </div>

          <div className="w-full md:w-8/12">
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Faqs;
