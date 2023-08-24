import { FC } from "react";
import { IPartnerCardProps } from "./PartnerCardFields.interface";
import styles from "./PartnerCardFirlds.module.scss";

export const PartnerCardFields: FC<IPartnerCardProps> = ({ logoUrl, description }) => {
  return (
    <div className={styles.partnerCard}>
      <img src={logoUrl} alt={description} className={styles.partnerLogo} />
      <p className={styles.partnerDescription}>{description}</p>
    </div>
  );
};
