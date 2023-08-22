import { FC } from "react";
import { useForm, useWatch } from "react-hook-form";
import { Input, Select } from "../../atoms/";
import styles from "../BuyerRegistrationFormFields/BuyerRegistrationFormFields.module.scss";
import { ISellerRegistrationFormProps } from "./SellerRegistrationFormFields.interface";

export const SellerRegistrationFormFields: FC<ISellerRegistrationFormProps> = ({
  register,
  errors,
}) => {
  const { control, register: formRegister } = useForm({
    defaultValues: {
      type: "Physical",
    },
  });

  const userType = useWatch({
    control,
    name: "type",
  });

  return (
    <>
      <Select
        label="Продавец"
        name="type"
        options={["Physical", "Legal"]}
        register={formRegister}
      />
      <Input
        label="Email"
        name="email"
        type="email"
        register={register}
        error={errors.email?.message}
      />
      <Input
        label="Username"
        name="username"
        type="text"
        register={register}
        error={errors.username?.message}
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
      <Input label="INN" name="inn" type="number" register={register} error={errors.inn?.message} />
      {userType === "Legal" && (
        <Input
          label="Certificate"
          name="certificate"
          type="number"
          register={register}
          error={errors.certificate?.message}
        />
      )}
    </>
  );
};
