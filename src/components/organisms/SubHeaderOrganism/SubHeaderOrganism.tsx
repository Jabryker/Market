import { FC } from "react";
import { AiOutlineClockCircle, AiOutlineWhatsApp } from "react-icons/ai";

export const SubHeaderOrganism: FC = () => {
  return (
    <div className="bg-[#373737] text-[#fff] p-4 md:p-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="mb-2 md:mb-0 text-white">Welcome to Worldwide MarketKG!</p>

        <div className="flex justify-center md:justify-start items-center mt-2 md:mt-0">
          <div className="flex items-center text-white mr-4">
            <AiOutlineClockCircle className="mr-2" size={20} />
            <span className="mr-2">08:00 - 19:00</span>
          </div>
          <div className="flex items-center text-white">
            <AiOutlineWhatsApp className="mr-2" size={20} />
            <span>+996707654499</span>
          </div>
        </div>
      </div>
    </div>
  );
};
