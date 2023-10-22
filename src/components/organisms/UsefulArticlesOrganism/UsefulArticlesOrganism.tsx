import { useEffect, useState } from "react";
import CommonController from "../../../controllers/CommonController";
import { SkeletonCombine, TitleText, displayErrorToast, ViewAllButton } from "../../atoms";
import { UsefulArticlesMolecules } from "../../molecules/";
import { IArticle } from "../../molecules/UsefulArticlesMolecules/UsefulArticlesMolecules";

export const UsefulArticlesOrganism = () => {
  const [articlesData, setArticlesData] = useState<IArticle[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchNews() {
      try {
        const newsResponse = await CommonController.getArticles();
        setArticlesData(newsResponse);
        setLoading(false);
      } catch (error) {
        displayErrorToast("Произошла ошибка получения полезных статей");
        setLoading(false);
      }
    }

    fetchNews();
  }, []);

  return (
    <div className="rounded-t-2xl bg-white" style={{ marginTop:'-15px' }}>
      <div className="w-11/12 max-w-screen-2xl m-auto">
        <TitleText color="text-[#47535F]">Полезные статьи</TitleText>
        {loading ? (
          <SkeletonCombine quantity={4} />
        ) : articlesData.length === 0 ? (
          <SkeletonCombine quantity={4} />
        ) : (
          <UsefulArticlesMolecules articles={articlesData} />
        )
        }
        <ViewAllButton to="/articles" color="#47535F" />
      </div>
    </div>
  );
};
