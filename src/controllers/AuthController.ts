import axios, { AxiosResponse } from "axios";
import { displaySuccessToast, displayErrorToast } from "../components/atoms";
import handleServerError from "./helpers/handleServerError";
import { ILoginData } from "./interfaces/LoginData.interface";
import { IRegisterData } from "./interfaces/RegisterData.interface";
import { ISellerData } from "./interfaces/SellerData.interface";

// const baseApiUrl = process.env.REACT_APP_API_URL;
const baseApiUrl = "http://16.171.197.36/";

const AuthController = {
  login: async (loginData: ILoginData, navigate: (path: string) => void) => {
    try {
      const responseLogin: AxiosResponse = await axios.post(
        `${baseApiUrl}/api/v1/auth/token/`,
        loginData,
      );
      // const { refresh, access } = responseLogin.data;

      // if (rememberMe) {
      //   localStorage.setItem("refresh", refresh);
      //   localStorage.setItem("access", access);
      // } else {
      //   sessionStorage.setItem("refresh", refresh);
      //   sessionStorage.setItem("access", access);
      // }
      if (responseLogin.status === 200) {
        navigate("/");
        displaySuccessToast("Logged in successfully");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        handleServerError(error);
      } else {
        displayErrorToast("An unknown error occurred. Please try again later.");
      }
    }
  },
  register: async (registerData: IRegisterData, navigate: (path: string) => void) => {
    try {
      const { confirmPassword, ...registerPayload } = registerData;
      const responseRegister: AxiosResponse = await axios.post(
        `${baseApiUrl}/api/v1/accounts/users/`,
        registerPayload,
      );

      if (responseRegister.status === 200 || responseRegister.status === 201) {
        navigate("/");
        displaySuccessToast("Registeration in successfully");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        handleServerError(error);
      } else {
        displayErrorToast("An unknown error occurred. Please try again later.");
      }
    }
  },
  seller: async (sellerData: ISellerData, navigate: (path: string) => void) => {
    const payload = {
      email: sellerData.email,
      username: sellerData.username,
      password: sellerData.password,
      INN: sellerData.inn !== undefined ? parseInt(sellerData.inn, 10) : null,
      certificate_number:
        sellerData.certificate !== undefined ? parseInt(sellerData.certificate, 10) : null,
    };

    const responseSeller: AxiosResponse = await axios.post(
      `${baseApiUrl}/api/v1/accounts/sellers/`,
      payload,
    );

    if (responseSeller.status === 200 || responseSeller.status === 201) {
      navigate("/");
      displaySuccessToast("Logged in successfully");
    }
  },
  googleAuth: async (googleData: any) => {
    const googlePayload = {
      email: googleData.email,
      username: googleData.given_name,
      password: googleData.exp,
    };

    try {
      console.log("Данные Google", googleData);

      // Проверяем, существует ли пользователь с таким email
      const userExistsResponse = await axios.get(
        `${baseApiUrl}/api/v1/accounts/check-user-exists/?email=${googleData.email}`,
      );

      const userExists = userExistsResponse.data.exists;

      if (userExists) {
        // Если пользователь существует, выполняем вход
        const loginResponse: AxiosResponse = await axios.post(
          `${baseApiUrl}/api/v1/accounts/login/`,
          googlePayload,
        );
        displaySuccessToast("Logged in successfully");
      } else {
        // Если пользователя нет, выполняем регистрацию
        const responseGoogleAuth: AxiosResponse = await axios.post(
          `${baseApiUrl}/api/v1/accounts/users/`,
          googlePayload,
        );
        console.log(responseGoogleAuth);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        handleServerError(error);
      } else {
        displayErrorToast("An unknown error occurred. Please try again later.");
      }
    }
  },

  requestPasswordReset: async (email: string) => {
    try {
      const response: AxiosResponse = await axios.post(
        `${baseApiUrl}/api/v1/accounts/password-reset/`,
        { email },
      );

      if (response.status === 200) {
        console.log("Password reset email sent successfully");

        return true;
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        handleServerError(error);
      } else {
        displayErrorToast("An unknown error occurred. Please try again later.");
      }
    }
    return false;
  },

  validatePasswordResetToken: async (token: string) => {
    try {
      const response: AxiosResponse = await axios.post(
        `${baseApiUrl}/api/v1/accounts/password-reset/validate_token/`,
        { token },
      );

      if (response.status === 200) {
        console.log("Password reset token validated successfully");
        return true;
      }
    } catch (error) {
      console.error("Error validating password reset token", error);
    }
    return false;
  },

  confirmPasswordReset: async (token: string, password: string) => {
    try {
      const response: AxiosResponse = await axios.post(
        `${baseApiUrl}/api/v1/accounts/password-reset/confirm/`,
        { token, password },
      );

      if (response.status === 200) {
        displaySuccessToast("Password reset confirmed successfully");
        // console.log("");
        return true;
      }
    } catch (error) {
      console.error("Error confirming password reset", error);
    }
    return false;
  },
};

export default AuthController;
