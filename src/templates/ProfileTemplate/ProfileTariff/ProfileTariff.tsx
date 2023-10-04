import { TariffState } from './TariffState/TariffState';
import { TariffCard } from './TariffCard/TariffCard';
import axios from 'axios';
import { FC, useEffect, useState } from 'react';

export const ProfileTariff: FC = () => {
  const [tariffs, setTariffs] = useState<any[]>([]);
  const [storeId, setStoreId] = useState<number | null>(null); // Добавляем состояние для storeId

  const basicApi = process.env.REACT_APP_API_URL;
  const token = localStorage.getItem('access');

  const axiosInstance = axios.create({
    baseURL: basicApi,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const userInfoString = localStorage.getItem('userInfo');
  const userInfo = userInfoString !== null ? JSON.parse(userInfoString) : '';
  const userId = userInfo.id;

  useEffect(() => {
    const fetchTariffs = async () => {
      try {
        const response = await axiosInstance.get(`${basicApi}/api/v1/payments/tariff-types/`);
        setTariffs(response.data.results);

        // Получаем и устанавливаем storeId
        const sellerResponse = await axiosInstance.get(`/api/v1/accounts/sellers/${userId}`);
        const storeId = sellerResponse.data?.store?.id;
        setStoreId(storeId);
      } catch (error) {
        console.error('Ошибка при получении данных о тарифах:', error);
      }
    };

    fetchTariffs();
  }, []);

  const colors = ['bg-blue-400', 'bg-green-400', 'bg-yellow-400', 'bg-pink-400'];

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
      <TariffState />
      {tariffs.map((tariff, index) => (
        <TariffCard
          key={index}
          tariff={tariff}
          backgroundColor={colors[index % colors.length]}
          storeId={storeId} // Передаем storeId в компонент TariffCard
        />
      ))}
    </div>
  );
};
