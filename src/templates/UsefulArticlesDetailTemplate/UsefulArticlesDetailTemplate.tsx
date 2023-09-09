import { Spin } from "antd";
import axios from "axios";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DetailsMolecules } from "../../components/molecules/";
import { IDetailsMolecules } from "../../components/molecules/DetailsMolecules/DetailsMolecules";
import { FooterOrganism, HeaderOrganism } from "../../components/organisms";

export const UsefulArticlesDetailTemplate: FC = () => {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(true);
  const [article, setArticle] = useState<IDetailsMolecules | null>(null);
  const baseURL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseURL}/api/v1/news/articles/${id}`);
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
