import React from "react";
interface textProps {
  text: string;
}
const ComponentTitle = ({ text }: textProps) => {
  return (
    <h2 className="font-semibold  uppercase font-geist text-lg md:text-xl text-[#4EDD5A]">
      {text}
    </h2>
  );
};

export default ComponentTitle;
