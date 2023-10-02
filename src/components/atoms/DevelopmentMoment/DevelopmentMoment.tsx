import { FC } from 'react';

export const DevelopmentMoment: FC = () => {
  return (
    <div className='flex items-center justify-center h-screen bg-gradient-to-b from-blue-300 to-blue-600'>
      <div className='bg-white p-8 rounded-lg shadow-md text-center text-gray-800'>
        <h2 className='text-3xl font-bold mb-4'>Страница в разработке</h2>
        <p className='text-lg'>Эта страница в настоящее время находится в разработке. Пожалуйста, зайдите позже за обновлениями.</p>
      </div>
    </div>
  );
};
