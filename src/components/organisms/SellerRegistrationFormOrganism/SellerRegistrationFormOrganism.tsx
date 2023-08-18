import {FC} from "react";
import {useForm} from "react-hook-form";
import {Button} from "../../atoms/Button/Button";
import GoogleAuthOrgamism from "../GoogleAuthOrgamism/GoogleAuthOrgamism";
import SellerRegistrationFormFields from "../../molecules/SellerRegistrationFormFields/SellerRegistrationFormFields";
import {ISellerRegistrationFormOrganismProps} from "./SellerRegistrationFormOrganism.interface";

const SellerRegistrationFormOrganism: FC<ISellerRegistrationFormOrganismProps> = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SellerRegistrationFormFields register={register} errors={errors} />
      <Button type="submit">Register Seller</Button>
      <GoogleAuthOrgamism />
    </form>
  );
};

export default SellerRegistrationFormOrganism;