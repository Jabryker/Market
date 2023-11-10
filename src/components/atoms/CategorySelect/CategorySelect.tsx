import { Select } from "antd";
import { FC, useEffect, useState } from "react";
import HeaderController from "../../../controllers/HeaderController";
import { displayErrorToast } from "../displayErrorToast/displayErrorToast";
import { ICategory, ICategorySelectProps } from "./CategorySelect.interface";

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
      <div>
        {categories.map((category) => (
          <Select key={category.id} value={category.name} size="large" className="mx-1">
            {category.children?.map((child) => (
              <Select.Option key={child.id} value={child.name}>
                {child.name}
              </Select.Option>
            ))}
          </Select>
        ))}
      </div>
    </div>
  );
};
