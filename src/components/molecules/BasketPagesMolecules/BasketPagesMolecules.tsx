import { FC } from "react";
import { Button, Empty, InputNumber, List } from "antd";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateCartItemQuantity } from "../../../store/slice/cartSlice";
import { CartItem } from "../../atoms/ProductCard/ProductCard.interface";
import rootReducer from "../../../store/reducers/rootReducer"; // Импортируем корректный корневой редюсер

export const BasketPagesMolecules: FC = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state: ReturnType<typeof rootReducer>) => state.cart.cartItems); // Используем корректный rootReducer

  const handleRemoveFromCart = (productId: number) => {
    dispatch(removeFromCart(productId));
  };

  const handleUpdateQuantity = (productId: number, quantity: number) => {
    dispatch(updateCartItemQuantity({ productId, quantity }));
  };

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
              description={`Цена: ⃀${item.product.price}`}
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
