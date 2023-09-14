import { FC } from "react";
import { useNavigate } from "react-router-dom";
import Terms from "../../components/atoms/Terms/Terms";
import { HelpText } from "../../components/atoms/";
import {
  LoginFormOrganism,
  GoogleAuthOrgamism,
} from "../../components/organisms/";
import { ILoginData } from "../../controllers/interfaces/LoginData.interface";
import AuthController from "../../controllers/AuthController";

import styles from "./LoginPageTemplate.module.scss";

export const LoginPageTemplate: FC = () => {
  const navigate = useNavigate();

  const handleLoginSubmit = async (loginData: ILoginData) => {
    await AuthController.login(loginData, navigate);
  };

  return (
    <div className={styles.grayImage}>
      <div className={styles.loginPage}>
        <div className={styles.loginPageForm}>
          <h2 className={styles.loginPageTitle}>Авторизоваться</h2>
          <HelpText linkTo="/registration" linkText="Создать аккаунт">
            Ещё не зарегистрированы?
          </HelpText>
          <LoginFormOrganism onSubmit={handleLoginSubmit} />
          <GoogleAuthOrgamism />
          <Terms />
        </div>
      </div>
    </div>
  );
};
