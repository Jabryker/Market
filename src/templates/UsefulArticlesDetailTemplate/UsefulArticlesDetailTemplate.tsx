import { FC, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Spin } from "antd";
import axios from "axios";
import { FooterOrganism, HeaderOrganism } from "../../components/organisms";
import { DetailsMolecules } from "../../components/molecules/";
import { IDetailsMolecules } from "../../components/molecules/DetailsMolecules/DetailsMolecules";

export const UsefulArticlesDetailTemplate: FC = () => {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(true);
  const [article, setArticle] = useState<IDetailsMolecules | null>(null);
  const baseURL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseURL}/api/v1/news/articles-detail/${id}`);
        setArticle(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching article details:", error);
        setLoading(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, []);

  return (
    <div>
      {loading ? (
        <Spin size="large" />
      ) : (
        <>
          <HeaderOrganism />
          {article && <DetailsMolecules details={article} />}
          <FooterOrganism />
        </>
      )}
    </div>
  );
};
