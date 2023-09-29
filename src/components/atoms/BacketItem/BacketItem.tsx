import { FC } from "react";
import { IProduct } from "../../../controllers/interfaces/Product.interface";

interface BacketItemProps {
    products: IProduct[];
}

export const BacketItem: FC<BacketItemProps> = ({ products }) => {
    return (
        <div className="grid grid-cols-1 gap-4 border-b border-gray-300">
            {products.map((product) => (
                <div className="flex items-center p-4" key={product.id}>
                    <div className="w-1/6">
                        <img
                            src={product.images[0]?.image} // Assuming the image is in the first element of the images array
                            alt={product.name}
                            className="w-[200px] h-[100px] rounded-lg"
                        />
                    </div>
                    <div className="w-3/4 ml-4">
                        <h3 className="text-xl font-semibold">{product.name}</h3>
                        <p className="text-gray-600">{product.description}</p>
                    </div>
                    <div>
                        <p className="text-gray-600 mb-2">Цена: <span className="text-[#DB4444]">₽{product.price}</span></p>
                        <button
                            className="px-2 py-1 border border-gray-300 rounded-l-lg bg-white text-[#EC9A1E]"
                        >
                            -
                        </button>
                        <input
                            type="number"
                            min="1"
                            className="w-10 bg-[#47535FCC] px-2 py-1 border border-gray-300 rounded-none text-center text-white"
                            value={1}
                            onChange={(e) => {
                                const newQuantity = parseInt(e.target.value, 10);
                            }}
                        />
                        <button
                            className="px-2 py-1 border border-[#EC9A1E] rounded-r-lg bg-transparent text-[#EC9A1E]"
                        >
                            +
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};
