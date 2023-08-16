import {GoogleOAuthProvider, CredentialResponse} from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import GoogleLoginButton from "../../components/atoms/GoogleLoginButton/GoogleLoginButton";
import AuthController from "../../controllers/AuthController";

const googleClientId = "207861578408-kstr5g00ce40gc8jei84qoq6jddv4909.apps.googleusercontent.com";

interface IDecodedToken {
    email: string;
    name: string;
    sub: string;
    picture: string;
}

const GoogleLoginLogic = () => {
  const handleGoogleLoginSuccess = (credentialResponse: CredentialResponse) => {
    const accessToken = credentialResponse.credential;
    if (accessToken) {
      const decoded: IDecodedToken = jwt_decode(accessToken);
      console.log(decoded);

      const { email, name, sub, picture } = decoded;

      const postData = {
        email: email,
        username: name,
        password: sub,
        photo: picture,
      };
      AuthController.googleAuth(postData);
    } else {
      console.log("Access token missing");
    }
  };
  const handleGoogleLoginError = () => {
    console.log("Login Failed");
  };

  return (
    <GoogleOAuthProvider clientId={googleClientId}>
      <GoogleLoginButton
        onSuccess={handleGoogleLoginSuccess}
        onError={handleGoogleLoginError}
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleLoginLogic;