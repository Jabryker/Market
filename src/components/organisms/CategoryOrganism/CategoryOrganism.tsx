import { FC } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Category } from "../../atoms/";
import styles from "./CategoryOrganism.module.scss";

const CategoryOrganism: FC = () => {
  const dropdownContent = (
    <>
      <Dropdown.Item>Действие 1</Dropdown.Item>
      <Dropdown.Item>Действие 2</Dropdown.Item>
      <Dropdown.Item>Действие 3</Dropdown.Item>
    </>
  );

  return (
    <div className={styles.CategoryOrganismWrapper}>
      <Category dropdownContent={dropdownContent}>
        <span>Акции</span>
      </Category>

      <Category dropdownContent={dropdownContent}>
        <span>Кухонное оборудование</span>
      </Category>

      <Category dropdownContent={dropdownContent}>
        <span>Хлебопекарное</span>
      </Category>

      <Category dropdownContent={dropdownContent}>
        <span>Холодильное</span>
      </Category>

      <Category dropdownContent={dropdownContent}>
        <span>Прачечное</span>
      </Category>

      <Category dropdownContent={dropdownContent}>
        <span>Вспомогательное</span>
      </Category>

      <Category dropdownContent={dropdownContent}>
        <span>Собственная продукция</span>
      </Category>

      <Category dropdownContent={dropdownContent}>
        <span>Комплектующие</span>
      </Category>
    </div>
  );
};

export default CategoryOrganism;
