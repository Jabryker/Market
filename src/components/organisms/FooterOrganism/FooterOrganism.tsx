import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./FooterOrganism.module.scss";

export const FooterOrganism: FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className={styles.FooterOrganismWrapper}>
      <div className={styles.copyRight}>© {currentYear}. All rights reserved.</div>
      <div className={styles.footerLinks}>
        <ul>
          <li>
            <Link to="/">Условия использования</Link>
          </li>
          <li>
            <Link to="/">Право на отзыв</Link>
          </li>
          <li>
            <Link to="/">Выходные данные</Link>
          </li>
          <li>
            <Link to="/">Условия и положения</Link>
          </li>
          <li>
            <Link to="/">Условия и положения</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
