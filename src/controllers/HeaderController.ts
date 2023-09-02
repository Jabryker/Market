import axios, { AxiosResponse } from "axios";

const baseApiUrl = process.env.REACT_APP_API_URL;

const HeaderController = {
  getCategories: async () => {
    try {
      const response: AxiosResponse = await axios.get(`${baseApiUrl}/api/v1/stores/categories/`);
      return response.data.results;
    } catch (error) {
      throw error;
    }
  },
};

export default HeaderController;
