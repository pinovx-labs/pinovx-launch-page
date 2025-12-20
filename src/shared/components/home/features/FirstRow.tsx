import { featureBuyCrypto, featureSendMoney } from "@/utils/externalMedia";
import { CirclePlus } from "lucide-react";
import Image from "next/image";
import React from "react";

export const FirstRow = () => {
  return (
    <div className="flex flex-col md:flex-row    items-center md:items-start  w-full  gap-7 my-8">


      <div className="w-full md:w-6/12  flex flex-col h-[500px] gap-8 relative bg-[#F7F4ED]  justify-between">


        <div className="flex flex-col  mt-8 items-start justify-between gap-5 p-10 ">
          <div className="flex flex-col  gap-5  ">
            <h3 className="text-[#FFB200]   font-geist  font-bold  text-2xl md:text-3xl ">
              Global Transfer
            </h3>
            <p className="font-inter font-medium  text-lg text-black leading-[#000000] md:text-xl max-w-[521px] ">
              Send money across borders instantly with speed, clarity, and
              confidence.
            </p>
          </div>
        </div>

        <div className="flex gap-3  items-center px-10  ">
          <p className="font-inter text-lg md:text-xl text-[#FFB200]  leading-[55px]">
            Learn More
          </p>
          <CirclePlus size={20} color="#FFB200" />
        </div>

        <div className="absolute right-0 bottom-0 z-10 ">
          <Image
            src={featureSendMoney}
            alt="send-money-icon"
            width={277}
            height={299}
          />
        </div>
      </div>

      <div className="w-full md:w-6/12  flex flex-col gap-8 relative bg-[#F2FDF3]  h-[500px] justify-between ">
        <div className="flex flex-col  mt-8 items-start justify-between gap-5 p-10 ">
          <div className="flex flex-col  gap-5  ">
            <h3 className="text-[#02CE13]   font-geist  font-bold  text-2xl md:text-3xl ">
              Crypto To Cash{" "}
            </h3>
            <p className="font-inter font-medium  text-lg md:text-xl text-black leading-[#000000]  max-w-[521px] ">
              Send money across borders instantly with speed, clarity, and
              confidence.
            </p>
          </div>
        </div>

        <div className="flex gap-5 items-center ">
          <p className="font-inter  text-[#02CE13]  leading-[55px]">
            Learn More
          </p>
          <CirclePlus size={20}  color="#02ce13" />
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
