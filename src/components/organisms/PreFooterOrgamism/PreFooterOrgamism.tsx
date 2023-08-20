import { FC } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { AiFillApple, AiFillBank, AiFillPayCircle } from "react-icons/ai";
import styles from "./PreFooterOrgamism.module.scss";

const PreFooterOrgamism: FC = () => {
  return (
    <div className={styles.preFooterContainer}>
      <div className={styles.preFooterColumn}>
        <h4>О нас</h4>
        <ul>
          <li>
            <Link to="/">Доставка и возврат</Link>
          </li>
          <li>
            <Link to="/">Помощь и Контакты</Link>
          </li>
          <li>
            <Link to="/">Настройка данных</Link>
          </li>
          <li>
            <Link to="/">Присоединяйтесь к программе Influencer</Link>
          </li>
          <li>
            <Link to="/">Награды</Link>
          </li>
        </ul>
      </div>
      <div className={styles.preFooterColumn}>
        <h4>Безопасные покупки</h4>
        <div className={styles.paymentIcons}>
          <AiFillBank />
          <AiFillPayCircle />
          <AiFillApple />
        </div>
      </div>
      <div className={styles.preFooterColumn}>
        <h4>Контакты</h4>
        <div className={styles.contactIcons}>
          <FaWhatsapp />
          <FaInstagram />
          <FaFacebook />
          <FaYoutube />
          <FaTiktok />
        </div>
      </div>
    </div>
  );
};

export default PreFooterOrgamism;
