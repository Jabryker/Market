import { FC } from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";
import { TitleText } from "../../atoms";

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
      <TitleText>Наши новости</TitleText>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsData.map((news) => (
          <Card
            key={news.id}
            cover={<img src={news.photo} alt={news.name} className="h-48 w-full object-cover" />}
          >
            <h3 className="text-lg font-semibold mb-1">{news.name}</h3>
            <p className="text-gray-600">{news.description}</p>
            <hr className="my-2" />
            <Link to={`/news/${news.id}`}>Читать далее</Link>
          </Card>
        ))}
      </div>
    </div>
  );
};
