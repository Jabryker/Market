import { useState, useEffect } from "react";
import { DiscountProductsMolecules } from "../../molecules/";
import { Product } from "../../atoms/ProductCard/ProductCard.interface";
import ProductController from "../../../controllers/ProductController";
import { TitleText, displayErrorToast, ProductSkeleton } from "../../atoms";

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
      <TitleText>Лучшие товары</TitleText>
      {loading ? (
        <ProductSkeleton quantity={4} />
      ) : (
        <DiscountProductsMolecules products={products} />
      )}
    </div>
  );
};
