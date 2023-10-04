import { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { ArticleItem } from './ArticleItem/ArticleItem';
import { ArticlesEmpty } from './ArticlesEmpty/ArticlesEmpty';
import { ArticleCreate } from './ArticleCreate/ArticleCreate';

const basicApi = process.env.REACT_APP_API_URL ?? '';
const token = localStorage.getItem('access') || '';
const userInfoString = localStorage.getItem('userInfo');
const userInfo = userInfoString !== null ? JSON.parse(userInfoString) : '';
// const userId = userInfo.id;

const axiosInstance = axios.create({
  baseURL: basicApi,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export type ArticlesType = {
  id: number;
  title: string;
  description: string;
  photo: string;
  created_by: string;
  created_by_id: string;
}

export const ProfileArticles: FC = () => {
  const [articles, setArticles] = useState<ArticlesType[]>([]); // Состояние для хранения статей
  const [newArticle, setNewArticle] = useState<ArticlesType | null>(null); // Состояние для новой статьи

  useEffect(() => {
    // Запрос к API для получения статей
    axiosInstance.get('/api/v1/news/seller/articles/')
      .then((response) => {
        // Если запрос успешен, сохраняем статьи в состоянии
        setArticles(response.data.results);
      })
      .catch((error) => {
        // Обработка ошибки, например, вывод ошибки в консоль
        console.error('Ошибка при получении статей:', error);
      });
  }, []);

  // Функция для добавления новой статьи в список статей
  const addNewArticle = (article: ArticlesType) => {
    setNewArticle(article);
  };

  useEffect(() => {
    if (newArticle) {
      setArticles([newArticle, ...articles]);
      setNewArticle(null);
    }
  }, [newArticle, articles]);

  return (
    <div>
      <h2>Ваши статьи:</h2>
      <ArticleCreate onAddArticle={addNewArticle} />
      {articles.length > 0 ? (
        <ul>
          {articles.map((article) => (
            <ArticleItem key={article.id} id={article.id} created_by={article.created_by} photo={article.photo} title={article.title} description={article.description} />
          ))}
        </ul>
      ) : (
        <ArticlesEmpty />
      )}
    </div>
  );
};
