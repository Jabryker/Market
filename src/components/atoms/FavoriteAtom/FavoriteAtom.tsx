import axios from 'axios';
import { FC, useEffect, useState } from 'react';

interface FavoriteAtomProps {
  productId: number;
}

const basicApi = process.env.REACT_APP_API_URL;

export const FavoriteAtom: FC<FavoriteAtomProps> = ({ productId }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const token = localStorage.getItem('access');
  const axiosInstance = axios.create({
    baseURL: basicApi,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const checkFavoriteStatus = async () => {
    try {
      const response = await axiosInstance.get('/api/v1/favorites/favorite-items-list');
      const favoriteProducts = response.data.map((item: any) => item.product_id);
      setIsFavorite(favoriteProducts.includes(productId));
    } catch (error) {
      console.error('Error checking favorite status:', error);
    }
  };

  useEffect(() => {
    checkFavoriteStatus();
  }, []);

  const addToFavorite = async () => {
    try {
      await axiosInstance.post('/api/v1/favorites/add-to-favorite/', { product_id: productId });
      setIsFavorite(true);
    } catch (error) {
      console.error('Error adding to favorites:', error);
    }
  };

  const removeFromFavorite = async () => {
    try {
      await axiosInstance.delete(`/api/v1/favorites/remove-from-favorite/${productId}/`);
      setIsFavorite(false);
    } catch (error) {
      console.error('Error removing from favorites:', error);
    }
  };

  const handleButtonClick = () => {
    if (isFavorite) {
      removeFromFavorite();
    } else {
      addToFavorite();
    }
  };

  return <button onClick={handleButtonClick}>{isFavorite ? '❤️' : '🤍'}</button>;
};
