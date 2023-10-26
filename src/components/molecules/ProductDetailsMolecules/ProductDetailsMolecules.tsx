import { FC, useState } from "react";
import { Row, Col, Card, Button, Typography, InputNumber, Tabs } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;
const { TabPane } = Tabs;

interface CartItem {
  product: IProduct;
  quantity: number;
}

export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  images: Image[];
  specifications: Specification[];
  reviews: Review[];
  category: number;
  store: number;
  discounts: Discount[];
  payment: Payment;
}

interface Image {
  id: number;
  image: string;
}

interface Specification {
  id: number;
  name: string;
  value: string;
}

interface Review { }

interface Discount {
  id: number;
  discount: number;
  discounted_price: number;
  start_date: string;
  end_date: string;
}

interface Payment { }

interface ProductDetailsMoleculesProps {
  product: IProduct | null;
}

export const ProductDetailsMolecules: FC<ProductDetailsMoleculesProps> = ({ product }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  const [cart, setCart] = useState<CartItem[]>([]);

  if (!product) {
    return null; // Handle loading or error state
  }

  const saveCartToLocalStorage = (cartItems: CartItem[]) => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };

  const handleTabChange = (tabKey: string) => {
    setActiveTab(tabKey);
  };

  const handleAddToCart = () => {
    const newItem: CartItem = { product, quantity };
    const newCart = [...cart, newItem];
    setCart(newCart);
    saveCartToLocalStorage(newCart);
  };

  const handleBuyNow = () => {
    // Implement your buy now logic here
    console.log("handleBuyNow");
  };

  const discountedPrice = product.price - (product.price * (product.discounts[0]?.discount / 100 || 0));

  return (
    <Row gutter={16} className="mx-auto mb-8">
      <Col span={6}>
        <div className="flex flex-col items-center">
          <div className="space-y-2">
            {product?.images.map((image, index) => (
              <img
                key={index}
                alt={product.name}
                src={image.image}
                className={`w-32 h-32 object-contain cursor-pointer ${index === selectedImageIndex ? "border-2 border-gray-500" : ""
                  }`}
                onClick={() => setSelectedImageIndex(index)}
              />
            ))}
          </div>
        </div>
      </Col>
      <Col span={6}>
        <div className="flex flex-col items-center">
          <img
            alt={product.name}
            src={product?.images[selectedImageIndex]?.image}
            className="w-full h-auto max-h-96 object-contain cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => setSelectedImageIndex(selectedImageIndex === 0 ? 1 : 0)}
          />
        </div>
      </Col>
      <Col span={12}>
        <Card>
          <div className="flex flex-col">
            <Title level={4}>{product.name}</Title>
            <div className="flex items-center mb-4">
              <Text strong>${discountedPrice.toFixed(2)}</Text>
              {product.discounts[0]?.discount && (
                <Text type="secondary" className="ml-2">
                  <del>${product.price.toFixed(2)}</del>
                </Text>
              )}
            </div>
            <Text>{product.description}</Text>
            <div className="flex items-center mt-2 mb-4">
              <InputNumber
                min={1}
                value={quantity}
                onChange={(value) => setQuantity(value as number)}
                className="mr-2"
              />
              <Button style={{ padding: '0' }} type="text" onClick={handleBuyNow}>
                Купить
              </Button>
              {/* <Button icon={<ShoppingCartOutlined />} onClick={handleAddToCart} className="ml-2">
                Добавить в корзину
              </Button> */}
              <Button
                icon={<ShoppingCartOutlined />}
                onClick={handleAddToCart}
                className="ml-2"
              ></Button>
            </div>
          </div>
        </Card>
        <Tabs activeKey={activeTab} onChange={handleTabChange} className="mt-4">
          <TabPane tab="Описание" key="description">
            <p>{product.description}</p>
          </TabPane>
          <TabPane tab="Дополнительная информация" key="specifications">
            {/* Render specifications here */}
          </TabPane>
          <TabPane tab="Отзывы" key="reviews">
            {/* Render reviews here */}
          </TabPane>
          <TabPane tab="Видео" key="video">
            {/* Render video here */}
          </TabPane>
        </Tabs>
      </Col>
    </Row>
  );
};
