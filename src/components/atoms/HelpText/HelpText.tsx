import { FC } from "react";
import { Link } from "react-router-dom";
import { IHelpTextProps } from "./HelpText.interface";

export const HelpText: FC<IHelpTextProps> = ({ children, linkTo, linkText }) => {
  return (
    <div className="mt-8 md:mt-12">
      <p className="text-base md:text-lg font-medium text-gray-700">
        {children}{" "}
        <Link to={linkTo} className="text-[#fb6d56] font-medium">
          {linkText}
        </Link>
      </p>
    </div>
  );
};
