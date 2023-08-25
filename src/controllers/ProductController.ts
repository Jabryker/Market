import axios, { AxiosResponse } from "axios";

// const baseApiUrl = process.env.REACT_APP_API_URL;

const ProductController = {
  getProductSale: async () => {
    try {
      const responseLogin: AxiosResponse = await axios.get(
        "http://16.171.197.36/api/v1/stores/products/",
      );
      console.log(responseLogin);
      return responseLogin.data;
    } catch (error) {
      throw error;
    }
  },
  getProductBest: async () => {
    try {
      const responseLogin: AxiosResponse = await axios.get(
        "http://16.171.197.36/api/v1/stores/products/",
      );
      console.log(responseLogin);
      return responseLogin.data;
    } catch (error) {
      throw error;
    }
  },
};

export default ProductController;
