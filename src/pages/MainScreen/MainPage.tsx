import { FC } from "react";
import {
  HeaderOrganism,
  SubHeaderOrganism,
  DiscountProductsOrganisms,
  FeaturedProductsOrganism,
  SearchWithBannerOrgamism,
  CategorySelectOrganism,
  NewsListOrganism,
  UsefulArticlesOrganism,
  ContactUsOrganism,
  FooterOrganism,
} from "../../components/organisms";

export const MainPage: FC = () => {
  return (
    <>
      <SubHeaderOrganism />
      <HeaderOrganism />
      <CategorySelectOrganism />
      <SearchWithBannerOrgamism />
      <DiscountProductsOrganisms />
      <FeaturedProductsOrganism />
      <NewsListOrganism />
      <UsefulArticlesOrganism />
      <ContactUsOrganism />
      <FooterOrganism />
    </>
  );
};
