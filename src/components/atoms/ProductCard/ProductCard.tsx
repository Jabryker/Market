import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Button, InputNumber } from "antd";
import { ShoppingCartOutlined, HeartOutlined } from "@ant-design/icons";
import { Product } from "./ProductCard.interface";

interface ProductCardProps {
  product: Product | null;
  onAddToCart: (quantity: number) => void;
}

export const ProductCard: FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState<number>(1);

  const handleQuantityChange = (value: number | null) => {
    if (value !== null) {
      setQuantity(value);
    }
  };

  const handleAddToCart = () => {
    onAddToCart(quantity);
    console.log("Added to cart:", quantity);
  };

  return (
    <Card
      className="w-full max-w-xs mx-auto"
      cover={
        <>
          <Button
            type="link"
            icon={<HeartOutlined style={{ fontSize: "24px", color: "black" }} />}
            className="absolute top-0 right-0"
          />
          <Button
            icon={<ShoppingCartOutlined />}
            className="absolute top-10 right-0"
            onClick={handleAddToCart}
          />
          <img
            src={product?.images[0]?.image}
            alt={product?.name}
            className="w-full h-48 object-cover"
          />
        </>
      }
      actions={[
        <Button type="primary">
          <Link to={`/products/${product?.id}`}>Подробнее</Link>
        </Button>,
        <InputNumber min={1} max={20} value={quantity} onChange={handleQuantityChange} />,
      ]}
    >
      <h3 className="text-lg font-semibold mb-1">{product?.name}</h3>
      <p className="text-green-600 font-semibold">${product?.price}</p>
    </Card>
  );
};
