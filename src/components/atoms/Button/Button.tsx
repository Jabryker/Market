import { FC } from "react";
import { IButtonProps } from "./Button.interface";

export const Button: FC<IButtonProps> = ({ children, type }) => {
  return (
    <button
      type={type}
      className="flex items-center justify-center h-12 bg-[#EC9A1E] text-white transition-colors duration-300 ease-in-out hover:bg-[#FFFFFF] hover:text-[#000000] focus:bg-[#767E8C] focus:text-[#000000] whitespace-nowrap"
      style={{
        width: "100%",
        borderRadius: "10px",
      }}
    >
      <span className="font-inter font-semibold text-lg lg:text-xl">
        {children}
      </span>
    </button>
  );
};
