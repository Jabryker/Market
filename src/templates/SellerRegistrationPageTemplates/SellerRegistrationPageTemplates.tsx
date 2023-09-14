import { FC } from "react";
import { useNavigate } from "react-router-dom";
import Terms from "../../components/atoms/Terms/Terms";
import {
  GoogleAuthOrgamism,
  SellerRegistrationFormOrganism,
} from "../../components/organisms/";
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
    <div className={styles.grayImage}>
      <div className={styles.sellerRegister}>
        <div className={styles.sellerRegisterForm}>
          <h2 className={styles.SellerRegistrationTitleText}>Регистрация</h2>
          <SellerRegistrationFormOrganism onSubmit={handleSellerSubmit} />
          <GoogleAuthOrgamism />
          <Terms />
        </div>
      </div>
    </div>
  );
};
