import { useEffect, useState } from "react";
import ProductController from "../../../controllers/ProductController";
import {SkeletonCard, TitleText, displayErrorToast, ViewAllButton} from "../../atoms";
import { Product } from "../../atoms/ProductCard/ProductCard.interface";
import { TopProductMolecules } from "../../molecules/TopProductMolecules/TopProductMolecules";

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
    <div className="w-11/12 max-w-screen-2xl m-auto">
      <TitleText color="white">Топ продаж</TitleText>
      {loading ? (
        <SkeletonCard quantity={4} /> // Display SkeletonCard when loading
      ) : products.length === 0 ? (
        <SkeletonCard quantity={4} /> // Display SkeletonCard when no products available
      ) : (
        <TopProductMolecules products={products} />
      )}
      <ViewAllButton to="/product" color="white" />
    </div>
  );
};
