import { Button } from "antd";
import { FC } from "react";
import { Link } from "react-router-dom";

export interface IArticle {
    id: number;
    title: string;
    description: string;
    photo: string;
}

interface UsefulArticlesMoleculesProps {
    articles: IArticle[];
}

export const UsefulArticlesMolecules: FC<UsefulArticlesMoleculesProps> = ({ articles }) => {

  return (
    <div className="px-8 pb-8 mb-20 overflow-y-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div
            key={article.id}
            className="flex p-4 rounded-lg shadow-lg transition duration-300 ease-in-out relative hover:bg-gray-100"
            style={{
              minHeight: "250px",
            }}
          >
            <div className="flex-shrink-0 w-80">
              <img
                src={article.photo}
                alt={article.title}
                className="w-full h-auto object-cover rounded-lg"
                style={{ maxHeight: "100%" }}
              />
            </div>
            <div className="flex-grow pl-4">
              <h3 className="text-2xl font-semibold mb-2">{article.title}</h3>
              <div className="max-w-40 overflow-y-auto">
                <p className="text-gray-700 text-lg mb-4 overflow-hidden h-16">
                  {article.description}
                </p>
              </div>
              <div className="absolute bottom-4 right-4">
                <Link to={`/articles/${article.id}`}>
                  <Button type="link" className="overflow-hidden">Подробнее</Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
