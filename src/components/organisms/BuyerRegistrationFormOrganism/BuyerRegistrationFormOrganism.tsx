import {FC} from "react";
import { useForm } from "react-hook-form";
import {Button} from "../../atoms/Button/Button";
import GoogleAuthOrgamism from "../GoogleAuthOrgamism/GoogleAuthOrgamism";
import BuyerRegistrationFormFields from "../../molecules/BuyerRegistrationFormFields/BuyerRegistrationFormFields";
import {IBuyerRegistrationFormOrganismProps} from "./BuyerRegistrationFormOrganism.interface";


const BuyerRegistrationFormOrganism: FC<IBuyerRegistrationFormOrganismProps> = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors }  } = useForm();
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

export default BuyerRegistrationFormOrganism;