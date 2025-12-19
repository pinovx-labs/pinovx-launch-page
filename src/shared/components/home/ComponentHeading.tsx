import React from "react";
interface textProps {
  text: string;
}
const ComponentHeading = ({ text }: textProps) => {
  return (
    <h2 className="font-bold  font-geist text-[30px] md:text-[50px] text-black">
      {text}
    </h2>
  );
};

export default ComponentHeading;
