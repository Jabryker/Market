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
      <UsefulArticlesOrganism />
      {/* <PreFooterOrgamism />  */}
      {/* <FooterOrganism /> */}
    </>
  );
};
