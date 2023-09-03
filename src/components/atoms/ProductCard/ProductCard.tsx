import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "antd";
import { ShoppingCartOutlined, HeartOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../store/slice/cartSlice"; // Correct import path
import { Product, CartItem } from "./ProductCard.interface"; // Import CartItem

interface ProductCardProps {
  product: Product;
  // onAddToCart?: () => void;
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (quantity: number) => {
    const cartItem: CartItem = { product, quantity };
    dispatch(addToCart(cartItem));
  };

  const [quantity, setQuantity] = useState<number>(1);

  const handleQuantityChange = (value: number | null) => {
    if (value !== null) {
      setQuantity(value);
    }
  };

  return (
    <Link to={`/products/${product?.id}`}>
      <Card
        className="w-full max-w-xs mx-auto"
        cover={
          <>
            <Button
              type="link"
              icon={<HeartOutlined style={{ fontSize: "24px", color: "black" }} />}
              className="absolute top-0 right-0"
            />
            <img
              src={product?.images[0]?.image}
              alt={product?.name}
              className="w-full h-48 object-cover"
            />
          </>
        }
        actions={[
          <Button icon={<ShoppingCartOutlined />} onClick={() => handleAddToCart(quantity)}>
            Добавить в корзину
          </Button>,
        ]}
      >
        <h3 className="text-lg font-semibold mb-1">{product?.name}</h3>
        <p className="text-black-600 font-semibold">${product?.price}</p>
      </Card>
    </Link>
  );
};
