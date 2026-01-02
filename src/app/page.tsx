import Difference from "@/shared/components/home/different";
import Faqs from "@/shared/components/home/faqs";
import Feature from "@/shared/components/home/features/Index";
import HeroSection from "@/shared/components/home/hero/Hero";
import HowItWorks from "@/shared/components/home/howItWorks";
import TestimonialsSection from "@/shared/components/home/testimonials/Testimonials";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <HeroSection />
      <Feature />
      <HowItWorks />
      <Difference />
      <TestimonialsSection />      <Faqs />

    </div>
  );
};

export default page;
