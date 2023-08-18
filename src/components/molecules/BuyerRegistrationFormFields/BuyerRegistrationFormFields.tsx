import {FC} from "react";
import Input from "../../atoms/Input/Input";
import { IBuyerRegistrationFormProps } from "./BuyerRegistrationFormFields.interface";

const BuyerRegistrationFormFields: FC<IBuyerRegistrationFormProps> = ({ register, errors }) => {

  return (
    <>
      <Input 
        label="Username"
        name="username"
        type="text" 
        register={register} 
        error={errors.username?.message}
      />
      <Input 
        label="Email" 
        name="email" 
        type="email" 
        register={register} 
        error={errors.email?.message} />
      <Input 
        label="Password" 
        name="password" 
        type="password" 
        register={register} 
        error={errors.password?.message} />
      <Input 
        label="Confirm Password" 
        name="confirmPassword" 
        type="password" 
        register={register} 
        error={errors.confirmPassword?.message} />
    </>
  );
};

export default BuyerRegistrationFormFields;
