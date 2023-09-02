import React, { FC } from "react";
import { Select } from "antd";

interface CategoryFilterProps {
    categories: string[];
    selectedCategory: string;
    onChange: (value: string) => void;
}

export const CategoryFilter: FC<CategoryFilterProps> = ({ categories, selectedCategory, onChange }) => {
  return (
    <Select value={selectedCategory} onChange={onChange}>
      {categories.map((category) => (
        <Select.Option key={category} value={category}>
          {category}
        </Select.Option>
      ))}
    </Select>
  );
};