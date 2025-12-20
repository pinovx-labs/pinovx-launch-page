import { bitcoinIcon, userIcon } from "@/utils/externalMedia";
import Image from "next/image";
import React from "react";

const FirstRow = () => {
  return (
    <div className="flex flex-col md:flex-row w-full gap-7 items-center md:items-start ">
      <div className="flex flex-col gap-5 rounded-2xl p-7 bg-[#F7F4ED] w-[370px]   md:w-6/12">
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

        <p className="font-geist font-semibold text-xl md:text-[35px]  leading-[65px] my-7  text-black ">
          Verify Id
        </p>

        <span className="font-inter text-xl leading-[35px] max-w-[378px] ">
          Automated secure system to verify your identity.
        </span>
      </div>
      <div className="flex flex-col gap-5 rounded-2xl p-7 bg-[#F2FDF3] w-[370px]   md:w-6/12">
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
            src={bitcoinIcon}
            alt={` icon`}
            width={30}
            height={3}
            className="transition-transform duration-300 group-hover:scale-110 group-focus:scale-110"
          />
        </div>

        <p className="font-geist font-semibold text-xl md:text-[35px]  leading-[65px] my-7 text-black ">
          Request A Trade{" "}
        </p>

        <span className="font-inter text-xl leading-[35px] max-w-[434px] ">
          Tell us what you want to buy or sell, and we’ll provide a quote.{" "}
        </span>
      </div>
    </div>
  );
};

export default FirstRow;
