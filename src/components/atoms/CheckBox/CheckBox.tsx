import { FC } from "react";
import { ICheckBox } from "./CheckBox.interface";
import styles from "./CheckBox.module.scss";

const CheckBox: FC<ICheckBox> = ({ name, label, register, error }) => {

  return (
    <div className={styles.checkboxContainer}>
      <label className={styles.checkboxLabel}>
        <input
          className={styles.checkboxInput}
          type="checkbox"
          name={name}
          {...register(name)}
        />
        {label}
      </label>
      {error && <div>{error}</div>}
    </div>
  );
};

export default CheckBox;
