import {FC} from "react";
import HeaderOrganism from "../../components/organisms/HeaderOrganism/HeaderOrganism";
import SubHeaderOrganism from "../../components/organisms/SubHeaderOrganism/SubHeaderOrganism";

const MainPage: FC = () => {
  return (
    <>
      <SubHeaderOrganism />
      <HeaderOrganism />
    </>
  );
};

export default MainPage;