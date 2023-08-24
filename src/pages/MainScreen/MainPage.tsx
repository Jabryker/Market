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
import { NewsListOrganism } from "../../components/organisms/NewsListOrganism/NewsListOrganism";

export const MainPage = () => {
  return (
    <>
      <SubHeaderOrganism />
      <HeaderOrganism />
      <CategorySelectOrganism />
      <SliderOrganisms />
      <DiscountProductsOrganisms />
      <FeaturedProductsOrganism />
      <NewsListOrganism />
      {/* <PreFooterOrgamism />  */}
      {/* <FooterOrganism /> */}
    </>
  );
};
