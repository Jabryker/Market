import { FC } from "react";
import { ICategoryProps } from "./Category.interface";

export const Category: FC<ICategoryProps> = ({ children, dropdownContent }) => {
  return (
    <div className="p-3 rounded bg-white shadow">
      <div className="relative">
        <div className="bg-gray-100 border-gray-100 text-gray-700 font-semibold rounded-lg px-4 py-2 cursor-pointer">
          {children}
        </div>
        <div className="absolute top-0 right-0 mt-1 mr-2 pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div className="hidden absolute z-10 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg">
        {dropdownContent}
      </div>
    </div>
  );
};
