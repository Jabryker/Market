import { FC, useState } from "react";
import eye from "../../../assets/images/auth/eye.png";
import { IInputProps } from "./Input.interface";
import styles from "./Input.module.scss";

export const Input: FC<IInputProps> = ({
  type,
  name,
  label,
  placeholder,
  error,
  register,
}) => {
  const [showPassword, setShowPassword] = useState(true);

  return (
    <div>
      {label === "Продавец" ? (
        <div className={styles.Input}>
          <label className={styles.Label} htmlFor={name}>
            {label}
          </label>
          <div>
            <select
              className={styles.InputField}
              name={name}
              {...register(name, { required: "This field is required" })}
            >
              <option value="Физическое лицо">Физическое лицо</option>
              <option value="Юридическое лицо">Юридическое лицо</option>
            </select>
          </div>
          {error && <div className={styles.ErrorMessage}>{error}</div>}
        </div>
      ) : type !== "password" ? (
        <div className={styles.Input}>
          <label className={styles.Label} htmlFor={name}>
            {label}
          </label>
          <div>
            <input
              className={styles.InputField}
              type={type}
              name={name}
              placeholder={placeholder}
              {...register(name, { required: "This field is required" })}
            />
          </div>
          {error && <div className={styles.ErrorMessage}>{error}</div>}
        </div>
      ) : (
        <div className={styles.InputPassword}>
          <label className={styles.Label} htmlFor={name}>
            {label}
          </label>
          <div className={styles.InputField}>
            {showPassword ? (
              <input
                className={styles.Inp}
                type={type}
                name={name}
                placeholder={placeholder}
                {...register(name, { required: "This field is required" })}
              />
            ) : (
              <input
                className={styles.Inp}
                type="text"
                name={name}
                placeholder={placeholder}
                {...register(name, { required: "This field is required" })}
              />
            )}
            <img
              src={eye}
              className={styles.Img}
              onMouseDown={() => setShowPassword(false)}
              onMouseUp={() => setShowPassword(true)}
              onMouseOut={() => setShowPassword(true)}
            />
          </div>
        </div>
      )}
    </div>
  );
};
