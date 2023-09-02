import React, { FC } from "react";
import { Input } from "antd";

interface NameFilterProps {
    value: string;
    onChange: (value: string) => void;
}

export const NameFilter: FC<NameFilterProps> = ({ value, onChange }) => {
  return (
    <Input
      placeholder="Поиск по названию"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};