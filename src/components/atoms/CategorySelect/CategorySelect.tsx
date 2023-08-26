import { FC } from "react";
import { Select } from "antd";

const { Option } = Select;

interface CategorySelectProps {
  selectedCategory: string | null;
  onChange: (category: string) => void;
}

export const CategorySelect: FC<CategorySelectProps> = ({ selectedCategory, onChange }) => {
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
    <Select
      style={{ width: 200 }}
      placeholder="Выберите категорию"
      value={selectedCategory}
      onChange={onChange}
    >
      {categories.map((category, index) => (
        <Option key={index} value={category}>
          {category}
        </Option>
      ))}
    </Select>
  );
};
