import clsx from "clsx";

type ButtonProps = {
  text: string;
  font?: "montserrat" | "inter" | "geist";
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
};

const fontMap = {
  montserrat: "font-montserrat",
  inter: "font-inter",
  geist: "font-geist",
};

const Button = ({
  text,
  font = "inter",
  onClick,
  className,
  type = "button",
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        "w-fit flex items-center justify-center gap-2.5",
        "bg-[#02CE13] text-white font-semibold text-xl font-inter ",
        "py-[15px] px-6",
        "rounded-[10px]",
        "transition-all duration-200 hover:opacity-90 active:scale-[0.98]",
        fontMap[font],
        className
      )}
    >
      {text}
    </button>
  );
};

export default Button;
