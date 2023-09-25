import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../../store/slice/cartSlice";
import { CartItem, Product } from "./ProductCard.interface";

interface ProductCardProps {
  product: Product;
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

  // Calculate discount percentage
  const discountPercentage = 30;

  return (
    <div className="border border-gray-300 rounded-lg shadow-md w-[293px] h-[485px] overflow-y-hidden bg-white">
      <div className="p-4">
        <div className="flex justify-between items-center">
          <div>
            {discountPercentage > 0 && (
              <span className="bg-gradient-to-r from-yellow-500 via-red-500 to-red-700 text-white rounded-sm">
                {discountPercentage}% скидка
              </span>
            )}
          </div>
          <button
            className="bg-transparent hover:bg-gray-200 p-2 rounded-full"
            onClick={() => handleAddToCart(quantity)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
        </div>
        <Link to={`/products/${product?.id}`}>
          <img
            src={product?.images[0]?.image}
            alt={product?.name}
            className="w-[300px] h-[200px] mb-2"
          />
        </Link>
        <h6 className="text-xl mb-1">{product?.name}</h6>
        <p className="text-lg mb-2 text-[#FE9C08]">Цена: ${product?.price}</p>
        <div className="flex items-center justify-around border border-gray-300 rounded-lg">
          <button
            className="w-12 h-full hover:bg-gray-300 rounded-l-lg flex items-center justify-center"
            onClick={() => setQuantity(Math.max(quantity - 1, 1))}
          >
            <span className="text-xl">-</span>
          </button>
          <input
            type="number"
            className="w-16 text-center border-none border-gray-400 focus:outline-none"
            min={1}
            value={quantity}
            onChange={(e) => handleQuantityChange(Number(e.target.value))}
          />
          <button
            className="w-12 h-full hover:bg-gray-300 rounded-r-lg flex items-center justify-center"
            onClick={() => setQuantity(quantity + 1)}
          >
            <span className="text-xl">+</span>
          </button>
        </div>

      </div>
      <div className="mt-auto p-4">
        <button
          className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-md py-2 transition duration-300"
          onClick={() => handleAddToCart(quantity)}
        >
            Купить
        </button>
      </div>
    </div>
  );
};
