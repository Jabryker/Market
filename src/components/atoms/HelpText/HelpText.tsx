import { FC } from "react";
import { Link } from "react-router-dom";
import { IHelpTextProps } from "./HelpText.interface";
import styles from "./HelpText.module.scss";

export const HelpText: FC<IHelpTextProps> = ({ children, linkTo, linkText }) => {
  return (
    <div className={styles.containerHelperText}>
      <p className={styles.Text}>
        {children}{" "}
        <Link to={linkTo} className={styles.LinkColor}>
          {linkText}
        </Link>
      </p>
    </div>
  );
};
