import { useState, useEffect } from "react";
import { UsefulArticlesMolecules } from "../../molecules/UsefulArticlesMolecules/UsefulArticlesMolecules";
import { Article } from "../../molecules/UsefulArticlesMolecules/UsefulArticlesMolecules";
import CommonController from "../../../controllers/CommonController";

export const UsefulArticlesOrganism = () => {
  const [articlesData, setArticlesData] = useState<Article[]>([]);

  useEffect(() => {
    async function fetchNews() {
      try {
        const newsResponse = await CommonController.getArticles();
        setArticlesData(newsResponse);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    }

    fetchNews();
  }, []);

  return (
    <div>
      <UsefulArticlesMolecules articles={articlesData} />
    </div>
  );
};
