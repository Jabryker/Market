// @ts-ignore

import { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';
import axios from 'axios';

const basicApi = process.env.REACT_APP_API_URL;
const token = localStorage.getItem('access') || '';
const userInfoString = localStorage.getItem('userInfo');
const userInfo = userInfoString !== null ? JSON.parse(userInfoString) : '';
const userId = userInfo.id;

const axiosInstance = axios.create({
  baseURL: basicApi,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

interface Store {
  id: number;
  name: string;
  address: string;
  description: string;
  logo: string;
  product_limit: number;
  store_info: {
    name: string;
    address: string;
    description: string;
    logo: string;
    product_limit: number;
  };
  products: Array<any>;
}

export const ProfileShop: FC = () => {
  const [stores, setStores] = useState([]);
  // const [userStore, setUserStore] = useState<UserStore | null>(null);
  const [userStore, setUserStore] = useState<Store | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    description: '',
    logo: null as File | null, // Use null for file
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Fetch the list of stores
    axiosInstance
      .get('/api/v1/stores/stores/')
      .then((response) => {
        setStores(response.data.results);
        // Find the store belonging to the user
        const store = response.data.results.find((store: any) => store.seller === userId);
        setUserStore(store);
      })
      .catch((error) => {
        console.error('Error loading stores:', error);
      });
  }, [userId]);

  useEffect(() => {
    // Fetch user's store data if a store exists
    if (userStore && userStore.id) {
      // Ensure userStore and userStore.id are defined
      axiosInstance
        .get(`/api/v1/stores/stores/${userStore.id}/`)
        .then((response) => {
          setUserStore(response.data as Store); // Annotate the type of the response data
        })
        .catch((error) => {
          console.error('Error loading user store data:', error);
        });
    }
  }, [userStore]);

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
      logo: file || null, // Use null if no file is selected
    });
  };

  const handleCreateStore = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission

    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('address', formData.address);
    formDataToSend.append('description', formData.description);
    if (formData.logo) {
      formDataToSend.append('logo', formData.logo);
    }
    formDataToSend.append('seller', userId); // Include the userId

    // Logic for creating a store
    axiosInstance
      .post(`/api/v1/stores/stores/`, formDataToSend)
      .then((response) => {
        // Handle successful store creation
        setUserStore(response.data);
        // Clear the form after successful creation
        setFormData({
          name: '',
          address: '',
          description: '',
          logo: null, // Reset the file after upload
        });
        // Close the modal
        setIsModalOpen(false);
      })
      .catch((error) => {
        console.error('Error creating store:', error);
      });
  };

  const handleAddProduct = () => {
    // Logic for adding a product to the user's store
    // You can implement this function similarly to handleCreateStore
    console.log('Adding product');
  };

  return (
    <div>
      {userStore ? (
        <>
          <div>
            <h2 className='text-2xl font-semibold mb-4'>{userStore.store_info?.name}</h2>
            <p>Address: {userStore.store_info?.address}</p>
            <p>Description: {userStore.store_info?.description}</p>
            <img src={userStore.store_info?.logo} alt={userStore.store_info?.name} className='w-32 h-32' />
            <p>Product Limit: {userStore.store_info?.product_limit}</p>

            <h3 className='text-xl font-semibold mt-4'>Products</h3>
            <ul>{userStore.products?.map((product: Store) => <li key={product.id}>{product.name}</li>)}</ul>
          </div>
          <button className='bg-blue-500 hover.bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleAddProduct}>
            Add Product
          </button>
        </>
      ) : (
        <div>
          <h2 className='text-2xl font-semibold mb-4'>Create Store</h2>
          <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded' onClick={() => setIsModalOpen(true)}>
            Create Store
          </button>
          {isModalOpen && (
            <div className='fixed inset-0 flex items-center justify-center z-50'>
              <div className='bg-white p-8 rounded-lg shadow-md'>
                <h3 className='text-xl font-semibold mb-4'>Create Store</h3>
                <form onSubmit={handleCreateStore}>
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
                    <button
                      className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2'
                      type='submit' // Add type attribute for the submit button
                    >
                      Create
                    </button>
                    <button
                      className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
                      onClick={() => setIsModalOpen(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
