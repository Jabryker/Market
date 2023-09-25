import { Select } from "antd";
import { FC, useEffect, useState } from "react";
import HeaderController from "../../../controllers/HeaderController";
import { displayErrorToast } from "../displayErrorToast/displayErrorToast";
import { ICategory, ICategorySelectProps } from "./CategorySelect.interface";

export const CategorySelect: FC<ICategorySelectProps> = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [isScrolled, setIsScrolled] = useState(false);

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

  const handleScroll = () => {
    // Проверяем, находится ли пользователь в зоне скролла
    if (window.scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    // Добавляем слушателя события скролла при монтировании компонента
    window.addEventListener("scroll", handleScroll);

    // Удаляем слушателя события скролла при размонтировании компонента
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        isScrolled
          ? "fixed top-50 flex justify-center items-center z-50"
          : "flex justify-center items-center"
      } w-full`}
    >
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
