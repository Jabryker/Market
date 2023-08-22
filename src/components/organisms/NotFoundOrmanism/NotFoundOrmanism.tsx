import { FC } from "react";
import { SubHeaderOrganism, PreFooterOrgamism } from "../";
import { HeaderOrganism, FooterOrganism } from "../";
import { NotFoundFields } from "../../molecules/";

export const NotFoundOrmanism: FC = () => {
  return (
    <>
      <SubHeaderOrganism />
      <HeaderOrganism />
      <NotFoundFields />
      <PreFooterOrgamism />
      <FooterOrganism />
    </>
  );
};
