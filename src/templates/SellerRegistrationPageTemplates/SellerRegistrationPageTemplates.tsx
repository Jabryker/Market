import {FC} from "react";
import SellerRegistrationFormOrganism from "../../components/organisms/SellerRegistrationFormOrganism/SellerRegistrationFormOrganism";
import {ISellerData} from "../../controllers/interfaces/SellerData.interface";
import AuthController from "../../controllers/AuthController";
import HelpText from "../../components/atoms/HelpText/HelpText";
import styles from "./SellerRegistrationPageTemplates.module.scss";

const SellerRegistrationPageTemplates: FC = () => {

  const handleSellerSubmit = (sellerData: ISellerData) => {
    // console.log("Submitted login data:", sellerData);
    AuthController.seller(sellerData);
  };

  return (
    <div className={styles.SellerRegistrationContainer}>
      <h2 className={styles.SellerRegistrationTitleText}>Регистрация</h2>
      <SellerRegistrationFormOrganism onSubmit={handleSellerSubmit} />
      <HelpText linkTo="/login" linkText="Войти">У вас есть аккаунт?</HelpText>
    </div>
  );
};

export default SellerRegistrationPageTemplates;