import { FC } from "react";
import { Input } from "../../atoms/";
import { IBuyerRegistrationFormProps } from "./BuyerRegistrationFormFields.interface";

export const BuyerRegistrationFormFields: FC<IBuyerRegistrationFormProps> = ({
  register,
  errors,
}) => {
  return (
    <>
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
        error={errors.email?.message}
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
    </>
  );
};
