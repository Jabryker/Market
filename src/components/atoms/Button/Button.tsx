import { FC } from "react";
import { IButtonProps } from "./Button.interface";
import styles from "./Button.module.scss";

export const Button: FC<IButtonProps> = ({ children, type }) => {
  return (
    <button type={type} className={styles.formBtn}>
      <span className={styles.buttonContent}>{children}</span>
    </button>
  );
};
