import { FC } from "react";
import PartnerCardFields from "../../molecules/PartnerCardFields/PartnerCardFirlds";
import partners from "../../../assets/data/partners";
import styles from "./PartnersOrganism.module.scss";

const PartnersOrganism: FC = () => {
  return (
    <div className={styles.PartnersOrganismWrapper}>
      <h2 className={styles.PartnersOrganismWrapperTitle}>Наши партнеры</h2>
      <hr className={styles.PartnersOrganismWrapperLine} />
      <div className={styles.PartnersOrganismWrapperCard}>
        {partners.map((partner) => (
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
