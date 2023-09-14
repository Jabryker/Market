import { Button } from "antd";
import { FC } from "react";
import { Link } from "react-router-dom";

export interface INews {
    id: number;
    name: string;
    description: string;
    photo: string;
}

interface INewsListMolesulesProps {
    newsData: INews[];
}

export const NewsListMolesules: FC<INewsListMolesulesProps> = ({ newsData }) => {
  return (
    <div className="px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsData.map((news) => (
          <div
            key={news.id}
            className="flex border-[#A7B2BD] p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out relative"
            style={{ minHeight: "250px" }}
          >
            <div className="flex-shrink-0 w-80">
              <img
                src={news.photo}
                alt={news.name}
                className="w-full h-auto object-cover rounded-lg"
                style={{ maxHeight: "100%" }}
              />
            </div>
            <div className="flex-grow pl-4">
              <h3 className="text-xl font-semibold mb-2">{news.name}</h3>
              <p className="text-gray-700 text-lg mb-4">{news.description}</p>
              <div className="absolute bottom-4 right-4">
                <Link to={`/news/${news.id}`}>
                  <Button type="link">Подробнее</Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
