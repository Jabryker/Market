import { FC, useEffect, useState } from "react";
import { Select } from "antd";
import HeaderController from "../../../controllers/HeaderController";
import {displayErrorToast} from "../displayErrorToast/displayErrorToast";
import { ICategorySelectProps, ICategory } from "./CategorySelect.interface";

export const CategorySelect: FC<ICategorySelectProps> = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoryData = await HeaderController.getCategories();
        setCategories(categoryData);
      } catch (error) {
        displayErrorToast("Ошибка при получении категорий ");
      }
    };

    fetchCategories();
  }, []);

  return (
    <div>
      {categories.map((category) => (
        <Select key={category.id} value={category.name} size="large">
          {category.children?.map((child) => (
            <Select.Option key={child.id} value={child.name}>
              {child.name}
            </Select.Option>
          ))}
        </Select>
      ))}
    </div>
  );
};
