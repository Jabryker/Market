import { useEffect, useState } from "react";
import ProductController from "../../../controllers/ProductController";
import {SkeletonCard, TitleText, displayErrorToast, ViewAllButton} from "../../atoms";
import { Product } from "../../atoms/ProductCard/ProductCard.interface";
import { DiscountProductsMolecules } from "../../molecules/";

export const FeaturedProductsOrganism = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const productsData = await ProductController.getProductBest();
        setProducts(productsData.results);
        setLoading(false);
      } catch (error) {
        // console.error("Error fetching products:", error);
        displayErrorToast("Ошибка при получение лучших товаров");
        setLoading(false);
      }
    }

    fetchProduct();
  }, []);

  return (
    <div>
      <TitleText color="white">Топ продаж</TitleText>
      {loading ? (
        <SkeletonCard quantity={4} /> // Display SkeletonCard when loading
      ) : products.length === 0 ? (
        <SkeletonCard quantity={4} /> // Display SkeletonCard when no products available
      ) : (
        <DiscountProductsMolecules products={products} />
      )}
      <ViewAllButton to="/product" color="white" />
    </div>
  );
};
