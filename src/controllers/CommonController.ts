import axios, { AxiosResponse } from "axios";

const baseApiUrl = process.env.REACT_APP_API_URL;

const CommonController = {
  getNews: async () => {
    try {
      const response: AxiosResponse = await axios.get(`${baseApiUrl}/api/v1/news/news-list?limit=2`);
      console.log(response);
      return response.data.results;
    } catch (error) {
      throw error;
    }
  },
  getArticles: async () => {
    try {
      const response: AxiosResponse = await axios.get(`${baseApiUrl}/api/v1/news/articles/?limit=2`);
      console.log(response);
      return response.data.results;
    } catch (error) {
      throw error;
    }
  },
};

export default CommonController;
