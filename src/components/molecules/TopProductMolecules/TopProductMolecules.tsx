import { FC } from "react";
import { Row, Col } from "antd";
import { Product } from "../../atoms/ProductCard/ProductCard.interface";
import { ProductCard } from "../../atoms/";

interface DiscountProductsOrganismProps {
    products: Product[];
}

export const TopProductMolecules: FC<DiscountProductsOrganismProps> = ({ products }) => {

  // const discountedProducts = products.filter((product) => product.discounts && product.discounts.length > 0);
  
  return (
    <div className="flex justify-center items-center py-2">
      <div className="w-[80vw]">
        <Row gutter={[16, 16]}>
          {products?.map((product) => (
            <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
              <ProductCard
                product={product}
                // onAddToCart={() => console.log("add card", product.id)}
              />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};
