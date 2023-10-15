import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { BacketAdder, FavoriteAtom } from '../../atoms';
import { Product } from './ProductCard.interface';

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

  const discountPercentage = 30;

  return (
    <div className='pt-4 pb-4 rounded-lg  w-[293px] h-[485px] overflow-y-hidden bg-white'>
      <div className=' flex flex-col justify-between h-full'>
        <div>
          <div className='flex justify-between items-center' style={{}}>
            <div className='flex items-center'>
              {discountPercentage > 0 && (
                <span
                  className='flex items-center justify-center'
                  style={{
                    width: '51px',
                    height: '32px',
                    background: 'linear-gradient(180deg, #EC9A1E 0%, #ED5555 77%)',
                    color: 'white',
                    fontSize: '14px',
                    fontFamily: 'Basier Square',
                    fontWeight: '600',
                  }}
                >
                  -{discountPercentage}%
                </span>
              )}
            </div>
            <div className='flex items-center space-x-2'>
              <BacketAdder productId={product.id} quantity={quantity} />
            </div>
          </div>
          <Link to={`/products/${product?.id}`}>
            <img
              style={{ marginTop: '10px' }}
              src={product?.images[0]?.image}
              alt={product?.name}
              className='w-[159px] h-[149px] mb-2 mx-auto block'
            />
          </Link>
          <h6 style={{ color: '#0C0C0C', fontSize: '20px', fontFamily: 'Inter', fontWeight: '500', margin: '100px 8px 0' }}>
            {product?.name}
          </h6>
          <p style={{ margin: '0 8px', color: '#FE9C08', fontSize: '18px', fontWeight: '600', marginBottom: '10px' }}>
            Цена: ${product?.price}
          </p>
          <div
            className='flex items-center justify-around border border-gray-300 rounded-lg'
            style={{ margin: '0 8px', borderRadius: ' 10px' }}
          >
            <button
              className='w-12 h-full hover:bg-gray-300 rounded-l-lg flex items-center justify-center'
              onClick={() => setQuantity(Math.max(quantity - 1, 1))}
            >
              <span className='text-xl'>-</span>
            </button>
            <input
              type='number'
              className='w-16 text-center border-none border-gray-400 focus:outline-none'
              min={1}
              value={quantity}
              onChange={(e) => handleQuantityChange(Number(e.target.value))}
            />
            <button
              className='w-12 h-full hover:bg-gray-300 rounded-r-lg flex items-center justify-center'
              onClick={() => setQuantity(quantity + 1)}
            >
              <span className='text-xl'>+</span>
            </button>
          </div>
        </div>
        <button style={{ margin: '0 8px' }} className='bg-[#EC9A1E] text-white text-lg py-2 rounded-md mt-4 hover:bg-[#FFA941]'>
          Купить
        </button>
      </div>
    </div>
  );
};
