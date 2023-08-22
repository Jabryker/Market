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
    <form onSubmit={handleSubmit(onSubmit)}>
      <BuyerRegistrationFormFields register={register} errors={errors} />
      <div style={{ marginTop: "48px" }}>
        <Button type="submit">Создать аккаунт</Button>
        <GoogleAuthOrgamism />
      </div>
    </form>
  );
};
