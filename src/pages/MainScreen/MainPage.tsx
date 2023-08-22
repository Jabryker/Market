import { FC } from "react";
import {
  HeaderOrganism,
  SubHeaderOrganism,
  SliderOrganisms,
  PartnersOrganism,
  PreFooterOrgamism,
  FooterOrganism,
  CategoryOrganism,
} from "../../components/organisms";

const MainPage: FC = () => {
  return (
    <>
      <SubHeaderOrganism />
      <HeaderOrganism />
      <CategoryOrganism />
      <SliderOrganisms />
      <PartnersOrganism />
      <PreFooterOrgamism />
      <FooterOrganism />
    </>
  );
};

export default MainPage;
