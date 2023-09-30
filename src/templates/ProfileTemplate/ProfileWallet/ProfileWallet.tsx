import axios from "axios";
import { FC, useEffect, useState } from "react";

export const ProfileWallet: FC = () => {
  const [walletData, setWalletData] = useState({
    id: 0,
    amount: 0,
    seller_email: "",
  });

  const basicApi = process.env.REACT_APP_API_URL;

  const token = localStorage.getItem("access");
  const userInfoString = localStorage.getItem("userInfo");
  const userInfo = userInfoString !== null ? JSON.parse(userInfoString) : "";
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
        const response = await axiosInstance.get(
          `${basicApi}/api/v1/accounts/wallet/${userId}`
        );
        setWalletData(response.data);
      } catch (error) {
        console.error("Ошибка при получении данных кошелька:", error);
      }
    };

    fetchWalletData();
  }, [axiosInstance, userId]);

  return (
    <div className="p-4">
      <div className="bg-gradient-to-b from-yellow-400 to-red-500 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 text-white">Кошелёк</h2>
        <div className="flex items-center">
          <span className="text-4xl font-semibold text-white mr-2">
            {walletData.amount}
          </span>
          <span className="text-lg text-white">сомов</span>
        </div>
      </div>
    </div>
  );
};
