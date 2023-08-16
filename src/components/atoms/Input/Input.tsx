import {FC} from "react";
import { IInputProps } from "./Input.interface";

const Input: FC<IInputProps> = ({ type, name, label, placeholder, error, register }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        {...register(name)}
      />
      {error && <div>{error}</div>}
    </div>
  );
};

export default Input;
