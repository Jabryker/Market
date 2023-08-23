import { FC, useState, useEffect } from "react";
import DiscountProductsMolecules from "../../molecules/DiscountProductsMolecules/DiscountProductsMolecules";
import { Product } from "../../atoms/ProductCard/ProductCard.interface";
import ProductController from "../../../controllers/ProductController";

export const DiscountProductsOrganisms: FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const productsData = await ProductController.getProduct(); // Вызов контроллера
        setProducts(productsData.results);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProduct();
  }, []);

  return (
    <div>
      <DiscountProductsMolecules products={products} />
    </div>
  );
};
