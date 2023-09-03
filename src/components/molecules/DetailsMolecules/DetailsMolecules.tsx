import { FC } from "react";
import { Card, Row, Col, Steps, Tag, Divider, Button } from "antd";

const { Step } = Steps;

export interface IDetailsMolecules {
  id: number;
  name: string;
  description: string;
  photo: string;
}
interface IDetailsMoleculesProps {
  details: IDetailsMolecules;
}

export const DetailsMolecules: FC<IDetailsMoleculesProps> = ({ details }) => {
  return (
    <div className="px-8">
      <Row gutter={[16, 16]}>
        <Col xs={24} md={12}>
          <Card
            cover={
              <img
                src={details.photo}
                alt={details.name}
                className="h-48 w-full object-cover md:h-96"
              />
            }
          />
        </Col>
        <Col xs={24} md={12}>
          <Card>
            <h1 className="text-2xl font-semibold mb-2">{details.name}</h1>
            <p className="text-gray-600">{details.description}</p>
            <div className="mt-4">
              <Steps direction="vertical" current={1}>
                <Step title="Step 1" description="This is a description." />
                <Step title="Step 2" description="This is a description." />
                <Step title="Step 3" description="This is a description." />
              </Steps>
            </div>
            <Divider />
            <div className="flex items-center justify-between">
              <Tag color="blue">#новости</Tag>
              <Button type="primary">Read More</Button>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
