export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  images: ProductImage[];
  specifications: any[];
  reviews: any[];
  category: number;
  store: number;
  discounts: any[];
  payment: any;
}

interface ProductImage {
  id: number;
  image: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
