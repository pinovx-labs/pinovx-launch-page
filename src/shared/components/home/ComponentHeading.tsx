import React from "react";

interface TextProps {
  text: string;
  className?: string;
}

const ComponentHeading = ({ text, className = "" }: TextProps) => {
  return (
    <h2 
      className={`font-bold font-geist text-[30px] md:text-[50px] text-black ${className}`}
    >
      {text}
    </h2>
  );
};

export default ComponentHeading;