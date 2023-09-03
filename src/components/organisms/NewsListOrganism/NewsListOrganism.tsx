import { useState, useEffect } from "react";
import { NewsListMolesules } from "../../molecules/";
import { News } from "../../molecules/NewsListMolesules/NewsListMolesules";
import { displayErrorToast, TitleText, SkeletonCard } from "../../atoms";
import CommonController from "../../../controllers/CommonController";

export const NewsListOrganism = () => {
  const [newsData, setNewsData] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      try {
        const newsResponse = await CommonController.getNews();
        setNewsData(newsResponse);
        setLoading(false);
      } catch (error) {
        // console.error("Error fetching news:", error);
        displayErrorToast("Error fetching news :(");
        setLoading(false);
      }
    }

    fetchNews();
  }, []);

  return (
    <div>
      <TitleText>Наши новости</TitleText>
      {loading ? <SkeletonCard quantity={4} /> : <NewsListMolesules newsData={newsData} />}
    </div>
  );
};
