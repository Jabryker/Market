import { FC } from "react";
import { Row, Col } from "antd";
import { Product } from "../../atoms/ProductCard/ProductCard.interface";
import { ProductCard, TitleText } from "../../atoms/";

interface FeaturedProductsMoleculesProps {
  products: Product[];
}

export const FeaturedProductsMolecules: FC<FeaturedProductsMoleculesProps> = ({ products }) => {
  return (
    <div className="discount-products-block">
      <TitleText>FeaturedProductsMolecules</TitleText>
      <Row gutter={[16, 16]}>
        {products.map((product) => (
          <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
            <ProductCard
              product={product}
              // onAddToCart={() => console.log("add card", product.id)}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};
