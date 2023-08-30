import { FC, useEffect, useState } from "react";
import { DiscountProductsMolecules } from "../../components/molecules";
import ProductController from "../../controllers/ProductController";
import { IProduct } from "../../controllers/interfaces/Product.interface";

export const ProductPageTemplate: FC = () => {
  const [allProduct, setAllProduct] = useState<IProduct[]>([]);

  useEffect(() => {
    try {
      const fetchProducts = async () => {
        const fetchedProducts: IProduct[] = await ProductController.getAllProduct();
        setAllProduct(fetchedProducts);
      };

      fetchProducts();
    } catch (e) {
      console.log(e);
    }
  }, []);


  return (
    <div>
      <h2>Product Page</h2>
      <DiscountProductsMolecules products={allProduct} />
    </div>
  );
};
