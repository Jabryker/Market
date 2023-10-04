import { FC } from 'react';
import { ProfileBacket } from '../../../templates/ProfileTemplate/ProfileBacket/ProfileBacket';

export const BasketPagesMolecules: FC = () => {
  return (
    <div className='p-4 flex flex-row'>
      <div>
        <h3 className='text-2xl font-bold mb-10'>Ваша корзина</h3>
        <ProfileBacket />
      </div>
    </div>
  );
};
