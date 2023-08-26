import { FC } from "react";
import { IPartnerCardProps } from "./PartnerCardFields.interface";

export const PartnerCardFields: FC<IPartnerCardProps> = ({ logoUrl, description }) => {
  return (
    <div className="bg-white w-72 md:w-80 h-36 md:h-40 border border-gray-300 rounded p-2 flex flex-col justify-center items-center mb-4 md:mb-6">
      <img src={logoUrl} alt={description} className="max-w-full max-h-full" />
      <p className="mt-2 text-center">{description}</p>
    </div>
  );
};
