import axios, { AxiosResponse } from "axios";

export interface IUser {
  id: number;
  email: string;
  username: string;
  phone_number?: string;
  photo?: string;
  address?: string;
  birthday?: string;
  job?: string;
  specialization?: string;
  whatsapp?: string;
  telegram?: string;
  role?: string;
  password?: string;
  INN?: number;
  type?: string;
  certificate_number?: number;
}

export interface IUserProfile extends IUser {
  certificate_number?: number;
  INN?: number;
  type?: string;
}

export enum UserType {
  Buyer = "buyer",
  Seller = "seller",
}

const basicApi = process.env.REACT_APP_API_URL;

export const ProfileController = {
  fetchUserProfile: async (userId: string): Promise<IUserProfile | IUser> => {
    try {
      // Retrieve the user type from local storage
      const userInfo = localStorage.getItem("userInfo");
      if (!userInfo) {
        throw new Error("User information not found in local storage");
      }
      
      const { role } = JSON.parse(userInfo);
      const { id } = JSON.parse(userInfo)      

      let endpoint = "";
      if (role === "B") {
        endpoint = `/api/v1/accounts/users/${id}/`;
      } else if (role === "S") {
        endpoint = `/api/v1/accounts/sellers/${id}/`;
      } else {
        throw new Error("Invalid user role in local storage");
      }

      const response: AxiosResponse<IUserProfile | IUser> = await axios.get(
        `${basicApi}${endpoint}`
      );
      return response.data;
    } catch (error) {
      throw new Error("Error fetching user profile: " + error);
    }
  },
  updateProfile: async (
    userId: string,
    updatedUserData: IUserProfile
  ): Promise<void> => {
    try {
      // Retrieve the user type from local storage
      const userInfo = localStorage.getItem("userInfo");
      if (!userInfo) {
        throw new Error("User information not found in local storage");
      }
      
      const { role } = JSON.parse(userInfo);

      let endpoint = "";
      if (role === "B") {
        endpoint = `/api/v1/accounts/users/${userId}`;
      } else if (role === "S") {
        endpoint = `/api/v1/accounts/sellers/${userId}`;
      } else {
        throw new Error("Invalid user role in local storage");
      }

      await axios.patch(`${basicApi}${endpoint}`, updatedUserData);
    } catch (error) {
      throw new Error("Error updating user profile: " + error);
    }
  },
};
