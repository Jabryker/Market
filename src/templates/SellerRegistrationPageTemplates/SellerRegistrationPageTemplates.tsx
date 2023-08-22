import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { SellerRegistrationFormOrganism } from "../../components/organisms/";
import { ISellerData } from "../../controllers/interfaces/SellerData.interface";
import AuthController from "../../controllers/AuthController";
import { HelpText } from "../../components/atoms/";
import styles from "./SellerRegistrationPageTemplates.module.scss";

export const SellerRegistrationPageTemplates: FC = () => {
  const navigate = useNavigate();
  const handleSellerSubmit = (sellerData: ISellerData) => {
    AuthController.seller(sellerData, navigate);
  };

  return (
    <div className={styles.SellerRegistrationContainer}>
      <h2 className={styles.SellerRegistrationTitleText}>Регистрация</h2>
      <SellerRegistrationFormOrganism onSubmit={handleSellerSubmit} />
      <HelpText linkTo="/login" linkText="Войти">
        У вас есть аккаунт?
      </HelpText>
    </div>
  );
};
