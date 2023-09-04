export interface IProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
    images: Array<{ id: number; image: string }>;
    specifications: Array<{ id: number; name: string; value: string }>;
    reviews: Array<{ id: number; name: string; text: string }>;
    category: number;
    store: number;
    discounts: Array<{
        id: number;
        product: number;
        discount: number;
        start_date: string;
        end_date: string;
        discounted_price: string;
    }>;
    payment: {
        [key: string]: string;
    };
}