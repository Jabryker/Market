import { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { ProductCard } from '../../../components/atoms';
import { EmptyFavoriteCart } from './EmptyFavoriteCart/EmptyFavoriteCart';

interface FavoriteItem {
  product_id: number;
  product: string;
}

export const ProfileFavorite: FC = () => {
  const basicApi = process.env.REACT_APP_API_URL ?? '';
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

  const [favoriteItems, setFavoriteItems] = useState<FavoriteItem[]>([]);
  const [productInfo, setProductInfo] = useState<any>({});

  useEffect(() => {
    axiosInstance
      .get('/api/v1/favorites/favorite-items-list')
      .then((response) => {
        setFavoriteItems(response.data);
      })
      .catch((error) => {
        console.error('Error loading favorite items:', error);
      });
  }, []);

  useEffect(() => {
    const fetchProductInfo = async (productId: number) => {
      try {
        const response = await axiosInstance.get(`/api/v1/stores/products/${productId}/`);
        setProductInfo((prevProductInfo: any) => ({
          ...prevProductInfo,
          [productId]: response.data,
        }));
      } catch (error) {
        console.error('Error loading product info:', error);
      }
    };
    favoriteItems.forEach((item) => {
      fetchProductInfo(item.product_id);
    });
  }, [favoriteItems]);

  return (
    <div>
      {favoriteItems.length === 0 ? (
        <EmptyFavoriteCart />
      ) : (
        favoriteItems.map((item) => (
          <div key={item.product_id}>{productInfo[item.product_id] && <ProductCard product={productInfo[item.product_id]} />}</div>
        ))
      )}
    </div>
  );
};
