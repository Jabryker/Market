import {
  HeaderOrganism,
  SubHeaderOrganism,
  SliderOrganisms,
  DiscountProductsOrganisms,
  FeaturedProductsOrganism,
  CategorySelectOrganism,
  NewsListOrganism,
  UsefulArticlesOrganism,
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
      <CategorySelectOrganism />
      <SliderOrganisms />
      <DiscountProductsOrganisms />
      <FeaturedProductsOrganism />
      <NewsListOrganism />
      <UsefulArticlesOrganism />
      <ContactUsOrganism />
      {/* <PreFooterOrgamism /> */}
      {/* <FooterOrganism /> */}
    </>
  );
};
