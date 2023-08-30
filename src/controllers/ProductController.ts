import axios, { AxiosResponse } from "axios";
import { IProduct } from "./interfaces/Product.interface";

const baseApiUrl = process.env.REACT_APP_API_URL;

const ProductController = {
  getProductSale: async () => {
    try {
      const responseLogin: AxiosResponse = await axios.get(`${baseApiUrl}/api/v1/stores/products/`);
      console.log(responseLogin);
      return responseLogin.data;
    } catch (error) {
      throw error;
    }
  },
  getProductBest: async () => {
    try {
      const responseLogin: AxiosResponse = await axios.get(`${baseApiUrl}/api/v1/stores/products/`);
      console.log(responseLogin);
      return responseLogin.data;
    } catch (error) {
      throw error;
    }
  },
  getAllProduct: async () => {
    try {
      const response: AxiosResponse = await axios.get(`${baseApiUrl}/api/v1/stores/products/`);
      console.log(response);

      // Assuming your API response structure matches the data field of the response
      const products: IProduct[] = response.data.results;

      return products;
    } catch (error) {
      throw error;
    }
  },
};

export default ProductController;
