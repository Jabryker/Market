import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { BacketAdder, FavoriteAtom } from "../../atoms";
import { Product } from "./ProductCard.interface";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const [quantity, setQuantity] = useState<number>(1);

  const handleQuantityChange = (value: number | null) => {
    if (value !== null) {
      setQuantity(value);
    }
  };

  // const discountPercentage = 30;

  return (
    <div className="border border-gray-300 rounded-lg shadow-md w-[293px] h-[485px] overflow-y-hidden bg-white">
      <div className="p-4 flex flex-col justify-between h-full">
        <div>
          <div className="flex justify-between items-center">
            <div>
              {discountPercentage > 0 && (
                <span className="bg-gradient-to-r from-yellow-500 via-red-500 to-red-700 text-white rounded-sm">
                  {discountPercentage}% скидка
                </span>
              )}
            </div>
            <div className="flex items-center space-x-2">
              <BacketAdder productId={product.id} quantity={quantity} />
              <FavoriteAtom productId={product.id} />
            </div>
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
        <button className="bg-[#EC9A1E] text-white text-lg py-2 rounded-md mt-4 hover:bg-[#FFA941]">
          Купить
        </button>
      </div>
    </div>
  );
};
