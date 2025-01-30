import { Product } from '@/models/product';
import { createSlice } from '@reduxjs/toolkit';

export type CartItem = Partial<Product & { quantity: number }>;

export interface CartState {
  cartItems: CartItem[];
  amount: number;
  total: number;
}

const initialState: CartState = {
  cartItems: [],
  amount: 0,
  total: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push({ ...action.payload, quantity: 1 });
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
    },
    updateCartItemQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cartItems.find((item) => item.id === id);
      if (item) {
        item.quantity = quantity;
      }
    },
    increaseCartItemQuantity: (state, action) => {
      const { id } = action.payload;
      const item = state.cartItems.find((item) => item.id === id);
      if (item) {
        item.quantity = (item.quantity ?? 0) + 1;
      }
    },
    decreaseCartItemQuantity: (state, action) => {
      const { id } = action.payload;
      const item = state.cartItems.find((item) => item.id === id);
      if (item) {
        item.quantity = (item.quantity ?? 0) - 1;
        if (item.quantity === 0) {
          state.cartItems = state.cartItems.filter((item) => item.id !== id);
        }
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.quantity ?? 0;
        total += item.price ?? 0;
      });
      state.amount = amount;
      state.total = Number(total.toFixed(2));
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateCartItemQuantity,
  increaseCartItemQuantity,
  decreaseCartItemQuantity,
  clearCart,
  calculateTotals,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
