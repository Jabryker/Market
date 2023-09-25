import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductController from "../../../controllers/ProductController";
import { SkeletonCard, TitleText, displayErrorToast } from "../../atoms";
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
    <div className="my-20">
      <TitleText color="text-[#47535F]">Акция!</TitleText>
      {loading ? (
        <SkeletonCard quantity={4} /> // Display SkeletonCard when loading
      ) : products.length === 0 ? (
        <SkeletonCard quantity={4} /> // Display SkeletonCard when no products available
      ) : (
        <DiscountProductsMolecules products={products} />
      )}
      <div className="mt-4 flex justify-end mr-5">
        <Link to="/product" className="text-[#47535F] hover:underline font-bold">
          Смотреть все &gt;
        </Link>
      </div>
    </div>
  );
};
