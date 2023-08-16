import {FC} from "react";
import { useForm, useWatch } from "react-hook-form";
import Input from "../../atoms/Input/Input";
import Select from "../../atoms/Select/Select";
import { ISellerRegistrationFormProps } from "./SellerRegistrationFormFields.interface";

const SellerRegistrationFormFields: FC<ISellerRegistrationFormProps> = ({ register, errors }) => {
  const { control, register: formRegister} = useForm({
    defaultValues: {
      type: "Physical",
    },
  });

  const userType = useWatch({
    control,
    name: "type",
  });

  return (
    <>
      <Select label="Select Type" name="type" options={["Physical", "Legal"]} register={formRegister} />
      <Input label="Email" name="email" type="email" register={register} error={errors.email?.message} />
      <Input label="Username" name="username" type="text" register={register} error={errors.username?.message} />
      <Input label="Password" name="password" type="password" register={register} error={errors.password?.message} />
      <Input label="Confirm Password" name="confirmPassword" type="password" register={register} error={errors.confirmPassword?.message} />
      <Input label="INN" name="inn" type="number" register={register} error={errors.inn?.message} />
      {userType === "Legal" && (
        <Input label="Certificate" name="certificate" type="number" register={register} error={errors.certificate?.message} />
      )}
    </>
  );
};

export default SellerRegistrationFormFields;

// TODO: add placeholder