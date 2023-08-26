import { FC } from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";
import { TitleText } from "../../atoms";

export interface Article {
  id: number;
  title: string;
  description: string;
  photo: string;
}

interface UsefulArticlesMoleculesProps {
  articles: Article[];
}

export const UsefulArticlesMolecules: FC<UsefulArticlesMoleculesProps> = ({ articles }) => {
  return (
    <div className="px-8">
      <TitleText>Полезные статьи</TitleText>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Card
            key={article.id}
            className="border rounded-lg overflow-hidden"
            cover={
              <img src={article.photo} alt={article.title} className="h-48 w-full object-cover" />
            }
          >
            <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
            <p className="text-gray-600">{article.description}</p>
            <div className="mt-2">
              <hr className="border-gray-300" />
              <Link to={`/articles/${article.id}`} className="text-blue-500 hover:underline">
                Читать далее
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
