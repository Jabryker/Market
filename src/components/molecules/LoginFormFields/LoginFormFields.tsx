import { FC } from "react";
import { Input } from "../../atoms/";
import { ILoginFormFieldsProps } from "./LoginFormFields.interface";

export const LoginFormFields: FC<ILoginFormFieldsProps> = ({
  register,
  errors,
}) => {

  return (
    <>
      <Input
        type="email"
        name="email"
        label="E-mail"
        error={errors.email?.message}
        register={register}
      />
      <Input
        type="password"
        name="password"
        label="Пароль"
        error={errors.password?.message}
        register={register}
      />
    </>
  );
};
