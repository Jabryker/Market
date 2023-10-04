import { ChangeEvent, FC, FormEvent, useState } from 'react';
import axios from 'axios';
import { ArticlesType } from '../ProfileArticles';

const basicApi = process.env.REACT_APP_API_URL ?? '';
const token = localStorage.getItem('access') || '';

const axiosInstance = axios.create({
  baseURL: basicApi,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

interface ArticleCreateProps {
  onAddArticle: (article: ArticlesType) => void;
}

export const ArticleCreate: FC<ArticleCreateProps> = ({ onAddArticle }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    photo: null as File | null, // Убедитесь, что поле всегда содержит объект File или null
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFormData({
      ...formData,
      photo: file || null,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('title', formData.title);
    formDataToSend.append('description', formData.description);
    if (formData.photo) {
      formDataToSend.append('photo', formData.photo);
    }

    try {
      const response = await axiosInstance.post('/api/v1/news/articles/', formDataToSend);
      console.log('Статья создана успешно:', response.data);
      // Возможно, вы хотите выполнить дополнительные действия после создания статьи, например, перенаправление на страницу со списком статей.
    } catch (error) {
      console.error('Ошибка при создании статьи:', error);
    }
  };


  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Создать статью</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700">Заголовок</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700">Описание</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="photo" className="block text-gray-700">Фото</label>
          <input
            type="file" // Используйте тип "file" для выбора файла
            id="photo"
            name="photo"
            accept="image/*" // Ограничьте типы файлов, которые можно выбрать (например, только изображения)
            onChange={handleFileChange} // Обработчик для выбора файла
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          >
            Создать
          </button>
        </div>
      </form>
    </div>
  );
};
