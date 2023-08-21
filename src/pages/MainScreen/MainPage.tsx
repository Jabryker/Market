import { FC } from "react";
import HeaderOrganism from "../../components/organisms/HeaderOrganism/HeaderOrganism";
import SubHeaderOrganism from "../../components/organisms/SubHeaderOrganism/SubHeaderOrganism";
import SliderOrganisms from "../../components/organisms/SliderOrganisms/SliderOrganisms";
import PartnersOrganism from "../../components/organisms/PartnersOrganism/PartnersOrganism";
import PreFooterOrgamism from "../../components/organisms/PreFooterOrgamism/PreFooterOrgamism";
import FooterOrganism from "../../components/organisms/FooterOrganism/FooterOrganism";
import CategoryOrganism from "../../components/organisms/CategoryOrganism/CategoryOrganism";

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
