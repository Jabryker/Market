import axios, { AxiosResponse } from "axios";
import { ILoginData } from "./interfaces/LoginData.interface";
import { IRegisterData } from "./interfaces/RegisterData.interface";
import { ISellerData } from "./interfaces/SellerData.interface";

const baseApiUrl = process.env.REACT_APP_API_URL;

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
        return navigate("/");
      }
      console.log(responseLogin);
    } catch (error) {
      console.error("Error", error);
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
        return navigate("/");
      }
    } catch (error) {
      console.error("Error", error);
    }
  },
  seller: async (sellerData: ISellerData, navigate: (path: string) => void) => {
    const payload = {
      email: sellerData.email,
      username: sellerData.username,
      password: sellerData.password,
      INN: sellerData.inn !== undefined ? parseInt(sellerData.inn, 10) : null,
      certificate_number:
        sellerData.certificate !== undefined
          ? parseInt(sellerData.certificate, 10) // Преобразуем в числовой тип
          : null,
    };

    const responseSeller: AxiosResponse = await axios.post(
      `${baseApiUrl}/api/v1/accounts/sellers/`,
      payload,
    );

    if (responseSeller.status === 200 || responseSeller.status === 201) {
      return navigate("/");
    }
  },
  googleAuth: async (googleData: any) => {
    const googlePayload = {
      email: googleData.email,
      username: googleData.name,
      picture: googleData.picture,
    };
    console.log(googlePayload);
    try {
      console.log("google data", googleData);
      const responseGoogleAuth: AxiosResponse = await axios.post(
        `${baseApiUrl}/api/v1/accounts/users/`,
        googlePayload,
      );
      console.log(responseGoogleAuth);
    } catch (error) {
      console.error("Error", error);
    }
  },
};

export default AuthController;
