import { FC } from "react";
import { IInputProps } from "./Input.interface";
import styles from "./Input.module.scss";

export const Input: FC<IInputProps> = ({ type, name, label, placeholder, error, register }) => {
  return (
    <div className={styles.Input}>
      <label className={styles.Label} htmlFor={name}>
        {label}
      </label>
      <input
        className={styles.InputField}
        type={type}
        name={name}
        placeholder={placeholder}
        {...register(name, { required: "This field is required" })}
      />
      {error && <div className={styles.ErrorMessage}>{error}</div>}
    </div>
  );
};
