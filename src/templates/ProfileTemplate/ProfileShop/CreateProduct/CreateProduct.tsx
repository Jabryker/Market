import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { displayErrorToast, displaySuccessToast } from '../../../../components/atoms';

interface Category {
  id: number;
  name: string;
}

interface SpecificationData {
  name: string;
  value: string;
}

export const CreateProduct: FC = () => {
  const basicApi: string = process.env.REACT_APP_API_URL || '';
  const token: string = localStorage.getItem('access') || '';
  const userInfoString: string | null = localStorage.getItem('userInfo');
  const userInfo: any = userInfoString !== null ? JSON.parse(userInfoString) : '';
  const userId: number = userInfo.id;

  const axiosInstance = axios.create({
    baseURL: basicApi,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const [categories, setCategories] = useState<Category[]>([]);
  const [userID, setUserId] = useState<any>([]);
  const [specifications, setSpecifications] = useState<SpecificationData[]>([
    { name: '', value: '' }, // Начнем с одной пустой спецификации
  ]);
  const [storeId, setStoreId] = useState<number | null>(null); // Начальное значение null

  useEffect(() => {
    axiosInstance
      .get(`/api/v1/accounts/sellers/${userId}/`)
      .then((response) => {
        const sellerData = response.data;
        setUserId(sellerData.id);
        setStoreId(sellerData.store.id);
      })
      .catch((error) => {
        console.error('Error loading seller data:', error);
      });
  }, []);

  useEffect(() => {
    axiosInstance
      .get('/api/v1/stores/categories/')
      .then((response) => {
        setCategories(response.data.results);
      })
      .catch((error) => {
        console.error('Error loading categories:', error);
      });
  }, []);

  const handleImageChange = (info: any) => {
    if (info.file && info.file.status) {
      if (info.file.status === 'done') {
        console.log(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        console.error(`${info.file.name} file upload failed.`);
      }
    }
  };

  const removeSpecification = (index: number) => {
    const updatedSpecifications = [...specifications];
    updatedSpecifications.splice(index, 1);
    setSpecifications(updatedSpecifications);
  };

  const addSpecification = () => {
    setSpecifications([...specifications, { name: '', value: '' }]);
  };

  const handleSpecificationNameChange = (value: string, index: number) => {
    const updatedSpecifications = [...specifications];
    updatedSpecifications[index].name = value;
    setSpecifications(updatedSpecifications);
  };

  const handleSpecificationValueChange = (value: string, index: number) => {
    const updatedSpecifications = [...specifications];
    updatedSpecifications[index].value = value;
    setSpecifications(updatedSpecifications);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get('name') as string,
      brand: formData.get('brand') as string,
      category: formData.get('category') as string,
      country_of_origin: formData.get('country_of_origin') as string,
      description: formData.get('description') as string,
      store: storeId,
      specifications: specifications,
    };

    axiosInstance
      .post('/api/v1/stores/products/', data)
      .then((response) => {
        console.log('Product created successfully:', response.data);
        displaySuccessToast('Product created successfully:')
      })
      .catch((error) => {
        console.error('Error creating product:', error);
        const errorMessage = error.response?.data?.detail || 'Произошла ошибка при создании товара';
        displayErrorToast(`Ошибка при создании товара: ${errorMessage}`);
      });
  };

  return (
    <div>
      <h2 className='text-2xl font-semibold mb-4'>Create Product</h2>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div className='mb-4'>
          <label htmlFor='category' className='block text-gray-700'>
            Category
          </label>
          <select
            id='category'
            name='category'
            className='w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500'
            required
          >
            <option value='' disabled>
              Select a category
            </option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className='mb-4'>
          <label htmlFor='name' className='block text-gray-700'>
            Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            className='w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500'
            required
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='brand' className='block text-gray-700'>
            Brand
          </label>
          <input
            type='text'
            id='brand'
            name='brand'
            className='w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500'
            required
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='country_of_origin' className='block text-gray-700'>
            Country of Origin
          </label>
          <input
            type='text'
            id='country_of_origin'
            name='country_of_origin'
            className='w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500'
            required
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='description' className='block text-gray-700'>
            Description
          </label>
          <textarea
            id='description'
            name='description'
            rows={4}
            className='w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500'
            required
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='price' className='block text-gray-700'>
            Price
          </label>
          <input
            type='number'
            id='price'
            name='price'
            className='w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500'
            required
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='quantity' className='block text-gray-700'>
            Quantity
          </label>
          <input
            type='number'
            id='quantity'
            name='quantity'
            className='w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500'
            required
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='images' className='block text-gray-700'>
            Images
          </label>
          <input
            type='file'
            id='images'
            name='images'
            accept='image/*'
            className='w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500'
            required
            onChange={(e) => handleImageChange(e.target.files)}
          />
        </div>
        {specifications.map((specification, index) => (
          <div key={index} className='mb-4'>
            <input
              type='text'
              placeholder={`Specification ${index + 1} Name`}
              value={specification.name}
              onChange={(e) => handleSpecificationNameChange(e.target.value, index)}
              className='w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500'
              required
            />
            <input
              type='text'
              placeholder={`Specification ${index + 1} Value`}
              value={specification.value}
              onChange={(e) => handleSpecificationValueChange(e.target.value, index)}
              className='w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500'
              required
            />
            <button type='button' onClick={() => removeSpecification(index)} className='text-red-500 mt-2 block'>
              Remove
            </button>
          </div>
        ))}

        <button type='button' onClick={addSpecification} className='border border-dashed border-gray-400 py-2 px-4'>
          Add Specification
        </button>
        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800'
        >
          Create Product
        </button>
      </form>
    </div>
  );
};
