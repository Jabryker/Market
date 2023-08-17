import {FC} from "react";
import {useTranslation} from "react-i18next";
import {IButtonProps} from "./Button.interface";
import styles from "./Button.module.scss";

export const Button: FC<IButtonProps> = ({ children, type }) => {
  const { t } = useTranslation();
  return (
    <button
      type={type}
      className={styles.formBtn}
    > <span className={styles.buttonContent}>{t(children)}</span></button>
  );
};