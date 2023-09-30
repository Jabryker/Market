import axios from "axios";
import { FC, useEffect, useState } from "react";

const TariffCard: FC<{ tariff: any; backgroundColor: string }> = ({
  tariff,
  backgroundColor,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`w-full h-[27vh] p-4 rounded-lg shadow-md ${backgroundColor} ${
        isHovered ? "scale-105" : ""
      } transition-transform`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2 className="text-2xl font-bold mb-4 text-white">{tariff.name}</h2>
      <div className="text-white">
        <p>Цена: {tariff.price} сомов</p>
        <p>Период: {tariff.period} дней</p>
        <p>Лимит продуктов: {tariff.product_limit}</p>
        <p>Диапазон веса: {tariff.range_weight}</p>
        <button className="mt-4 bg-[#EC9A1E] text-white text-center px-3 py-1 rounded-md hover:bg-[#ED5555] transition-colors">
          Выбрать
        </button>
      </div>
    </div>
  );
};

export const ProfileTariff: FC = () => {
  const [tariffs, setTariffs] = useState<any[]>([]);

  const basicApi = process.env.REACT_APP_API_URL;

  const token = localStorage.getItem("access");

  const axiosInstance = axios.create({
    baseURL: basicApi,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  useEffect(() => {
    const fetchTariffs = async () => {
      try {
        const response = await axiosInstance.get(
          `${basicApi}/api/v1/payments/tariff-types/`
        );
        setTariffs(response.data.results);
      } catch (error) {
        console.error("Ошибка при получении данных о тарифах:", error);
      }
    };

    fetchTariffs();
  }, []);

  const colors = [
    "bg-blue-400",
    "bg-green-400",
    "bg-yellow-400",
    "bg-pink-400",
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {tariffs.map((tariff, index) => (
        <TariffCard
          key={index}
          tariff={tariff}
          backgroundColor={colors[index % colors.length]}
        />
      ))}
    </div>
  );
};
