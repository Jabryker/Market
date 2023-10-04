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
    <div className='bg-white p-8 rounded-lg shadow-md'>
      <h3 className='text-xl font-semibold mb-4'>Create Store</h3>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label htmlFor='name' className='block text-sm font-medium text-gray-700'>
            Store Name:
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
          <label htmlFor='address' className='block text-sm font-medium text-gray-700'>
            Store Address:
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
          <label htmlFor='description' className='block text-sm font-medium text-gray-700'>
            Store Description:
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
          <label htmlFor='logo' className='block text-sm font-medium text-gray-700'>
            Store Logo:
          </label>
          <input type='file' id='logo' name='logo' onChange={handleLogoChange} className='w-full p-2 border rounded mt-1' />
        </div>
        <div className='flex justify-end'>
          <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2' type='submit'>
            Create
          </button>
          <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
