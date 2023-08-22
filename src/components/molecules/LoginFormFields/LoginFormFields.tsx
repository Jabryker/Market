import { FC } from "react";
import { Input, CheckBox } from "../../atoms/";
import { ILoginFormFieldsProps } from "./LoginFormFields.interface";

const LoginFormFields: FC<ILoginFormFieldsProps> = ({ register, errors }) => {
  return (
    <>
      <Input
        type="email"
        name="email"
        label="Email"
        placeholder="Enter your email"
        error={errors.email?.message}
        register={register}
      />
      <Input
        type="password"
        name="password"
        label="Password"
        placeholder="Enter your password"
        error={errors.password?.message}
        register={register}
      />
      <CheckBox
        name="rememberMe"
        register={register}
        error={errors.rememberMe?.message}
        label="Запомнить меня"
      />
    </>
  );
};

export default LoginFormFields;
