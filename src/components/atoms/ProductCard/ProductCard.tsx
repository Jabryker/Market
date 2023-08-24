import React, { FC, useState } from "react";
import { Card, Button, InputNumber } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { LoadingSkeleton } from "../../atoms";
import { Product } from "./ProductCard.interface";

interface ProductCardProps {
  product: Product | null;
  onAddToCart: (quantity: number) => void;
}

const ProductCard: FC<ProductCardProps> = ({ product, onAddToCart }) => {
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

  if (!product) {
    return <LoadingSkeleton />;
  }

  return (
    <Card
      className="w-full max-w-xs mx-auto"
      cover={
        <img
          src={product?.images[0].image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
      }
      actions={[
        <InputNumber min={1} value={quantity} onChange={handleQuantityChange} />,
        <Button icon={<ShoppingCartOutlined />} onClick={handleAddToCart}>
          Add to Cart
        </Button>,
        <Button type="primary" onClick={() => console.log("Details clicked")}>
          Подробнее
        </Button>,
      ]}
    >
      <h3 className="text-lg font-semibold mb-1">{product?.name}</h3>
      <p className="text-gray-600">{product?.description}</p>
      <p className="text-green-600 font-semibold">${product?.price}</p>
    </Card>
  );
};

export default ProductCard;
