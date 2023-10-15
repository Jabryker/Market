import { DeleteOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import axios from 'axios';
import { FC, useEffect, useState } from 'react';

interface BacketAdderProps {
  productId: number;
  quantity: number;
}

interface CartItem {
  product_id: number;
  product: string;
  quantity: number;
}

const basicApi = process.env.REACT_APP_API_URL;

export const BacketAdder: FC<BacketAdderProps> = ({ productId, quantity }) => {
  const [isBacket, setIsBacket] = useState(false);
  const token = localStorage.getItem('access');

  const axiosInstance = axios.create({
    baseURL: basicApi,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const checkBacketStatus = async () => {
    try {
      const response = await axiosInstance.get('/api/v1/carts/cart-items-list');
      const cartItems: CartItem[] = response.data;
      const isItemInCart = cartItems.some((item: CartItem) => item.product_id === productId);
      setIsBacket(isItemInCart);
    } catch (error) {
      console.error('Error checking cart status:', error);
    }
  };

  const addToBacket = async () => {
    try {
      await axiosInstance.post('/api/v1/carts/add-to-cart/', {
        product_id: productId,
        quantity: quantity,
      });
      setIsBacket(true);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const removeFromBacket = async () => {
    try {
      await axiosInstance.delete(`/api/v1/carts/remove-from-cart/${productId}/`);
      setIsBacket(false);
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };

  const handleButtonClick = () => {
    if (!isBacket) {
      addToBacket();
    } else {
      removeFromBacket();
    }
  };

  useEffect(() => {
    checkBacketStatus(); // Проверяем начальный статус корзины при монтировании компонента
  }, []);

  return (
    <button style={{ width: '32px', height: '32px' }} onClick={handleButtonClick}>
      {isBacket ? <DeleteOutlined /> : <ShoppingCartOutlined />}
    </button>
  );
};
