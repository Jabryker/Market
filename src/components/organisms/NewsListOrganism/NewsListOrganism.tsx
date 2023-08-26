import { useState, useEffect } from "react";
import { NewsListMolesules } from "../../molecules/";
import { News } from "../../molecules/NewsListMolesules/NewsListMolesules";
import { displayErrorToast } from "../../atoms";
import CommonController from "../../../controllers/CommonController";

export const NewsListOrganism = () => {
  const [newsData, setNewsData] = useState<News[]>([]);

  useEffect(() => {
    async function fetchNews() {
      try {
        const newsResponse = await CommonController.getNews();
        setNewsData(newsResponse);
      } catch (error) {
        // console.error("Error fetching news:", error);
        displayErrorToast("Error fetching news :(");
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
