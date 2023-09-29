import { FC } from "react";

export const BasketPagesMolecules: FC = () => {

  return (
    <div className="p-4 flex flex-row">
      {/* <div className="bg-[#F5F5F5] h-[80vh] p-4 mx-9 w-[60%]">
        <h3 className="text-2xl font-bold mb-10">Ваша корзина</h3>
        <div className="flex space-x-4">
          <div className="w-3/4">
            {cart.map((item: CartItem) => (
              <div
                key={item.product.id}
                className="flex justify-between items-center border-b border-gray-200 mb-4 pb-4"
              >
                <div className="flex items-center space-x-4 m-2">
                  <img
                    src={item.product.images[0].image}
                    alt={item.product.name}
                    className="w-[200px] h-[100px] rounded-lg"
                  />
                  <div className="flex flex-col">
                    <p className="text-lg font-semibold mb-2">{item.product.name}</p>
                    <p className="text-[#253138CC] font-medium mb-2">Магазин: {item.product.brand}</p>
                    <p className="text-gray-600 mb-2">Цена: <span className="text-[#DB4444]">₽{item.product.price}</span></p>
                    <div className="flex items-center my-2">
                      <button
                        onClick={() => updateCartQuantity(item.product.id, item.quantity - 1)}
                        className="px-2 py-1 border border-gray-300 rounded-l-lg bg-white text-[#EC9A1E]"
                      >
                            -
                      </button>
                      <input
                        type="number"
                        min="1"
                        className="w-10 bg-[#47535FCC] px-2 py-1 border border-gray-300 rounded-none text-center text-white"
                        value={item.quantity}
                        onChange={(e) => {
                          const newQuantity = parseInt(e.target.value, 10);
                          updateCartQuantity(item.product.id, newQuantity);
                        }}
                      />
                      <button
                        onClick={() => updateCartQuantity(item.product.id, item.quantity + 1)}
                        className="px-2 py-1 border border-[#EC9A1E] rounded-r-lg bg-transparent text-[#EC9A1E]"
                      >
                            +
                      </button>

                    </div>

                    <div className="flex">
                      <button
                        onClick={() => handleRemoveFromCart(item.product.id)}
                        className="text-left"
                      >
                        <BsTrash size={40} />
                      </button>
                      <button
                        onClick={() => console.log("Связаться с продавцом")}
                        className="ml-2 border border-[#EC9A1E] text-[#EC9A1E] px-4 py-2 rounded-lg hover:bg-[#EC9A1E] hover:text-white hover:border-transparent transition-colors duration-300"
                      >
                            Связаться с продавцом
                      </button>
                    </div>                      
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-[30%] h-[18vh] bg-[#F5F5F5]">
        <div className="p-4 rounded-lg shadow-md">
          <p className="text-gray-600">Общее количество товаров: {totalQuantity}</p>
          <p className="text-gray-600">Стоимость по скидке: <span className="text-[#DB4444]">₽{totalCost}</span></p>
          <p className="text-xl font-semibold mb-4">Итого: ₽{totalCost}</p>
          <button className="bg-[#EC9A1E] text-[#fff] px-[5px] py-[10px]">Купить</button>
        </div>
      </div> */}
      <div>Корзина</div>
    </div>
  );
};
