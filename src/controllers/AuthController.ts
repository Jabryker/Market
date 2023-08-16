import axios, {AxiosResponse} from "axios";
import { ILoginData } from "./interfaces/LoginData.interface";
import {IRegisterData} from "./interfaces/RegisterData.interface";
import {ISellerData} from "./interfaces/SellerData.interface";

const baseApiUrl = process.env.REACT_APP_API_URL;

const AuthController = {
  login: async (loginData: ILoginData, rememberMe: boolean) => {
    try {
      const responseLogin: AxiosResponse = await axios.post(`${baseApiUrl}/api/v1/auth/token/`, loginData);
      const { refresh, access } = responseLogin.data;

      if (rememberMe) {
        localStorage.setItem("refresh", refresh);
        localStorage.setItem("access", access);
      } else {
        sessionStorage.setItem("refresh", refresh);
        sessionStorage.setItem("access", access);
      }
    } catch (error) {
      console.error("Error", error);
    }
  },
  register: async (registerData: IRegisterData) => {
    try {
      const { confirmPassword, ...registerPayload } = registerData;
      const responseRegister: AxiosResponse = await axios.post(`${baseApiUrl}/api/v1/accounts/users/`, registerPayload);
      console.log(responseRegister);
    } catch (error) {
      console.error("Error", error);
    }
  },
  seller: async (sellerData: ISellerData) => {
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

    console.log("payload", payload);

    const responseSeller: AxiosResponse = await axios.post(`${baseApiUrl}/api/v1/accounts/sellers/`, payload);
    console.log(responseSeller);
  },
};

export default AuthController;