import { FC } from 'react';

export const TariffCard: FC<{ tariff: any; backgroundColor: string }> = ({ tariff, backgroundColor }) => {
  return (
    <div className={`w-full h-[27vh] p-4 rounded-lg shadow-md ${backgroundColor} transition-transform`}>
      <h2 className='text-2xl font-bold mb-4 text-white'>{tariff.name}</h2>
      <div className='text-white'>
        <p>Цена: {tariff.price} сомов</p>
        <p>Период: {tariff.period} дней</p>
        <p>Лимит продуктов: {tariff.product_limit}</p>
        <p>Диапазон веса: {tariff.range_weight}</p>
        <button className='mt-4 bg-[#EC9A1E] text-white text-center px-3 py-1 rounded-md hover:bg-[#ED5555] transition-colors'>
          Выбрать
        </button>
      </div>
    </div>
  );
};
