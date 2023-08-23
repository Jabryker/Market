import { FC } from "react";
import { partner } from "../../../assets/data/";
import { PartnerCardFields } from "../../molecules/";
import styles from "./PartnersOrganism.module.scss";

export const PartnersOrganism: FC = () => {
  return (
    <div className={styles.PartnersOrganismWrapper}>
      <div className={styles.PartnersOrganismWrapperHeader}>
        <h2 className={styles.PartnersOrganismWrapperTitle}>Партнеры</h2>
        <hr className={styles.PartnersOrganismWrapperLine} />
      </div>
      <div className={styles.PartnersOrganismWrapperPartnersList}>
        {partner.map((item) => (
          <PartnerCardFields key={item.id} logoUrl={item.logoUrl} description={item.description} />
        ))}
      </div>
    </div>
  );
};
