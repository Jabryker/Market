import {
  HeaderOrganism,
  SubHeaderOrganism,
  SliderOrganisms,
  DiscountProductsOrganisms,
  FeaturedProductsOrganism,
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
      <FeaturedProductsOrganism />
      {/* <PreFooterOrgamism />  */}
      {/* <FooterOrganism /> */}
    </>
  );
};
