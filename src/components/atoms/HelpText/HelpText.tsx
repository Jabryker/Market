import { FC } from "react";
import { Link } from "react-router-dom";
import { IHelpTextProps } from "./HelpText.interface";

export const HelpText: FC<IHelpTextProps> = ({
  children,
  linkTo,
  linkText,
}) => {
  return (
    <div className="mt-2 mb-5 ">
      <p className="text-[#A7B2BD] text-sm font-medium">
        {children}{" "}
        <Link
          to={linkTo}
          className="text-[#EC9A1E] text-sm font-medium underline"
        >
          {linkText}
        </Link>
      </p>
    </div>
  );
};
