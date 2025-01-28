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
    clearCart: (state) => {
      state.cartItems = [];
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += 1;
        total += item.price ?? 0;
      });
      state.amount = amount;
      state.total = total;
    },
  },
});

export const { addToCart, removeFromCart, clearCart, calculateTotals } =
  cartSlice.actions;

export const cartReducer = cartSlice.reducer;
