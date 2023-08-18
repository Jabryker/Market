import {FC} from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import {Button} from "../../atoms/Button/Button";
import LoginFormFields from "../../molecules/LoginFormFields/LoginFormFields";
import GoogleAuthOrgamism from "../GoogleAuthOrgamism/GoogleAuthOrgamism";
import { ILoginFormOrganismProps } from "./LoginFormOrganism.interface";

const LoginFormOrganism: FC<ILoginFormOrganismProps> = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors }  } = useForm();
  const { t } = useTranslation();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <LoginFormFields register={register} errors={errors} />
      <Button type="submit">{t("loginButton")}</Button>
    </form>
  );
};

export default LoginFormOrganism;
