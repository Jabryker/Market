import { FC } from "react";
import {
  HeaderOrganism,
  SubHeaderOrganism,
  SliderOrganisms,
  // PreFooterOrgamism,
  // FooterOrganism,
} from "../../components/organisms";

import { DiscountProductsOrganisms } from "../../components/organisms/DiscountProductsOrganisms/DiscountProductsOrganisms";
import { ContactUsOrganism } from "../../components/organisms/ContactUsOrganism/ContactUsOrganism";

export const MainPage: FC = () => {
  return (
    <>
      <SubHeaderOrganism />
      <HeaderOrganism />
      <SliderOrganisms />
      <DiscountProductsOrganisms />
      <ContactUsOrganism />
      {/* <PreFooterOrgamism /> */}
      {/* <FooterOrganism /> */}
    </>
  );
};
