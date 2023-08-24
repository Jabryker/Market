import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { HelpText } from "../../components/atoms/";
import { LoginFormOrganism, GoogleAuthOrgamism } from "../../components/organisms/";
import { ILoginData } from "../../controllers/interfaces/LoginData.interface";
import AuthController from "../../controllers/AuthController";

import styles from "./LoginPageTemplate.module.scss";

export const LoginPageTemplate: FC = () => {
  const navigate = useNavigate();

  const handleLoginSubmit = async (loginData: ILoginData) => {
    await AuthController.login(loginData, navigate);
  };

  return (
    <div className={styles.loginPage}>
      <h2 className={styles.loginPageTitle}>Войти</h2>
      <LoginFormOrganism onSubmit={handleLoginSubmit} />
      <GoogleAuthOrgamism />
      <HelpText linkTo="/registration" linkText="Создать аккаунт">
        Нет ещё аккаунта?
      </HelpText>
    </div>
  );
};
