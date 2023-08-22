import { FC } from "react";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import AuthController from "../../../controllers/AuthController";

const googleClientId = "207861578408-kstr5g00ce40gc8jei84qoq6jddv4909.apps.googleusercontent.com";

export const GoogleAuthOrgamism: FC = () => {
  const handleGoogleAuthSuccess = async (credentialResponse: any) => {
    try {
      const googleData = jwt_decode(credentialResponse.credential ?? "");
      console.log(googleData);

      await AuthController.googleAuth(googleData);
    } catch (error) {
      console.error("Ошибка", error);
    }
  };

  return (
    <div style={{ marginTop: "32px" }}>
      <GoogleOAuthProvider clientId={googleClientId}>
        <GoogleLogin
          onSuccess={handleGoogleAuthSuccess}
          onError={() => {
            console.log("Ошибка входа");
          }}
        />
      </GoogleOAuthProvider>
    </div>
  );
};
