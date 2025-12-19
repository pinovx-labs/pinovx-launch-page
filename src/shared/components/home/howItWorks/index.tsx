import React from "react";
import ComponentTitle from "../ComponentTitle";
import ComponentHeading from "../ComponentHeading";
import Image from "next/image";
import { userIcon } from "@/utils/externalMedia";

const HowItWorks = () => {
  return (
    <main className="w-full">
      <section className="container  mx-auto  px-4 ">
        <div className="flex flex-col gap-5  items-center justify-center ">
          <ComponentTitle text="Process" />
          <ComponentHeading text="How does It Work" />
        </div>

        <div className="flex w-full gap-5">
          <div className="flex flex-col gap-5 rounded-2xl p-7 bg-[#F7F4ED] w-[522px]   md:w-6/12">
            <div
              className="
              w-[60px] h-[60px] bg-[#19451D] 
              flex items-center justify-center rounded-lg
              transition-all duration-300
              group-hover:bg-[#28D536] 
              group-focus:bg-[#28D536]
            "
            >
              <Image
                src={userIcon}
                alt={` icon`}
                width={30}
                height={3}
                className="transition-transform duration-300 group-hover:scale-110 group-focus:scale-110"
              />
            </div>

            <p className="font-geist font-semibold text-xl md:text-[35px]  leading-[65px]  text-black ">
              Verify Id
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HowItWorks;
