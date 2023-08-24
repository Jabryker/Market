import { FC } from "react";
import { IButtonProps } from "./Button.interface";

export const Button: FC<IButtonProps> = ({ children, type }) => {
  return (
    <button
      type={type}
      className="flex items-center justify-center h-12 bg-[#fb6d56] text-white rounded-lg outline-none focus:outline-none transition duration-300 ease-in-out hover:bg-opacity-90 transform hover:scale-95 w-full md:w-2/3 lg:w-full md:text-lg lg:text-xl"
    >
      <span className="font-inter font-semibold text-lg lg:text-xl">{children}</span>
    </button>
  );
};
