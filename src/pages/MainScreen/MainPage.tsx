import { FC } from "react";
import {
  HeaderOrganism,
  SubHeaderOrganism,
  SliderOrganisms,
  DiscountProductsOrganisms,
  // PreFooterOrgamism,
  // FooterOrganism,
} from "../../components/organisms";

export const MainPage: FC = () => {
  return (
    <>
      <SubHeaderOrganism />
      <HeaderOrganism />
      <SliderOrganisms />
      <DiscountProductsOrganisms />
      {/* <PreFooterOrgamism />  */}
      {/* <FooterOrganism /> */}
    </>
  );
};
