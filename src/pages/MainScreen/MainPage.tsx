import { FC } from "react";
import {
  HeaderOrganism,
  SubHeaderOrganism,
  // SliderOrganisms,
  // PreFooterOrgamism,
  FooterOrganism,
  // CategoryOrganism,
} from "../../components/organisms";

export const MainPage: FC = () => {
  return (
    <>
      <SubHeaderOrganism />
      <HeaderOrganism />
      {/* <CategoryOrganism /> */}
      {/* <SliderOrganisms /> */}
      {/* <PreFooterOrgamism />  */}
      <FooterOrganism />
    </>
  );
};
