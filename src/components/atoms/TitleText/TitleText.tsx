import { FC } from "react";
import { ITitleText } from "./TitleText.interface";

export const TitleText: FC<ITitleText> = ({ children }) => {
  return (
    <div className="my-20">
      <h1 className="title text-2xl md:text-4xl lg:text-5x1 text-center color-[#373737] ">
        {children}
      </h1>
      <div className="line mt-2 md:mt-4 lg:mt-6 bg-[#FB6D56] h-1 w-20 md:w-32 lg:w-64 mx-auto" />
    </div>
  );
};
