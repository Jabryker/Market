import React, { FC, useState } from "react";
import LoginFormOrganism from "../../components/organisms/LoginFormOrganism/LoginFormOrganism";
import { ILoginData } from "../../controllers/interfaces/LoginData.interface";
import AuthController from "../../controllers/AuthController";

import styles from "./LoginPageTemplate.module.scss";

const LoginPageTemplate: FC = () => {
  const [rememberMe, setRememberMe] = useState(false);

  const handleLoginSubmit = async (loginData: ILoginData) => {
    await AuthController.login(loginData, rememberMe);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <div className={styles.loginPage}>
      <h2 className={styles.loginPageTitle}>Войти</h2>
      <LoginFormOrganism onSubmit={handleLoginSubmit} />
      <label>
        <input
          type="checkbox"
          checked={rememberMe}
          onChange={handleRememberMeChange}
        />
                Remember Me
      </label>
    </div>
  );
};

export default LoginPageTemplate;
