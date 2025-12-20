import React from "react";
import Button from "../../button/Button";
import ComponentTitle from "../ComponentTitle";
import ComponentHeading from "../ComponentHeading";
import DifferentCard from "./Differentcard";

const Difference = () => {
  return (
    <main className="w-full mt-10  border border-yellow-500 ">
      <section className="container mx-auto px-4"  id="product" >
        <div className="flex justify-between items-end  mb-3 ">
          <Button text="Learn More" type="button" font="inter" />
          <div className="flex flex-col gap-4 items-end justify-end">
            <ComponentTitle text="Process" />
            <ComponentHeading text="Why we are different" />
          </div>
        </div>

        <DifferentCard/>
      </section>
    </main>
  );
};

export default Difference;
