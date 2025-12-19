"use client";
import React from "react";
import { testimonials } from "../../../../../public/assets/data/testimonials";
import Image from "next/image";
import { testimonialLeft, testimonialRight } from "@/utils/externalMedia";
import TestimonyCard from "./TestimonyCard"; // Import your card component

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const TestimonialsSection = () => {
  // Create refs for navigation
  const prevRef = React.useRef<HTMLDivElement>(null);
  const nextRef = React.useRef<HTMLDivElement>(null);

  return (
    <main className="w-full my-8 bg-[#F2FDF3]">
      <section className="container mx-auto px-4 bg-[#F2FDF3]">
        <div className="w-full flex flex-col py-8 md:flex-row">
          {/* Left Section with Title and Navigation */}
          <div className="w-full md:w-4/12 flex flex-col justify-between mb-8 md:mb-0">
            <div>
              <p className=" font-semibold text-[#000000] uppercase  mb-4 font-geist text-xl ">
                TESTIMONIALS
              </p>
              <h2 className="md:text-[40px] lg:text-5xl font-bold text-gray-900 leading-tight font-geist text-2xl ">
                What Our Users
                <br />
                Are Saying
              </h2>
            </div>

            <div className="flex gap-4 mt-8">
              <div 
                ref={prevRef}
                className="cursor-pointer hover:opacity-80 transition-opacity"
              >
                <Image 
                  src={testimonialLeft} 
                  alt="Previous testimonial" 
                  width={40} 
                  height={40} 
                />
              </div>
              <div 
                ref={nextRef}
                className="cursor-pointer hover:opacity-80 transition-opacity"
              >
                <Image 
                  src={testimonialRight} 
                  alt="Next testimonial" 
                  width={40} 
                  height={40} 
                />
              </div>
            </div>
          </div>

          {/* Right Section - Swiper Carousel */}
          <div className="w-full md:w-8/12 md:pl-8">
            <Swiper
              // Install Swiper modules
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              pagination={{
                clickable: true,
                bulletClass: 'swiper-pagination-bullet bg-gray-300',
                bulletActiveClass: 'swiper-pagination-bullet-active !bg-black',
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              loop={true}
              onInit={(swiper) => {
                // @ts-ignore
                swiper.params.navigation.prevEl = prevRef.current;
                // @ts-ignore
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <TestimonyCard
                    testimony={testimonial.testimony}
                    name={testimonial.name}
                    address={testimonial.address}
                    imgSrc={testimonial.imgSrc}
                    rating={testimonial.rating}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TestimonialsSection;