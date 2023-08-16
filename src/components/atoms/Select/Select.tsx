import { FC } from "react";
import { ISelectProps } from "./Select.interface";

const Select: FC<ISelectProps> = ({ label, name, options, register }) => {
  return (
    <div>
      <label>{label}</label>
      <select name={name} {...register(name)}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
