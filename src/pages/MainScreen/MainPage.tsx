import { FC } from "react"
import {
  CategorySelectOrganism,
  ContactUsOrganism,
  DiscountProductsOrganisms,
  FeaturedProductsOrganism,
  NewsListOrganism,
  SearchWithBannerOrgamism,
  UsefulArticlesOrganism,
} from "../../components/organisms"

export const MainPage: FC = () => {
  return (
    <>
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
