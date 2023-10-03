import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { TariffCard } from './TariffCard/TariffCard';
import { TariffState } from './TariffState/TariffState';

export const ProfileTariff: FC = () => {
  const [tariffs, setTariffs] = useState<any[]>([]);

  const basicApi = process.env.REACT_APP_API_URL;

  const token = localStorage.getItem('access');

  const axiosInstance = axios.create({
    baseURL: basicApi,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  useEffect(() => {
    const fetchTariffs = async () => {
      try {
        const response = await axiosInstance.get(`${basicApi}/api/v1/payments/tariff-types/`);
        setTariffs(response.data.results);
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
        <TariffCard key={index} tariff={tariff} backgroundColor={colors[index % colors.length]} />
      ))}
    </div>
  );
};
