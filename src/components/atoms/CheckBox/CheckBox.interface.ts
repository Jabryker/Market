import { UseFormRegister } from "react-hook-form";

export interface ICheckBox {
  name: string;
  label?: string;
  error?: any;

  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
