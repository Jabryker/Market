import { FC } from "react";
import { Link } from "react-router-dom";
import {Button} from "../../components/atoms/Button/Button";
import styles from "./RegistrationScreen.module.scss";

const RegistrationScreen: FC = () => {
  return (
    <div className={styles.registrationScreenContainer}>
      <h1 className={styles.registrationScreenTitle}>
          Добро пожаловать в <span>MarketKG</span>
      </h1>
      <p className={styles.registrationScreenText}>В качестве кого вы хотите зарегистрироваться?</p>
      <div className={styles.registrationScreenBtns}>
        <Link to="/registration/buyer"><Button type="submit">Покупатель</Button></Link>
        <span>или</span>
        <Link to="/registration/seller"><Button type="submit">Продавец</Button></Link>
      </div>
    </div>
  );
};

export default RegistrationScreen;
