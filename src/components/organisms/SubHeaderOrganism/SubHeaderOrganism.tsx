// SubHeaderOrganism.jsx

import React, { FC } from "react";
import ClockIcon from "../../../assets/images/header/time.svg";
import WhatsAppIcon from "../../../assets/images/header/whatsapp.svg";
import styles from "./SubHeaderOrganism.module.scss";

const SubHeaderOrganism: FC = () => {
  return (
    <div className={`${styles.SubHeaderOrganism} container-fluid`}>
      <div className="row align-items-center">
        <div className="col-md-8 col-sm-12">
          <span className={`${styles.SubHeaderOrganismText} ${styles.Text}`}>
            Welcome to worldwide Megamart!
          </span>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className={`${styles.TimeAndWhatsApp} d-flex justify-content-end`}>
            <div className={styles.TimeWrapper}>
              <img src={ClockIcon} alt="Clock Icon" className={styles.Icon} />
              <span className={styles.TimeRange}>08:00 - 19:00</span>
            </div>
            <div className={styles.WhatsAppWrapper}>
              <img src={WhatsAppIcon} alt="WhatsApp Icon" className={styles.Icon} />
              <span className={styles.TimeRange}>+996707654499</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHeaderOrganism;
