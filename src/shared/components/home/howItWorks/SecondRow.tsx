import { bitcoinIcon, checkerIcon, userIcon } from "@/utils/externalMedia";
import Image from "next/image";
import React from "react";
import Button from "../../button/Button";

const SecondRow = () => {
  return (
    <div className="flex w-full gap-5 items-center md:items-start   flex-col md:flex-row ">
      <div className="flex    flex-col gap-5 rounded-2xl p-7 bg-[#F7F4ED] w-[370px]   md:w-7/12">
        <div
          className="
              w-[60px] h-[60px] bg-[#19451D]  mt-10
              flex items-center justify-center rounded-lg
              transition-all duration-300
              group-hover:bg-[#28D536] 
              group-focus:bg-[#28D536]
            "
        >
          <Image
            src={checkerIcon}
            alt={` icon`}
            width={30}
            height={3}
            className="transition-transform duration-300 group-hover:scale-110 group-focus:scale-110"
          />
        </div>

        <p className="font-geist font-semibold text-xl md:text-[35px]  leading-[65px]  text-black ">
          Confirm & Settle{" "}
        </p>

        <span className="font-inter text-xl leading-[35px] max-w-[516px] ">
          Approve the rate, send payment, and receive directly to your wallet.{" "}
        </span>
      </div>
      <div className="flex flex-col gap-5 rounded-2xl p-7 bg-[#19451D] w-[370px]  md:w-5/12">
        
        

        <p className="font-geist font-semibold text-xl md:text-[35px]  leading-[65px]  text-white  mt-10">
          Early Access{" "}
        </p>

        <span className="font-inter text-xl leading-[35px]  max-w-[408px]  text-white ">
          Be among the first to experience seamless money transfer across{" "}
        </span>

        <Button text="Join The Waitlist" type="button" />
      </div>
    </div>
  );
};

export default SecondRow;
