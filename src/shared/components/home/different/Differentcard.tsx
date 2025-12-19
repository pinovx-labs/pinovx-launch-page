import { diffPhoto } from "@/utils/externalMedia";
import Image from "next/image";
import React from "react";
import { different } from "../../../../../public/assets/data/different";
import Card from "./Card";

const DifferentCard = () => {
  return (
    <div className="w-full flex flex-col md:flex-row  gap-4  justify-between   ">
      <div className="w-5/12 ">
        <Image
          src={diffPhoto}
          alt="image"
          className="w-full h-full"
          width={431}
          height={485}
        />
      </div>

      <div className="w-7/12 flex flex-wrap justify-end  ">
        {different.map((item, index) => (
          <Card
            key={index}
            imgSrc={item.imgSrc}
            text={item.text}
            heading={item.heading}
          />
        ))}
      </div>
    </div>
  );
};

export default DifferentCard;
