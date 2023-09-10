import { Button, Card } from "antd";
import { FC } from "react";
import { Link } from "react-router-dom";

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Card
            key={article.id}
            className="flex border-[#A7B2BD]" 
            cover={<img src={article.photo} alt={article.title} className="w-48 h-auto object-cover" />}
          >
            <div className="flex-grow p-3">
              <h3 className="text-lg font-semibold mb-1">{article.title}</h3>
              <p className="text-gray-600">{article.description}</p>
            </div>
            <div className="flex-shrink-0">
              <Link to={`/articles/${article.id}`}>
                <Button type="link">Подробнее</Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
