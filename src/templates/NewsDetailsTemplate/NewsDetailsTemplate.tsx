import { FC, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Spin } from "antd";
import axios from "axios";
import { FooterOrganism, HeaderOrganism } from "../../components/organisms";
import { INews } from "../../components/molecules/NewsDetailsMolecules/NewsDetailsMolecules";
import { NewsDetailsMolecules } from "../../components/molecules/";

export const NewsDetailsTemplate: FC = () => {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState<INews | null>(null);
  const baseURL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseURL}/api/v1/news/news-detail/${id}`);
        setNews(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching news details:", error);
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
          {news && <NewsDetailsMolecules news={news} />}
          <FooterOrganism />
        </>
      )}
    </div>
  );
};
