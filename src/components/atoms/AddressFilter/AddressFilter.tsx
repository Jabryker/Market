import { FC } from "react";
import { Input } from "antd";

interface AddressFilterProps {
    value: string;
    onChange: (value: string) => void;
}

export const AddressFilter: FC<AddressFilterProps> = ({ value, onChange }) => {
  return (
    <Input
      placeholder="Выберите адрес"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

