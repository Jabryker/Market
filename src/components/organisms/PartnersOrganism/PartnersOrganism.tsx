import { FC } from "react";
import { partners } from "../../../assets/data";
import { PartnerCardFields } from "../../molecules";
import {TitleText} from "../../atoms";

export const PartnersOrganism: FC = () => {
  return (
    <>
      <TitleText>Наши партнеры</TitleText>
      <div className="flex flex-wrap justify-center h-[50vh]">
        {partners.map((partnerE) => (
          <div
            key={partnerE.id}
            className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 p-4 text-center"
          >
            <PartnerCardFields logoUrl={partnerE.logoUrl} />
          </div>
        ))}
      </div>
    </>
  );
};
