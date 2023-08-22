import { FC } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../atoms/";
import styles from "./NotFoundFields.module.scss";

const NotFoundFields: FC = () => {
  return (
    <div className={styles.NotFoundFieldsWrapper}>
      <h1 className={styles.NotFoundFieldsWrapperTitle}>404 Not Found</h1>
      <span className={styles.NotFoundFieldsWrapperSubTitle}>
        Your visited page not found. You may go home page.
      </span>

      <Link to="/">
        <Button type="submit">Вернуться на главную</Button>
      </Link>
    </div>
  );
};

export default NotFoundFields;
