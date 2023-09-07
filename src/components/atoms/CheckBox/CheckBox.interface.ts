import { UseFormRegister } from "react-hook-form";

export interface ICheckBox {
  name: string;
  label?: string;
  error?: any;
  register: UseFormRegister<any>;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
