import { FC, useState } from "react";
import { Select } from "antd";
import { useForm, useWatch } from "react-hook-form";
import { Input } from "../../atoms/";
import { ISellerRegistrationFormProps } from "./SellerRegistrationFormFields.interface";

const { Option } = Select;

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
  console.log(formRegister);

  return (
    <>
      <Input
        label="Продавец"
        name="seller"
        type="text"
        register={register}
        error={errors.username?.message}
      />

      <Input
        label="Nickname"
        name="username"
        type="text"
        register={register}
        error={errors.username?.message}
      />
      <Input
        label="E-mail"
        name="email"
        type="email"
        register={register}
        error={errors.inn?.message}
      />
      <Input
        label="Пароль"
        name="password"
        type="password"
        register={register}
        error={errors.password?.message}
      />
      <Input
        label="Подтвердите пароль"
        name="confirmPassword"
        type="password"
        register={register}
        error={errors.confirmPassword?.message}
      />
      <Input
        label="ИНН"
        name="inn"
        type="number"
        register={register}
        error={errors.inn?.message}
      />

      {errors.password &&
        errors.confirmPassword &&
        errors.password.message !== errors.confirmPassword.message && (
          <div className="bg-red-500 text-black">Passwords do not match</div>
        )}

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
