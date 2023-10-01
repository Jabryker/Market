import axios from 'axios';
import { IProfileData } from '../interfaces/ProfileData.interface';

const basicApi = process.env.REACT_APP_API_URL ?? '';

const ProfileController = {
  getProfileData: async (userId: string, userRole: string, token: string): Promise<IProfileData> => {
    try {
      let response;
      if (userRole === 'S') {
        response = await axios.get(`${basicApi}/api/v1/accounts/sellers/${userId}/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } else {
        response = await axios.get(`${basicApi}/api/v1/accounts/users/${userId}/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      }
      return response.data as IProfileData;
    } catch (error) {
      throw new Error('Ошибка при получении данных профиля');
    }
  },

  updateProfileData: async (userId: number, userRole: any, token: string, profileData: any): Promise<any> => {
    try {
      let response;
      if (userRole === 'S') {
        response = await axios.patch(`${basicApi}/api/v1/accounts/sellers/${userId}/`, profileData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } else {
        response = await axios.patch(`${basicApi}/api/v1/accounts/users/${userId}/`, profileData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      }
      return response.data;
    } catch (error) {
      throw new Error('Произошла ошибка при сохранении изменений');
    }
  },
};

export default ProfileController;
