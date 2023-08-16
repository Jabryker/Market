import { UseFormRegister, FieldErrors } from "react-hook-form";

export interface ISellerRegistrationFormProps {
  register: UseFormRegister<Record<string, any>>;
  errors: FieldErrors<Record<string, any>>;
}
