import React, { FC } from "react";
import { Slider } from "antd";

interface PriceRangeFilterProps {
    minPrice: number;
    maxPrice: number;
    onChange: (values: [number, number]) => void;
}

export const PriceRangeFilter: FC<PriceRangeFilterProps> = ({ minPrice, maxPrice, onChange }) => {
  const handleChange = (values: [number, number]) => {
    onChange(values);
    console.log("Новое значение PriceRangeFilter:", values);
  };

  return (
    <Slider
      range
      min={0}
      max={1000}
      step={10}
      defaultValue={[minPrice, maxPrice]}
      onChange={handleChange}
    />
  );
};