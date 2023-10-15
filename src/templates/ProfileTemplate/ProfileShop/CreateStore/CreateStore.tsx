import { ChangeEvent, FC, FormEvent, useState } from 'react';

interface CreateStoreProps {
  onCreateStore: (e: FormEvent<HTMLFormElement>) => void;
  onCancel: () => void;
}

export const CreateStore: FC<CreateStoreProps> = ({ onCreateStore, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    description: '',
    logo: null as File | null,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFormData({
      ...formData,
      logo: file || null,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formDataToSend = new FormData(e.currentTarget);
    onCreateStore(e);
  };

  return (
    <div className='bg-white p-8 rounded-lg shadow-md' style={{ background: '#47535F', borderRadius: '20px', fontFamily: 'Roboto' }}>
      <h3 className='text-xl font-semibold mb-4' style={{ color: '#DFDFDF', fontSize: '26px' }}>
        Создать магазин
      </h3>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label htmlFor='name' style={{ color: '#A7B2BD', fontSize: '14px' }}>
            Название
          </label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            className='w-full p-2 border rounded mt-1'
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='description' style={{ color: '#A7B2BD', fontSize: '14px' }}>
            Описание
          </label>
          <textarea
            id='description'
            name='description'
            value={formData.description}
            onChange={handleChange}
            className='w-full p-2 border rounded mt-1'
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='address' style={{ color: '#A7B2BD', fontSize: '14px' }}>
            Адрес
          </label>
          <input
            type='text'
            id='address'
            name='address'
            value={formData.address}
            onChange={handleChange}
            className='w-full p-2 border rounded mt-1'
          />
        </div>

        <div className='mb-4'>
          <label htmlFor='logo' style={{ color: '#A7B2BD', fontSize: '14px' }}>
            Загрузить логотип
          </label>
          <input type='file' id='logo' name='logo' onChange={handleLogoChange} className='w-full p-2 border rounded mt-1' />
        </div>
        <div className='flex flex-col space-y-4'>
          <button
            style={{ background: '#EC9A1E', color: '#DFDFDF', fontSize: '22px', width: '100%', height: '50px', borderRadius: '10px' }}
            type='submit'
          >
            Создать магазин
          </button>
          <button style={{ background: 'gray', width: '100%', height: '50px', borderRadius: '10px' }} onClick={onCancel}>
            Отмена
          </button>
        </div>
      </form>
    </div>
  );
};
