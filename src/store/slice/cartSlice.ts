import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../components/atoms/ProductCard/ProductCard.interface";

// Define the type for a cart item
interface CartItem {
  product: Product;
  quantity: number;
}

// Define the type for the cart state
interface CartState {
  cartItems: CartItem[];
}

// Define the initial state of the cart
const initialState: CartState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      state.cartItems.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter((item) => item.product.id !== action.payload);
    },
    updateCartItemQuantity: (
      state,
      action: PayloadAction<{ productId: number; quantity: number }>,
    ) => {
      const { productId, quantity } = action.payload;
      const cartItem = state.cartItems.find((item) => item.product.id === productId);
      if (cartItem) {
        cartItem.quantity = quantity;
      }
    },
  },
});

export const { addToCart, removeFromCart, updateCartItemQuantity } = cartSlice.actions;

export default cartSlice.reducer;
