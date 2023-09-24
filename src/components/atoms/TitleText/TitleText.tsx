import { FC } from "react";
import { ITitleText } from "./TitleText.interface";

export const TitleText: FC<ITitleText> = ({ children, color }) => {
  const textColorClass = color === "white" ? "text-white" : "text-[#47535F]";

  return (
    <div className="my-20">
      <h1 className={`title text-4xl font-bold md:text-4xl lg:text-5x1 ml-6 ${textColorClass}`}>
        {children}
      </h1>
    </div>
  );
};
