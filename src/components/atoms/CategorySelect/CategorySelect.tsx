import { FC, useEffect, useState } from "react";
import { Select } from "antd";
import HeaderController from "../../../controllers/HeaderController";
import { ICategorySelectProps } from "./CategorySelect.interface";

export const CategorySelect: FC<ICategorySelectProps> = () => {
  const [categories, setCategories] = useState<{ id: number; name: string }[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoryData = await HeaderController.getCategories();
        setCategories(categoryData);
      } catch (error) {
        console.error("Ошибка при получении категорий:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div>
      <Select>
        {categories.map((category) => (
          <Select.Option key={category.id} value={category.id}>
            {category.name}
          </Select.Option>
        ))}
      </Select>
    </div>
  );
};
