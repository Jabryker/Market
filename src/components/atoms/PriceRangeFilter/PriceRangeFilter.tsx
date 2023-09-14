import React, { FC } from "react";
import { Slider } from "antd";

interface PriceRangeFilterProps {
  minPrice: number;
  maxPrice: number;
  onChange: (values: [number, number]) => void; // Добавляем функцию onChange
}

export const PriceRangeFilter: FC<PriceRangeFilterProps> = ({ minPrice, maxPrice, onChange }) => {
  const handleChange = (values: [number, number]) => {
    // Передаем выбранные значения в родительский компонент
    onChange(values);
  };

  return (
    <Slider
      range
      min={minPrice}
      max={maxPrice}
      step={10}
      defaultValue={[minPrice, maxPrice]}
      onChange={handleChange}
    />
  );
};
