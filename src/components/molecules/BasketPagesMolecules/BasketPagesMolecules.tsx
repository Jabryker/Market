import React, { FC, useState } from "react";
import { Button, Empty, InputNumber, List } from "antd";
import { Link } from "react-router-dom";

// Определение типа для элемента корзины
interface CartItem {
  product: IProduct;
  quantity: number;
}

// Определение типа для продукта
interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  images: Image[];
  // ... остальные поля продукта
}

// Определение типа для изображения
interface Image {
  id: number;
  image: string;
}

export const BasketPagesMolecules: FC = () => {
  const getCartFromLocalStorage = () => {
    const cartItemsJSON = localStorage.getItem("cart");
    if (cartItemsJSON) {
      return JSON.parse(cartItemsJSON) as CartItem[];
    }
    return [];
  };

  const [cart, setCart] = useState<CartItem[]>(getCartFromLocalStorage());

  if (cart.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Empty description="Ваша корзина пуста" />
        <Button type="primary" className="mt-4">
          <Link to="/">Вернуться на главную</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="p-4">
      <List
        itemLayout="horizontal"
        dataSource={cart}
        renderItem={(item: CartItem) => (
          <List.Item
            actions={[
              <InputNumber min={1} defaultValue={item.quantity} />,
              <Button type="dashed">Удалить</Button>,
            ]}
          >
            <List.Item.Meta
              avatar={
                <img
                  src={item.product.images[0].image}
                  alt={item.product.name}
                  style={{ width: "80px" }}
                />
              }
              title={item.product.name}
              description={`Цена: $${item.product.price}`}
            />
          </List.Item>
        )}
      />
      <div className="text-center mt-4">
        <Button type="primary" className="mr-2">
          Продолжить покупки
        </Button>
        <Button type="default">
          <Link to="/">Вернуться на главную</Link>
        </Button>
      </div>
    </div>
  );
};
