import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { BuyerRegistrationFormOrganism } from "../../components/organisms/";
import { HelpText } from "../../components/atoms/";
import AuthController from "../../controllers/AuthController";
import { IRegisterData } from "../../controllers/interfaces/RegisterData.interface";
import styles from "./BuyerRegistrationPageTemplate.module.scss";

export const BuyerRegistrationPageTemplate: FC = () => {
  const navigate = useNavigate();
  const handleBuyerSubmit = (registerData: IRegisterData) => {
    AuthController.register(registerData, navigate);
  };

  return (
    <div className={styles.grayImage}>
      <div className={styles.sellerRegister}>
        <div className={styles.sellerRegisterForm}>
          <h2 className={styles.sellerRegisterFormTitle}>Зарегистрироваться</h2>
          <HelpText linkTo="/login" linkText="Войти">
            У вас уже есть аккаунт?
          </HelpText>
          <BuyerRegistrationFormOrganism onSubmit={handleBuyerSubmit} />
        </div>
      </div>
    </div>
  );
};
