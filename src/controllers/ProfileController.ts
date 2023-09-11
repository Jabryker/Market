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
  fetchUserProfile: async (userType: UserType, userId: string): Promise<IUserProfile | IUser> => {
    try {
      let endpoint = "";
      if (userType === UserType.Buyer) {
        endpoint = `/api/v1/accounts/users/${userId}`;
      } else {
        endpoint = `/api/v1/accounts/sellers/${userId}`;
      }

      const response: AxiosResponse<IUserProfile | IUser> = await axios.get(`${basicApi}${endpoint}`);
      return response.data;
    } catch (error) {
      throw new Error("Error fetching user profile");
    }
  },
  updateProfile: async (userType: UserType, userId: string, updatedUserData: IUserProfile): Promise<void> => {
    try {
      let endpoint = "";
      if (userType === UserType.Buyer) {
        endpoint = `/api/v1/accounts/users/${userId}`;
      } else {
        endpoint = `/api/v1/accounts/sellers/${userId}`;
      }

      await axios.patch(`${basicApi}${endpoint}`, updatedUserData);

    } catch (error) {
      throw new Error("Error updating user profile");
    }
  },
};
