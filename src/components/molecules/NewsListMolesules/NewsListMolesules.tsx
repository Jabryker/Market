import { Button, Card } from "antd";
import { FC } from "react";
import { Link } from "react-router-dom";

export interface News {
  id: number;
  name: string;
  description: string;
  photo: string;
}

interface INewsListMolesulesProps {
  newsData: News[];
}

export const NewsListMolesules: FC<INewsListMolesulesProps> = ({ newsData }) => {
  return (
    <div className="px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsData.map((news) => (
          <Card
            key={news.id}
            className="flex border-[#A7B2BD]" 
            cover={<img src={news.photo} alt={news.name} className="w-48 h-auto object-cover" />}
          >
            <div className="flex-grow p-3">
              <h3 className="text-lg font-semibold mb-1">{news.name}</h3>
              <p className="text-gray-600">{news.description}</p>
            </div>
            <div className="flex-shrink-0">
              <Link to={`/news/${news.id}`}>
                <Button type="link">Подробнее</Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
