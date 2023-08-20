import { FC } from "react";
import HeaderOrganism from "../../components/organisms/HeaderOrganism/HeaderOrganism";
import SubHeaderOrganism from "../../components/organisms/SubHeaderOrganism/SubHeaderOrganism";
import PreFooterOrgamism from "../../components/organisms/PreFooterOrgamism/PreFooterOrgamism";
import FooterOrganism from "../../components/organisms/FooterOrganism/FooterOrganism";

const MainPage: FC = () => {
  return (
    <>
      <SubHeaderOrganism />
      <HeaderOrganism />
      <PreFooterOrgamism />
      <FooterOrganism />
    </>
  );
};

export default MainPage;
