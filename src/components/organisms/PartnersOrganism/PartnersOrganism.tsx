import { FC } from "react";
import { partners } from "../../../assets/data";
import { PartnerCardFields } from "../../molecules";
import {TitleText} from "../../atoms";

export const PartnersOrganism: FC = () => {
  return (
    <div className="w-11/12 max-w-screen-2xl m-auto">
      <TitleText color="text-[#47535F]">Наши партнеры</TitleText>
      <div className="flex flex-wrap justify-center">
        {partners.map((partnerE) => (
          <div
            key={partnerE.id}
            className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 p-4 text-center"
          >
            <PartnerCardFields logoUrl={partnerE.logoUrl} />
          </div>
        ))}
      </div>
    </div>
  );
};
