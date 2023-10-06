import { FC, useState } from 'react';
import { TariffType } from '../ProfileMyProduct';

interface TariffSelectionProps {
  tariffTypes: TariffType[];
  onSelectTariff: (tariffId: number) => void;
}

export const TariffSelection: FC<TariffSelectionProps> = ({ tariffTypes, onSelectTariff }) => {
  const [selectedTariff, setSelectedTariff] = useState<number | null>(null);

  const handleTariffSelect = (tariffId: number) => {
    setSelectedTariff(tariffId);
    onSelectTariff(tariffId);
  };

  return (
    <div>
      <h2 className='text-2xl font-semibold mb-4'>Выбор тарифа</h2>
      <ul>
        {tariffTypes.map((tariffType) => (
          <li key={tariffType.id}>
            <button
              onClick={() => handleTariffSelect(tariffType.id)}
              className={`${
                selectedTariff === tariffType.id ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
              } px-4 py-2 rounded-md mr-2`}
            >
              {tariffType.name} - {tariffType.price} руб. на {tariffType.period} дней
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

