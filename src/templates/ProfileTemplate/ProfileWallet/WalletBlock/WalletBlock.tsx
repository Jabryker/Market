import { FC } from 'react';

interface WalletBlockProps {
  amount: number;
}

export const WalletBlock: FC<WalletBlockProps> = ({ amount }) => {
  return (
    <div className='p-4'>
      <h2 style={{ fontSize: '24px', color: '#47535F', fontWeight: '500', marginBottom: '50px' }}>Кошелёк</h2>
      <div
        style={{
          width: '40%',
          background: 'rgba(142.77, 151.07, 159.38, 0.10)',
          height: '228px',
          borderRadius: '30px',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          display: 'flex', // Добавляем flex-контейнер
          alignItems: 'center', // Центрируем содержимое по вертикали
        }}
      >
        <div
          style={{
            width: '3%',
            height: '50%',
            background: 'linear-gradient(180deg, #EC9A1E 0%, #ED5555 77%)',
            borderTopRightRadius: '10px',
            borderBottomRightRadius: '10px',
            marginRight: '30px',
          }}
        ></div>
        <div style={{}}>
          <h3 style={{ fontSize: '24px', color: 'rgba(0, 0, 0, 0.50)' }}>Ваш баланс</h3>
          <span style={{ color: 'black', fontSize: '32px', fontWeight: '700' }}>{amount} с</span>
        </div>
      </div>
      <button style={{ color: '#EC9A1E', fontSize: '20px', marginTop: '20px' }}>Пополнить баланс</button>
    </div>
  );
};
