// Определение типа для элемента корзины
export interface CartItem {
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
}

// Определение типа для изображения
interface Image {
  id: number;
  image: string;
}
