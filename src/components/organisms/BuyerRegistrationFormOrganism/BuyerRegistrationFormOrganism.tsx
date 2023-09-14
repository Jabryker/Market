import { FC } from "react";
import { useForm } from "react-hook-form";
import Terms from "../../atoms/Terms/Terms";
import { Button, CheckBox } from "../../atoms/";
import { GoogleAuthOrgamism } from "../";
import { BuyerRegistrationFormFields } from "../../molecules/";
import { IBuyerRegistrationFormOrganismProps } from "./BuyerRegistrationFormOrganism.interface";

export const BuyerRegistrationFormOrganism: FC<
  IBuyerRegistrationFormOrganismProps
> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <BuyerRegistrationFormFields register={register} errors={errors} />

      <div className="space-y-4">
        <Button type="submit">Зарегистрироваться</Button>
        <CheckBox name="rememberMe" />
        <GoogleAuthOrgamism />
        <Terms />
      </div>
    </form>
  );
};
