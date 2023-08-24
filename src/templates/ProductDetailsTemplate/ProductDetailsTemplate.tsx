import { FC, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Spin } from "antd";
import axios from "axios";
import {
  ProductDetailsMolecules,
  IProduct,
} from "../../components/molecules/ProductDetailsMolecules/ProductDetailsMolecules";
import { FooterOrganism, HeaderOrganism } from "../../components/organisms";

export const ProductDetailsTemplate: FC = () => {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState<IProduct | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/v1/stores/products/${id}/`);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product details:", error);
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
          <ProductDetailsMolecules product={product} />
          <FooterOrganism />
        </>
      )}
    </div>
  );
};