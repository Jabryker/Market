import { FC } from "react";
import { ICheckBox } from "./CheckBox.interface";
import styles from "./CheckBox.module.scss";

export const CheckBox: FC<ICheckBox> = () => {
  return (
    <div className={styles.lineMainContainer}>
      <div className={styles.lineContainer}></div>
      <div className={styles.containerText}>или</div>
      <div className={styles.lineContainer}></div>
    </div>
  );
};
