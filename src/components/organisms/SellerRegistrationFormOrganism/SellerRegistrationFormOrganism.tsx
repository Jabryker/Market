import { FC } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../atoms/";
import { SellerRegistrationFormFields } from "../../molecules/";
import { ISellerRegistrationFormOrganismProps } from "./SellerRegistrationFormOrganism.interface";

export const SellerRegistrationFormOrganism: FC<ISellerRegistrationFormOrganismProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SellerRegistrationFormFields register={register} errors={errors} />
      <Button type="submit">Register Seller</Button>
    </form>
  );
};
