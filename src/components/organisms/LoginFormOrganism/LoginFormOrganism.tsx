import { FC } from "react";
import { useForm } from "react-hook-form";
import {Button} from "../../atoms/Button/Button";
import LoginFormFields from "../../molecules/LoginFormFields/LoginFormFields";
import GoogleAuthOrgamism from "../GoogleAuthOrgamism/GoogleAuthOrgamism";
import { ILoginFormOrganismProps } from "./LoginFormOrganism.interface";

const LoginFormOrganism: FC<ILoginFormOrganismProps> = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors }  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <LoginFormFields register={register} errors={errors} />
      <Button type="submit">Войти</Button>
      <GoogleAuthOrgamism />
    </form>
  );
};

export default LoginFormOrganism;
