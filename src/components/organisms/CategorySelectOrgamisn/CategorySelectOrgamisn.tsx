import { FC, useState } from "react";
import { Card } from "antd";
import { CategorySelect } from "../../atoms"; // Путь к вашему CategorySelect компоненту

export const CategorySelectOrganism: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    // Здесь вы можете выполнить другие действия в зависимости от выбранной категории
    console.log(category);
  };

  return (
    <Card>
      <CategorySelect selectedCategory={selectedCategory} onChange={handleCategoryChange} />
      {/* Другой контент вашего компонента */}
    </Card>
  );
};
