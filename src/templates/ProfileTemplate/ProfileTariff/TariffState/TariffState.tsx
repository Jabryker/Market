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

  // Состояние для хранения лимита товаров и информации о текущем тарифе
  const [storeId, setStoreId] = useState<number | null>(null);
  const [productLimit, setProductLimit] = useState<number | null>(null);
  const [currentTariff, setCurrentTariff] = useState<string>('Бесплатный');

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

          const tariffResponse = await axiosInstance.get(`/api/v1/payments/tariff-types/${storeId}/`);
          const tariffData = tariffResponse.data;
          const currentTariff = tariffResponse.data.results.length === 0 ? tariffData.name : 'Бесплатный';
          setCurrentTariff(currentTariff); // Предположим, что имя тарифа хранится в свойстве "name"
        }
      } catch (error) {
        console.error('Error loading product limit and tariff information:', error);
      }
    };

    if (userId) {
      fetchData();
    }
  }, [userId]);

  return (
    <div>
      <h3>Тарифы</h3>
      <p>Ваш тариф: {currentTariff}</p>
      <p>Можете продавать максимально {productLimit ?? 'N/A'} единиц товара. % скидок на рекламу каждого товара 0%</p>
    </div>
  );
};
