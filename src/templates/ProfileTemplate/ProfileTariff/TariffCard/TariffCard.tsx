import { FC } from 'react';

import axios from 'axios';

const purchaseTariff = async (storeId, tariffType) => {
  try {
    const response = await axios.post('/api/v1/payments/tariff-payments/purchase_tariff/', {
      store: storeId,
      type: tariffType,
    });
    // Обработайте успешный ответ, например, вы можете отображать сообщение о покупке тарифа.
    console.log('Тариф успешно куплен:', response.data);
  } catch (error) {
    console.error('Ошибка при покупке тарифа:', error);
    // Добавьте обработку ошибок, например, вывод сообщения об ошибке пользователю.
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
          onClick={() => purchaseTariff(storeId, tariff.type)} // Передаем storeId и tariff.type
        >
          Выбрать
        </button>
      </div>
    </div>
  );
};
