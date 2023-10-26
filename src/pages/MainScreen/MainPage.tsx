import { FC } from "react"
import {
  CategorySelectOrganism,
  ContactUsOrganism,
  DiscountProductsOrganisms,
  FeaturedProductsOrganism,
  NewsListOrganism,
  SearchWithBannerOrgamism,
  UsefulArticlesOrganism,
  PartnersOrganism,
} from "../../components/organisms"
import { HorecaArtAtom } from "../../components/atoms"

export const MainPage: FC = () => {
  return (
    <div className="mb-10">
      <CategorySelectOrganism />
      <SearchWithBannerOrgamism />
      <DiscountProductsOrganisms />
      <div className="bg-[#47535F] rounded-t-2xl pb-10">
        <FeaturedProductsOrganism />
        <NewsListOrganism />
      </div>
      <UsefulArticlesOrganism />
      <HorecaArtAtom />
      <PartnersOrganism />
      <ContactUsOrganism />
    </div>
  )
}
