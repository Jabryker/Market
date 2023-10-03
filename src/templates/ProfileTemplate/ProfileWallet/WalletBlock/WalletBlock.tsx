import { FC } from 'react';

interface WalletBlockProps {
  amount: number;
}

export const WalletBlock: FC<WalletBlockProps> = ({ amount }) => {
  return (
    <div className='p-4'>
      <div className='bg-gradient-to-b from-yellow-400 to-red-500 rounded-lg shadow-md p-6'>
        <h2 className='text-2xl font-bold mb-4 text-white'>Кошелёк</h2>
        <div className='flex items-center'>
          <span className='text-4xl font-semibold text-white mr-2'>{amount}</span>
          <span className='text-lg text-white'>сомов</span>
        </div>
      </div>
    </div>
  );
};
