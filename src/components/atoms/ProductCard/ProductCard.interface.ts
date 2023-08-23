export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  images: ProductImage[];
  specifications: any[]; // Может быть более подробный тип
  reviews: any[]; // То же самое для отзывов
  category: number;
  store: number;
  discounts: any[]; // То же самое для скидок
  payment: any;
}

interface ProductImage {
  id: number;
  image: string;
}
