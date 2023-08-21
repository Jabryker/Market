import { FC } from "react";
import SubHeaderOrganism from "../SubHeaderOrganism/SubHeaderOrganism";
import HeaderOrganism from "../HeaderOrganism/HeaderOrganism";
import NotFoundFields from "../../molecules/NotFoundFields/NotFoundFields";
import PreFooterOrgamism from "../PreFooterOrgamism/PreFooterOrgamism";
import FooterOrganism from "../FooterOrganism/FooterOrganism";

const NotFoundOrmanism: FC = () => {
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

export default NotFoundOrmanism;
