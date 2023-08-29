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
    // <Select
    //   style={{ width: 200 }}
    //   placeholder="Выберите категорию"
    //   value={selectedCategory}
    //   onChange={onChange}
    // >
    //   {categories.map((category, index) => (
    //     <Option key={index} value={category}>
    //       {category}
    //     </Option>
    //   ))}
    // </Select>
    <div>
      {categories.map((category, index) => (
        <Select key={index} value={category}>
          {category}
        </Select>
      ))}
    </div>
  );
};
