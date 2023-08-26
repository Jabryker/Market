import { FC } from "react";
import { Card, Row, Col, Skeleton, Button } from "antd";

interface SkeletonCardProps {
  quantity: number;
}

export const SkeletonCard: FC<SkeletonCardProps> = ({ quantity }) => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        {Array.from({ length: quantity }).map((_, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6}>
            <Card>
              <Skeleton.Image style={{ height: "200px" }} />
              <h3 className="text-lg font-semibold mb-2">
                <Skeleton active title={{ width: "80%" }} />
              </h3>
              <p className="text-gray-600">
                <Skeleton active paragraph={{ rows: 2 }} />
              </p>
              <div className="mt-4">
                <Button type="primary" className="w-full">
                  <Skeleton.Button style={{ width: "100%" }} />
                </Button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};
