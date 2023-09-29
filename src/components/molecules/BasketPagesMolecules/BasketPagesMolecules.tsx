import axios from "axios";
import { FC, useEffect, useState } from "react";

interface CartItem {
  product: string;
  product_id: number;
  quantity: number;
}

export const BasketPagesMolecules: FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const basicApi = process.env.REACT_APP_API_URL;
    const token = localStorage.getItem("access");
    const axiosInstance = axios.create({
      baseURL: basicApi,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const fetchCartItems = async () => {
      try {
        const response = await axiosInstance.get("/api/v1/carts/cart-items-list");

        const cartItemsData = response.data;

        setCartItems(cartItemsData);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCartItems();
  }, []);

  return (
    <div className="p-4 flex flex-row">
      <div>
        <h3 className="text-2xl font-bold mb-10">Ваша корзина</h3>
        <ul>
          {cartItems?.map((item) => (
            <li key={item.product_id}>
              Product: {item.product}, Quantity: {item.quantity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
