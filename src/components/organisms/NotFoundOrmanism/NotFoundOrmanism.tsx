import { FC } from "react";
import { SubHeaderOrganism } from "../";
import { HeaderOrganism, FooterOrganism } from "../";
import { NotFoundFields } from "../../molecules/";

export const NotFoundOrmanism: FC = () => {
  return (
    <>
      <SubHeaderOrganism />
      <HeaderOrganism />
      <NotFoundFields />
      <FooterOrganism />
    </>
  );
};
