import { FC } from 'react';
import axios from 'axios';

const basicApi = process.env.REACT_APP_API_URL;
const token = localStorage.getItem('access');

const axiosInstance = axios.create({
    baseURL: basicApi,
    headers: {
        Authorization: `Bearer ${token}`,
    },
});

const purchaseTariff = async (storeId: number, tariffType:number ) => {
  try {
    const response = await axiosInstance.post('/api/v1/payments/tariff-payments/purchase_tariff/', {
      store: storeId,
      type: tariffType,
    });
    console.log('Тариф успешно куплен:', response.data);
  } catch (error) {
    console.error('Ошибка при покупке тарифа:', error);
  }
};

export const TariffCard: FC<{ tariff: any; backgroundColor: string; storeId: number | null }> = ({ tariff, backgroundColor, storeId }) => {
  return (
    <div className={`w-full h-[27vh] p-4 rounded-lg shadow-md ${backgroundColor} transition-transform`}>
      <h2 className='text-2xl font-bold mb-4 text-white'>{tariff.name}</h2>
      <div className='text-white'>
        <p>Цена: {tariff.price} сомов</p>
        <p>Период: {tariff.period} дней</p>
        <p>Лимит продуктов: {tariff.product_limit}</p>
        <p>Диапазон веса: {tariff.range_weight}</p>
        <button
            className='mt-4 bg-[#EC9A1E] text-white text-center px-3 py-1 rounded-md hover:bg-[#ED5555] transition-colors'
            onClick={() => {
              if (storeId !== null) {
                purchaseTariff(storeId, tariff.id);
              } else {
                console.log('тариф не найден')
              }
            }}
        >
          Выбрать
        </button>
      </div>
    </div>
  );
};
