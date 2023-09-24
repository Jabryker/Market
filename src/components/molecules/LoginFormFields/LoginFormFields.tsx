import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, CheckBox } from "../../atoms/";
import { RootState } from "../../../store/store";
import { setRememberMe } from "../../../store/slice/authSlice";
import { ILoginFormFieldsProps } from "./LoginFormFields.interface";

export const LoginFormFields: FC<ILoginFormFieldsProps> = ({
  register,
  errors,
}) => {
  const dispatch = useDispatch();
  const rememberMe = useSelector((state: RootState) => state.auth.rememberMe);

  const handleRememberMeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(setRememberMe(event.target.checked));
  };

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
