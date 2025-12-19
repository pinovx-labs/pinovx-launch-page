import Image from "next/image";

interface CardProps {
  imgSrc: string;
  text: string;
  heading: string;
}

const Card = ({ imgSrc, text, heading }: CardProps) => {
  return (
    <div
      className="
        group flex flex-col w-[370px] p-7 gap-5 rounded-2xl 
        bg-[#F7F4ED] cursor-pointer 
        transition-all duration-300 ease-in-out
        hover:bg-[#19451D] 
        focus:bg-[#19451D] focus:outline-none focus:ring-2 focus:ring-[#28D536] focus:ring-offset-2
        transform hover:scale-[1.02] hover:shadow-xl
        m-1
      "
      tabIndex={0} // Makes it focusable
      role="button"
      aria-label={`${heading} card`}
    >
      {/* Icon Container */}
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
          src={imgSrc}
          alt={`${heading} icon`}
          width={34}
          height={34}
          className="transition-transform duration-300 group-hover:scale-110 group-focus:scale-110"
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col gap-3">
        <p
          className="
            font-inter  mb-8 font-bold text-xl text-black
            transition-colors duration-300
            group-hover:text-white 
            group-focus:text-white
          "
        >
          {heading}
        </p>
        <p
          className="
            font-inter font-medium text-[16px] text-black
            transition-colors duration-300
            group-hover:text-white 
            group-focus:text-white
          "
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default Card;
