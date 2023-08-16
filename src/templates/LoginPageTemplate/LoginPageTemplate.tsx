import { FC } from "react";
import LoginFormOrganism from "../../components/organisms/LoginFormOrganism/LoginFormOrganism";
import { ILoginData } from "../../controllers/interfaces/LoginData.interface";
import AuthController from "../../controllers/AuthController";

import styles from "./LoginPageTemplate.module.scss";

const LoginPageTemplate: FC = () => {

  const handleLoginSubmit = async (loginData: ILoginData) => {
    await AuthController.login(loginData);
  };

  return (
    <div className={styles.loginPage}>
      <h2 className={styles.loginPageTitle}>Войти</h2>
      <LoginFormOrganism onSubmit={handleLoginSubmit} />
    </div>
  );
};

export default LoginPageTemplate;
