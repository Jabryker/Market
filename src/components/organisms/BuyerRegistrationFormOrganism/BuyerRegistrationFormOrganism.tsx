import {FC} from "react";
import { useForm } from "react-hook-form";
import GoogleLoginLogic from "../../../templates/GoogleLoginLogic/GoogleLoginLogic";
import {Button} from "../../atoms/Button/Button";
import BuyerRegistrationFormFields from "../../molecules/BuyerRegistrationFormFields/BuyerRegistrationFormFields";
import {IBuyerRegistrationFormOrganismProps} from "./BuyerRegistrationFormOrganism.interface";


const BuyerRegistrationFormOrganism: FC<IBuyerRegistrationFormOrganismProps> = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors }  } = useForm();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <BuyerRegistrationFormFields register={register} errors={errors} />
      <div style={{ marginTop: "48px" }}>
        <Button type="submit">Создать аккаунт</Button>
        <GoogleLoginLogic>Создать аккаунт</GoogleLoginLogic>
      </div>
    </form>
  );
};

export default BuyerRegistrationFormOrganism;