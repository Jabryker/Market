import { FC, useEffect, useState } from 'react';
import axios from 'axios';

export const TariffState: FC = () => {
  const basicApi = process.env.REACT_APP_API_URL;
  const token = localStorage.getItem('access');
  const userInfoString = localStorage.getItem('userInfo');
  const userInfo = userInfoString !== null ? JSON.parse(userInfoString) : '';
  const userId = userInfo.id;

  const axiosInstance = axios.create({
    baseURL: basicApi,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  // Состояние для хранения лимита товаров
  const [storeId, setStoreId] = useState<number | null>(null);
  const [productLimit, setProductLimit] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Получите информацию о лимите товаров
        const response = await axiosInstance.get(`/api/v1/accounts/sellers/${userId}`);
        const storeId = response.data?.store?.id;
        setStoreId(storeId);

        if (storeId) {
          // Выполните второй запрос только если storeId не равен null
          const secondResponse = await axiosInstance.get(`/api/v1/stores/stores/${storeId}/`);
          const productLimit = secondResponse.data?.store_info?.product_limit;
          setProductLimit(productLimit);
        }
      } catch (error) {
        console.error('Error loading product limit:', error);
        // Добавьте обработку ошибок, например, вывод сообщения об ошибке пользователю
      }
    };

    if (userId) {
      fetchData();
    }
  }, [userId]);

  return (
    <div>
      <h3>Тарифы</h3>
      <p>Ваш тариф: Бесплатный</p>
      <p>Можете продавать максимально {productLimit ?? 'N/A'} единиц товара. % скидок на рекламу каждого товара 0%</p>
    </div>
  );
};
