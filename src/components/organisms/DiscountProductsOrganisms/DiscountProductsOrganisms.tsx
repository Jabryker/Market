import { useEffect, useState } from "react";
import ProductController from "../../../controllers/ProductController";
import { SkeletonCard, TitleText, displayErrorToast, ViewAllButton } from "../../atoms";
import { Product } from "../../atoms/ProductCard/ProductCard.interface";
import { DiscountProductsMolecules } from "../../molecules/";

export const DiscountProductsOrganisms = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const productsData = await ProductController.getProductSale();
        setProducts(productsData.results);
        setLoading(false);
      } catch (error) {
        // console.error("Error fetching products:", error);
        displayErrorToast("Ошибка при получение товаров со скидкой");
        setLoading(false);
      }
    }

    fetchProduct();
  }, []);

  return (
    <div>
      <div className="my-20 w-11/12 max-w-screen-2xl m-auto">
        <TitleText color="text-[#47535F]">Акция!</TitleText>
        {loading ? (
          <SkeletonCard quantity={4} /> // Display SkeletonCard when loading
        ) : products.length === 0 ? (
          <SkeletonCard quantity={4} /> // Display SkeletonCard when no products available
        ) : (
          <DiscountProductsMolecules products={products} />
        )}
        <ViewAllButton to="/product" color="#47535F" />
      </div>
    </div>
  );
};
