import { FC } from "react";
import { useForm, useWatch } from "react-hook-form";
import { Input, Select } from "../../atoms/";
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
      <Input
        label="Имя"
        name="name"
        type="text"
        register={register}
        error={errors.username?.message}
      />
      <Input
        label="Фамилия"
        name="surname"
        type="text"
        register={register}
        error={errors.surname?.message}
      />
      <Input
        label="Отчество"
        name="patronymic"
        type="text"
        register={register}
        error={errors.patronymic?.message}
      />
      <Input
        label="ИНН"
        name="inn"
        type="number"
        register={register}
        error={errors.inn?.message}
      />

      <Input
        label="Название компании / магазина"
        name="company"
        type="text"
        register={register}
        error={errors.inn?.message}
      />
      <Input
        label="Должность в компании"
        name="title"
        type="text"
        register={register}
        error={errors.inn?.message}
      />
      <Input
        label="E-mail"
        name="email"
        type="email"
        register={register}
        error={errors.inn?.message}
      />

      <Input
        label="ИНН"
        name="inn"
        type="number"
        register={register}
        error={errors.inn?.message}
      />

      <Input
        label="Название компании / магазина"
        name="company"
        type="text"
        register={register}
        error={errors.inn?.message}
      />
      <Input
        label="Должность в компании"
        name="title"
        type="text"
        register={register}
        error={errors.inn?.message}
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
