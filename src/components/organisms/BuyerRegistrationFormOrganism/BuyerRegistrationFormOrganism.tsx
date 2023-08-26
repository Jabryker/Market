import { FC } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../atoms/";
import { GoogleAuthOrgamism } from "../";
import { BuyerRegistrationFormFields } from "../../molecules/";
import { IBuyerRegistrationFormOrganismProps } from "./BuyerRegistrationFormOrganism.interface";

export const BuyerRegistrationFormOrganism: FC<IBuyerRegistrationFormOrganismProps> = ({
  onSubmit,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <BuyerRegistrationFormFields register={register} errors={errors} />

      <div className="space-y-4">
        <Button type="submit">Создать аккаунт</Button>

        <GoogleAuthOrgamism />
      </div>
    </form>
  );
};
