import { FC } from "react";
import { Input } from "../../atoms/";
import { IBuyerRegistrationFormProps } from "./BuyerRegistrationFormFields.interface";
import styles from "./BuyerRegistrationFormFields.module.scss";

export const BuyerRegistrationFormFields: FC<IBuyerRegistrationFormProps> = ({
  register,
  errors,
}) => {
  return (
    <>
      <Input
        label="Username"
        name="username"
        type="text"
        register={register}
        error={errors.username?.message}
      />
      <Input
        label="Email"
        name="email"
        type="email"
        register={register}
        error={errors.email?.message}
      />
      <Input
        label="Password"
        name="password"
        type="password"
        register={register}
        error={errors.password?.message}
      />
      <Input
        label="Confirm Password"
        name="confirmPassword"
        type="password"
        register={register}
        error={errors.confirmPassword?.message}
      />
      {errors.password &&
        errors.confirmPassword &&
        errors.password.message !== errors.confirmPassword.message && (
          <div className={styles.ErrorMessage}>Passwords do not match</div>
        )}
    </>
  );
};
