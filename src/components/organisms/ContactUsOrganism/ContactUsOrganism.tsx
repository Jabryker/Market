import React, { FC } from "react";
import ContactUsMolecules from "../../molecules/ContactUsMolecules/ContactUsMolecules";
import InformationLine from "../../molecules/InformationLine/InformationLine";

export const ContactUsOrganism: FC = () => {
  return (
    <div>
      <InformationLine />
      <ContactUsMolecules />
    </div>
  );
};
