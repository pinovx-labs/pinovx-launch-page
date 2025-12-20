import React from "react";
import ComponentTitle from "../ComponentTitle";
import ComponentHeading from "../ComponentHeading";
import Image from "next/image";
import { bitcoinIcon, userIcon } from "@/utils/externalMedia";
import FirstRow from "./FirstRow";
import SecondRow from "./SecondRow";

const HowItWorks = () => {
  return (
    <main className="w-full mt-10   border border-yellow-500">
      <section className="container  mx-auto  px-4 ">
        <div className="flex flex-col gap-5  items-center justify-center ">
          <ComponentTitle text="Process" />
          <ComponentHeading text="How Does It Work" />
        </div>

        <div className="flex  flex-col gap-5 my-4">
          <FirstRow />

          <SecondRow />
        </div>
      </section>
    </main>
  );
};

export default HowItWorks;
