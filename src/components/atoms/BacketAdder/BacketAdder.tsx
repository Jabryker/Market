import { DeleteOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import axios from "axios";
import { FC, useState } from "react";

interface BacketAdderProps {
  productId: number;
  quantity: number;
}

const basicApi = process.env.REACT_APP_API_URL;

export const BacketAdder: FC<BacketAdderProps> = ({ productId, quantity }) => {
  const [isBacket, setIsBacket] = useState(false);
  const token = localStorage.getItem("access");

  const axiosInstance = axios.create({
    baseURL: basicApi,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const addToBacket = async () => {
    try {
      await axiosInstance.post("/api/v1/carts/add-to-cart/", {
        product_id: productId,
        quantity: quantity,
      });
      setIsBacket(true);
    } catch (error) {
      console.error("Error adding to favorites:", error);
    }
  };

  const removeFromBacket = async () => {
    try {
      await axiosInstance.delete(
        `/api/v1/carts/remove-from-cart/${productId}/`
      );
      setIsBacket(false);
    } catch (error) {
      console.error("Error removing from favorites:", error);
    }
  };

  const handleButtonClick = () => {
    if (!isBacket) {
      addToBacket();
    } else {
      removeFromBacket();
    }
  };

  return (
    <button onClick={handleButtonClick}>
      {isBacket ? <DeleteOutlined /> : <ShoppingCartOutlined />}
    </button>
  );
};
