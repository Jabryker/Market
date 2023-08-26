import { FC } from "react";
import {
  HeaderOrganism,
  SubHeaderOrganism,
  SliderOrganisms,
  DiscountProductsOrganisms,
  FeaturedProductsOrganism,
  CategorySelectOrganism,
  NewsListOrganism,
  UsefulArticlesOrganism,
  ContactUsOrganism,
  FooterOrganism,
} from "../../components/organisms";
// import { DiscountProductsOrganisms } from "../../components/organisms/DiscountProductsOrganisms/DiscountProductsOrganisms";

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
      <FooterOrganism />
    </>
  );
};
