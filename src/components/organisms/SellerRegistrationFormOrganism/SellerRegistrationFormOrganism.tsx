import {FC} from "react";
import {useForm} from "react-hook-form";
import SellerRegistrationFormFields from "../../molecules/SellerRegistrationFormFields/SellerRegistrationFormFields";
import {ISellerRegistrationFormOrganismProps} from "./SellerRegistrationFormOrganism.interface";


const SellerRegistrationFormOrganism: FC<ISellerRegistrationFormOrganismProps> = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SellerRegistrationFormFields register={register} errors={errors} />
      <button type="submit">Register Seller</button>
    </form>
  );
};

export default SellerRegistrationFormOrganism;