import { FC } from "react";
import { Select } from "antd";
import { ICategorySelectProps } from "./CategorySelect.interface";

// const { Option } = Select;

export const CategorySelect: FC<ICategorySelectProps> = ({ selectedCategory, onChange }) => {
  const categories = [
    "Акции",
    "Кухонное оборудование",
    "Хлебопекарное",
    "Холодильное",
    "Прачечное",
    "Вспомогательное",
    "Собственная продукция",
    "Комплектующие",
    "Атомарный design архитектура",
  ];

  return (
    <div>
      {categories.map((category, index) => (
        <Select key={index} value={category}>
          {category}
        </Select>
      ))}
    </div>
  );
};
