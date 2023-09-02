import React, { FC } from "react";
import { Slider } from "antd";

interface PriceRangeFilterProps {
    minPrice: number;
    maxPrice: number;
    onChange: (values: [number, number]) => void;
}

export const PriceRangeFilter: FC<PriceRangeFilterProps> = ({ minPrice, maxPrice, onChange }) => {
  return (
    <Slider
      range
      min={0}
      max={1000}
      step={10}
      defaultValue={[minPrice, maxPrice]}
      onChange={(values) => onChange(values as [number, number])}
    />
  );
};
