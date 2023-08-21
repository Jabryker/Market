import { FC } from "react";
import partnerData from "../../../assets/data/partners";
import PartnerCardFields from "../../molecules/PartnerCardFields/PartnerCardFirlds";
import styles from "./PartnersOrganism.module.scss";

const PartnersOrganism: FC = () => {
  return (
    <div className={styles.PartnersOrganismWrapper}>
      <div className={styles.PartnersOrganismWrapperHeader}>
        <h2 className={styles.PartnersOrganismWrapperTitle}>Партнеры</h2>
        <hr className={styles.PartnersOrganismWrapperLine} />
      </div>
      <div className={styles.PartnersOrganismWrapperPartnersList}>
        {partnerData.map((partner) => (
          <PartnerCardFields
            key={partner.id}
            logoUrl={partner.logoUrl}
            description={partner.description}
          />
        ))}
      </div>
    </div>
  );
};

export default PartnersOrganism;
