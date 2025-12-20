import { featureBuyCrypto, featureTransaction } from "@/utils/externalMedia";
import { CirclePlus } from "lucide-react";
import Image from "next/image";
import React from "react";

export const SecondRow = () => {
  return (
    <div className="flex flex-col md:flex-row  w-full  gap-7 justify-center md:justify-start ">
      <div className="w-full md:w-7/12  flex flex-col gap-8 relative bg-[#F2FDF3] h-[500px] justify-between  ">
        <div className="flex flex-col  mt-8 items-start justify-between gap-5 p-10 ">
          <div className="flex flex-col  gap-5  ">
            <h3 className="text-[#02CE13]   font-geist  font-bold  text-2xl md:text-3xl ">
              View Rates{" "}
            </h3>
            <p className="font-inter font-medium  text-lg text-black leading-[#000000] md:text-xl  max-w-[521px] ">
              View live exchange rates and convert between fiat and crypto with
              confidence.
            </p>
          </div>
        </div>

        <div className="flex gap-5 items-center px-10 ">
          <p className="font-inter  text-[#02CE13]  leading-[55px]">
            Learn More
          </p>
          <CirclePlus size={20}   color="#02ce13" />
        </div>

        <div className="absolute right-0 bottom-0 z-10 ">
          <Image
            src={featureTransaction}
            alt="send-money-icon"
            width={364}
            height={310}
          />
        </div>
      </div>

      <div
        className="w-full md:w-5/12  flex flex-col gap-8 relative h-[500px] justify-between  "
        style={{
          background: "linear-gradient(to bottom, #02CE13, #01680A)",
        }}
      >
        <div className="flex flex-col  mt-8 items-start justify-between gap-5 p-10 ">
          <div className="flex flex-col  gap-5  ">
            <h3 className="text-white   font-geist  font-bold  text-2xl md:text-3xl ">
              Crypto Access{" "}
            </h3>
            <p className="font-inter font-medium  text-lg text-white leading-[#000000] md:text-xl  max-w-[446px] ">
              Buy digital assets seamlessly using cards, wallets, or available
              balance.
            </p>
          </div>
        </div>

        <div className="flex gap-5 items-center px-10 ">
          <p className="font-inter  text-white  leading-[55px]">Learn More</p>
          <CirclePlus size={20} color="#ffffff" />
        </div>

        <div className="absolute right-0 bottom-0 z-10 ">
          <Image
            src={featureBuyCrypto}
            alt="send-money-icon"
            width={277}
            height={299}
          />
        </div>
      </div>
    </div>
  );
};
