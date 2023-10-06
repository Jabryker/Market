import { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { ProductCard } from '../../../components/atoms';
import { TariffSelection } from './TariffSelection/TariffSelection';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  images: ProductImage[];
  specifications: any[];
  reviews: any[];
  category: number;
  store: number;
  discounts: any[];
  payment: any;
}

interface ProductImage {
  id: number;
  image: string;
}

export interface TariffType {
  id: number;
  name: string;
  price: number;
  period: number;
  product_limit: number;
  range_weight: number;
}

interface TariffTypesResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: TariffType[];
}

export const ProfileMyProduct: FC = () => {
  const basicApi = process.env.REACT_APP_API_URL || '';
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

  const [products, setProducts] = useState<Product[]>([]);
  const [productDetails, setProductDetails] = useState<Product[]>([]);
  const [selectedTariff, setSelectedTariff] = useState<number | null>(null);

  const [tariffTypes, setTariffTypes] = useState<TariffType[]>([]);

  useEffect(() => {
    axiosInstance
      .get<TariffTypesResponse>('/api/v1/payments/tariff-types/')
      .then((response) => {
        const tariffData = response.data.results;
        setTariffTypes(tariffData);
      })
      .catch((error) => {
        console.error('Error loading tariff types:', error);
      });
  }, []);

  const handleSelectTariff = (tariffId: number) => {
    setSelectedTariff(tariffId);
  };

  useEffect(() => {
    axiosInstance
      .get(`/api/v1/accounts/sellers/${userId}/`)
      .then((response) => {
        const sellerData = response.data;
        setProducts(sellerData.products);

        // После получения списка продуктов, получите детали каждого продукта
        sellerData.products.forEach((product: Product) => {
          axiosInstance
            .get(`/api/v1/stores/products/${product.id}/`)
            .then((productResponse) => {
              const productDetail = productResponse.data;
              setProductDetails((prevProductDetails) => [...prevProductDetails, productDetail]);
            })
            .catch((error) => {
              console.error('Error loading product details:', error);
            });
        });
      })
      .catch((error) => {
        console.error('Error loading seller data:', error);
      });
  }, [userId]);

  const handleStartSale = (productId: number, tariffId: number) => {
    // Обработчик для кнопки "Начать акцию на товар"
    // Вы можете добавить соответствующую логику здесь
    console.log(`Начата акция на товар с ID: ${productId} и тарифом с ID: ${tariffId}`);
  };

  const handleTopSale = (productId: number) => {
    // Обработчик для кнопки "Вывести в Топ продаж"
    // Вы можете добавить соответствующую логику здесь
    console.log(`Товар с ID: ${productId} выведен в Топ продаж`);
  };

  return (
    <div className="container mx-auto">
      <h2 className='text-2xl font-semibold mb-4'>Мои товары</h2>

      <TariffSelection tariffTypes={tariffTypes} onSelectTariff={handleSelectTariff} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {productDetails.map((productDetail) => (
          <div key={productDetail.id} className="bg-white p-4 border rounded shadow">
            <ProductCard product={productDetail} />
            <div className="mt-4">
              {selectedTariff && (
                <>
                  <button
                    onClick={() => handleStartSale(productDetail.id, selectedTariff)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
                  >
                    Начать акцию на товар
                  </button>
                  <button
                    onClick={() => handleTopSale(productDetail.id)}
                    className="bg-green-500 text-white px-4 py-2 rounded-md"
                  >
                    Вывести в Топ продаж
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};