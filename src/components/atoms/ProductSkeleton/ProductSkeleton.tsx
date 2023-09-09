import { Col, Row, Skeleton } from "antd";
import { FC } from "react";

interface ProductSkeletonProps {
  quantity: number;
}

export const ProductSkeleton: FC<ProductSkeletonProps> = ({ quantity }) => {
  return (
    <div className="discount-products-block">
      <Row gutter={[16, 16]}>
        {Array.from({ length: quantity }).map((_, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6}>
            <Skeleton
              active
              avatar={{ size: "large", shape: "square" }}
              paragraph={{ rows: 2 }}
              title={{ width: "80%" }}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};
