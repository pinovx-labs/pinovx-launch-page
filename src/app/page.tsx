import Difference from "@/shared/components/home/different";
import Faqs from "@/shared/components/home/faqs";
import TestimonialsSection from "@/shared/components/home/testimonials/Testimonials";
import React from "react";

const page = () => {
  return (
    <div className="">
      <p className="font-montserrat text-4xl ">Montserrat Inter Heading</p>

      <p className="font-inter text-4xl"> Mon U Inter body G geist text</p>

      <p className="font-geist text-4xl">Mon Geist UI inter g text</p>
      <Difference/>
      <Faqs />
      <TestimonialsSection/>
    </div>
  );
};

export default page;
