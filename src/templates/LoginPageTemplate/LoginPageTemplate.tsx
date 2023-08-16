import { FC } from "react";
import LoginFormOrganism from "../../components/organisms/LoginFormOrganism/LoginFormOrganism";
import {ILoginData} from "../../controllers/interfaces/LoginData.interface";
import AuthController from "../../controllers/AuthController";

const LoginPageTemplate: FC = () => {
  const handleLoginSubmit = (loginData: ILoginData) => {
    AuthController.login(loginData);
  };

  return (
    <div>
      <h2>Login page</h2>
      <LoginFormOrganism onSubmit={handleLoginSubmit} /> 
    </div>
  );
};

export default LoginPageTemplate;
