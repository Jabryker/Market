import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { WalletBlock } from './WalletBlock/WalletBlock';

export const ProfileWallet: FC = () => {
  const [walletData, setWalletData] = useState({
    id: 0,
    amount: 0,
    seller_email: '',
  });

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

  useEffect(() => {
    const fetchWalletData = async () => {
      try {
        const response = await axiosInstance.get(`${basicApi}/api/v1/accounts/sellers/${userId}/`);
        const { wallet } = response.data;
        setWalletData(wallet); // Set wallet data to the wallet object
      } catch (error) {
        console.error('Ошибка при получении данных кошелька:', error);
      }
    };

    fetchWalletData();
  }, []);

  return (
    <div className='p-4'>
      <WalletBlock amount={walletData.amount} />
    </div>
  );
};
