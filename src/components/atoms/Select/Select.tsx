import { FC } from "react";
import { ISelectProps } from "./Select.interface";
import styles from "./Select.module.scss";

const Select: FC<ISelectProps> = ({ label, name, options, register }) => {
  return (
    <div className={styles.selectСontainer}>
      <label className={styles.selectLabel}>{label}</label>
      <select className={styles.selectDropdown} name={name} {...register(name)}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
