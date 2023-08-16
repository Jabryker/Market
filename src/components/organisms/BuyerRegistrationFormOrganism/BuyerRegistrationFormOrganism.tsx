import {FC} from "react";
import { useForm } from "react-hook-form";
import {Button} from "../../atoms/Button/Button";
import BuyerRegistrationFormFields from "../../molecules/BuyerRegistrationFormFields/BuyerRegistrationFormFields";
import {IBuyerRegistrationFormOrganismProps} from "./BuyerRegistrationFormOrganism.interface";

const BuyerRegistrationFormOrganism: FC<IBuyerRegistrationFormOrganismProps> = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors }  } = useForm();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <BuyerRegistrationFormFields register={register} errors={errors} />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default BuyerRegistrationFormOrganism;