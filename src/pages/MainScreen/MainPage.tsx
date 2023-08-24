import { FC } from "react";
import {
  HeaderOrganism,
  SubHeaderOrganism,
  SliderOrganisms,
  DiscountProductsOrganisms,
  // PreFooterOrgamism,
  // FooterOrganism,
} from "../../components/organisms";

import { CategorySelectOrganism } from "../../components/organisms/CategorySelectOrgamisn/CategorySelectOrgamisn";

export const MainPage = () => {
  return (
    <>
      <SubHeaderOrganism />
      <HeaderOrganism />
      <CategorySelectOrganism />
      <SliderOrganisms />
      <DiscountProductsOrganisms />
      {/* <PreFooterOrgamism />  */}
      {/* <FooterOrganism /> */}
    </>
  );
};
