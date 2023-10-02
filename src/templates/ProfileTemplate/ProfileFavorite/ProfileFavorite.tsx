import { FC, useEffect, useState } from 'react';
import axios from 'axios';

export const ProfileFavorite: FC = () => {
  const basicApi = process.env.REACT_APP_API_URL ?? '';
  const token = localStorage.getItem('access') || '';
  const [favoriteId, setFavoriteId] = useState([]);

  const axiosInstance = axios.create({
    baseURL: basicApi,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  useEffect(() => {
    axiosInstance.get('/api/v1/favorites/favorite-items-list').then((response) => setFavoriteId(response.data));
  }, []);

  // return <div>{favoriteId.map => }</div>;
  return <div>ProfileFavorite</div>;
};
