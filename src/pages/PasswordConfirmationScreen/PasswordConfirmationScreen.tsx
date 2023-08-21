import { FC } from "react";
import HelpText from "../../components/atoms/HelpText/HelpText";
import styles from "./PasswordConfirmationScreen.module.scss";

const PasswordConfirmationScreen: FC = () => {
  return (
    <div className={styles.PassConfWrapper}>
      <h2 className={styles.PassConfTitle}>Потвердите вашу почту</h2>
      <p className={styles.PassConfSubTitle}>
        Письмо с подтверждением было отправлено на example@gamil.com. Пожалуйста, перейдите по
        ссылке внутри письма, чтобы начать использовать Marketplace.
      </p>
      <div className={styles.PassConfComWrapper}>
        <button>
          <span>Отправить письмо ещё раз</span>
        </button>
        <HelpText linkTo="/" linkText="Свяжитесь с нами">
          Есть жалобы?
        </HelpText>
      </div>
    </div>
  );
};

export default PasswordConfirmationScreen;
