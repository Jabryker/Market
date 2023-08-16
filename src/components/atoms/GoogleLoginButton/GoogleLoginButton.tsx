import { FC } from "react";
// import { GoogleLogin } from "@react-oauth/google";
import { useGoogleLogin } from "@react-oauth/google";
import { IGoogleLoginButtonProps } from "./GoogleLoginButton.interface";
import styles from "./GoogleLoginButton.module.scss";

const GoogleLoginButton: FC<IGoogleLoginButtonProps> = ({ onSuccess, onError }) => {
  // return (
  //   <GoogleLogin
  //     onSuccess={onSuccess}
  //     onError={onError}
  //     className={styles.googleLoginButton}
  //   />
  // );

  const login = useGoogleLogin({
    onSuccess: onSuccess,
    onError: onError,
  });

  return (
    <button className={styles.googleLoginButton} onClick={() => login()}>
      <span className={styles.icon} />
      Вход с аккаунтом Google
    </button>
  );
};

export default GoogleLoginButton;
