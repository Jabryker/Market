import {FC} from "react";
import BuyerRegistrationFormOrganism from "../../components/organisms/BuyerRegistrationFormOrganism/BuyerRegistrationFormOrganism";
import HelpText from "../../components/atoms/HelpText/HelpText";
import AuthController from "../../controllers/AuthController";
import {IRegisterData} from "../../controllers/interfaces/RegisterData.interface";
import styles from "./BuyerRegistrationPageTemplate.module.scss";

const BuyerRegistrationPageTemplate: FC = () => {

  const handleBuyerSubmit = (registerData: IRegisterData) => {
    // console.log("Submitted login data:", data);
    AuthController.register(registerData);
  };

  return (
    <div className={styles.BuyerRegistrationPageTemplate}>
      <h2 className={styles.BuyerRegistrationPageTemplateTitle}>Регистрация</h2>
      <BuyerRegistrationFormOrganism onSubmit={handleBuyerSubmit} />
      <HelpText linkTo="/login" linkText="Войти">У вас есть аккаунт?</HelpText>
    </div>
  );
};

export default BuyerRegistrationPageTemplate;