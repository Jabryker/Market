import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { HelpText } from "../../components/atoms/";
import {
  LoginFormOrganism,
  GoogleAuthOrgamism,
} from "../../components/organisms/";
import { ILoginData } from "../../controllers/interfaces/LoginData.interface";
import AuthController from "../../controllers/AuthController";
import { RootState } from "../../store/store";

import styles from "./LoginPageTemplate.module.scss";

export const LoginPageTemplate: FC = () => {
  const navigate = useNavigate();

  const rememberMe = useSelector((state: RootState) => state.auth.rememberMe);

  const handleLoginSubmit = async (loginData: ILoginData) => {
    await AuthController.login(loginData, navigate, rememberMe);
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
        </div>
      </div>
    </div>
  );
};
