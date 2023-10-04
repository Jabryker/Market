import { FC } from 'react';

type ArticleItemType = {
  id: number;
  title: string;
  description: string;
  photo: string;
  created_by: string;
};

export const ArticleItem: FC<ArticleItemType> = ({ id, title, description, photo, created_by }) => {
  return (
    <li key={id}>
      <h3>Название: {title}</h3>
      <p>Описание: {description}</p>
      <img src={photo} alt={title} />
      {/*<p>Создано пользователем: {created_by}</p>*/}
    </li>
  );
};

