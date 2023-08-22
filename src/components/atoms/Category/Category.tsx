import React, { FC } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { ICategoryProps } from "./Category.interface";
import styles from "./Category.module.scss";

export const Category: FC<ICategoryProps> = ({ children, dropdownContent }) => {
  return (
    <div className={`p-3 rounded ${styles.category}`}>
      <Dropdown>
        <Dropdown.Toggle
          variant="secondary"
          id="dropdown-basic"
          className={styles.customDropdownToggle}
        >
          {children}
        </Dropdown.Toggle>
        <Dropdown.Menu>{dropdownContent}</Dropdown.Menu>
      </Dropdown>
    </div>
  );
};
