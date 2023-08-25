import { FC } from "react";
import { HeaderOrganism, FooterOrganism } from "../../components/organisms";
import { BasketPagesMolecules } from "../../components/molecules/BasketPagesMolecules/BasketPagesMolecules";

export const BasketPagesTemplate: FC = () => {
  return (
    <div>
      <HeaderOrganism />
      <BasketPagesMolecules />
      <FooterOrganism />
    </div>
  );
};
