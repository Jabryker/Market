import { FC } from "react";
import { ITitleText } from "./TitleText.interface";

export const TitleText: FC<ITitleText> = ({ children }) => {
  return (
    <div className="my-20">
      <h1 className="title text-4xl font-bold md:text-4xl lg:text-5x1 ml-6 color-[#373737] ">
        {children}
      </h1>
    </div>
  );
};
