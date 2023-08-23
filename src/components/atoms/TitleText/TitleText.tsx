import { FC } from "react";
import { ITitleText } from "./TitleText.interface";

export const TitleText: FC<ITitleText> = ({ children }) => {
  return (
    <div>
      <h1 className="title text-2xl md:text-4xl lg:text-5x1">{children}</h1>
      <hr className="hr mt-2 md:mt-4 lg:mt-6" />
    </div>
  );
};
