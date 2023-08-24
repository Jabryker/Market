import { FC } from "react";
import { ICheckBox } from "./CheckBox.interface";
import styles from "./CheckBox.module.scss";

export const CheckBox: FC<ICheckBox> = ({ name, label, register, error }) => {
  return (
    <div className={styles.checkboxContainer}>
      <label className={styles.checkboxLabel}>
        <input className={styles.checkboxInput} type="checkbox" {...register(name)} />
        {label}
      </label>
      {error && <div>{error.message}</div>}
    </div>
  );
};
