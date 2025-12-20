import Difference from "@/shared/components/home/different";
import Faqs from "@/shared/components/home/faqs";
import Feature from "@/shared/components/home/features/Index";
import HeroSection from "@/shared/components/home/hero/Hero";
import HowItWorks from "@/shared/components/home/howItWorks";
import TestimonialsSection from "@/shared/components/home/testimonials/Testimonials";
import React from "react";

const page = () => {
  return (
    <div className="">
      <HeroSection />
      <Feature />
      <HowItWorks />
      <Difference />
      <Faqs />
      <TestimonialsSection />
    </div>
  );
};

export default page;
