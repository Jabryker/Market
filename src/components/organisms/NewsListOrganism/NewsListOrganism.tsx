import { useState, useEffect } from "react";
import NewsListMolesules from "../../molecules/NewsListMolesules/NewsListMolesules";
import { News } from "../../molecules/NewsListMolesules/NewsListMolesules"; // Импортируйте News
import CommonController from "../../../controllers/CommonController";

export const NewsListOrganism = () => {
  const [newsData, setNewsData] = useState<News[]>([]);

  useEffect(() => {
    async function fetchNews() {
      try {
        const newsResponse = await CommonController.getNews();
        setNewsData(newsResponse);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    }

    fetchNews();
  }, []);

  return (
    <div>
      <NewsListMolesules newsData={newsData} />
    </div>
  );
};
