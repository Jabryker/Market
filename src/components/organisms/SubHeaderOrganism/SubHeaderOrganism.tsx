import { FC } from "react";
import ClockIcon from "../../../assets/images/header/time.svg";
import WhatsAppIcon from "../../../assets/images/header/whatsapp.svg";
import styles from "./SubHeaderOrganism.module.scss";

const SubHeaderOrganism: FC = () => {
  return (
    <div className={styles.SubHeaderOrganism}>
      <span className={styles.LeftContent}>
        <span className={`${styles.SubHeaderOrganismText} ${styles.Text}`}>
          Welcome to worldwide Megamart!
        </span>
        <div className={styles.TimeAndWhatsApp}>
          <img src={ClockIcon} alt="Clock Icon" />
          <span className={styles.TimeRange}>08:00 - 19:00</span>
          <img src={WhatsAppIcon} alt="WhatsApp Icon" />
          <span className={styles.TimeRange}>+996707654499</span>
          {/*<Dropdown className={styles.LanguageDropdown}>*/}
          {/*  <Dropdown.Toggle variant="success" id="language-dropdown">*/}
          {/*    {t("language")} /!* Текст кнопки языка из переводов *!/*/}
          {/*  </Dropdown.Toggle>*/}
          {/*  <Dropdown.Menu>*/}
          {/*    <Dropdown.Item onClick={() => changeLanguage("ru")}>RU</Dropdown.Item>*/}
          {/*    <Dropdown.Item onClick={() => changeLanguage("kg")}>KG</Dropdown.Item>*/}
          {/*    <Dropdown.Item onClick={() => changeLanguage("en")}>US</Dropdown.Item>*/}
          {/*  </Dropdown.Menu>*/}
          {/*</Dropdown>*/}
        </div>
      </span>
    </div>
  );
};

export default SubHeaderOrganism;
