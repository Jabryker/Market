import {ChangeEvent} from "react";

export interface ICheckBox {
  name: string;
  label?: string;
  error?: any;

  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
