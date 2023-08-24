import { useState, useEffect } from "react";
import { DiscountProductsMolecules } from "../../molecules/";
import { Product } from "../../atoms/ProductCard/ProductCard.interface";
import ProductController from "../../../controllers/ProductController";
import { TitleText } from "../../atoms";

export const DiscountProductsOrganisms = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const productsData = await ProductController.getProductSale(); // Вызов контроллера
        setProducts(productsData.results);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProduct();
  }, []);

  return (
    <div>
      <TitleText>Товары со скидкой</TitleText>
      <DiscountProductsMolecules products={products} />
    </div>
  );
};
