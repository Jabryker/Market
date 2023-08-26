import { FC } from "react";
import { Card, Row, Col, Steps, Tag, Divider, Button } from "antd";

const { Step } = Steps;

export interface INews {
  id: number;
  name: string;
  description: string;
  photo: string;
}
interface NewsDetailsMoleculesProps {
  news: INews;
}

export const NewsDetailsMolecules: FC<NewsDetailsMoleculesProps> = ({ news }) => {
  return (
    <div className="px-8">
      <Row gutter={[16, 16]}>
        <Col xs={24} md={12}>
          <Card
            cover={
              <img src={news.photo} alt={news.name} className="h-48 w-full object-cover md:h-96" />
            }
          />
        </Col>
        <Col xs={24} md={12}>
          <Card>
            <h1 className="text-2xl font-semibold mb-2">{news.name}</h1>
            <p className="text-gray-600">{news.description}</p>
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
