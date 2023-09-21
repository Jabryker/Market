import { FC } from "react"
import {
  CategorySelectOrganism,
  ContactUsOrganism,
  DiscountProductsOrganisms,
  FeaturedProductsOrganism,
  NewsListOrganism,
  SearchWithBannerOrgamism,
  SubHeaderOrganism,
  UsefulArticlesOrganism,
} from "../../components/organisms"

export const MainPage: FC = () => {
  return (
    <>
      <SubHeaderOrganism />
      <CategorySelectOrganism />
      <SearchWithBannerOrgamism />
      <DiscountProductsOrganisms />
      <FeaturedProductsOrganism />
      <NewsListOrganism />
      <UsefulArticlesOrganism />
      <ContactUsOrganism />
    </>
  )
}
