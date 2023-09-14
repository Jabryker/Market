import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { useForm, FieldValues } from "react-hook-form";
import Terms from "../../components/atoms/Terms/Terms";
import { GoogleAuthOrgamism } from "../../components/organisms/";
import { Button } from "../../components/atoms/Button/Button";
import { CheckBox, HelpText } from "../../components/atoms/";
import styles from "./RegistrationScreen.module.scss";

export const RegistrationScreen: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();
  const [role, setRole] = useState("");
  return (
    <div className={styles.grayImage}>
      <div className={styles.registrationPage}>
        <div className={styles.registrationPageForm}>
          <h2 className={styles.registrationPageTitle}>Выберите роль</h2>
          <HelpText linkTo="/login" linkText="Войти">
            У вас уже есть аккаунт?
          </HelpText>

          <div
            className={
              role === "/registration/buyer"
                ? styles.buttonActive
                : styles.button
            }
            onClick={() => setRole("/registration/buyer")}
          >
            Покупатель
          </div>

          <div
            className={
              role === "/registration/seller"
                ? styles.buttonActive
                : styles.button
            }
            onClick={() => setRole("/registration/seller")}
          >
            Продавец
          </div>

          <Link to={role}>
            <Button type="submit">
              {role ? "Продолжить" : "Выберите роль"}
            </Button>
          </Link>
          <CheckBox name="rememberMe" />
          <GoogleAuthOrgamism />
          <Terms />
        </div>
      </div>
    </div>
  );
};
