import { FC } from "react";
import { useForm } from "react-hook-form";
import LoginFormFields from "../../molecules/LoginFormFields/LoginFormFields";
import { ILoginFormOrganismProps } from "./LoginFormOrganism.interface";

const LoginFormOrganism: FC<ILoginFormOrganismProps> = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors }  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <LoginFormFields register={register} errors={errors} />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginFormOrganism;
