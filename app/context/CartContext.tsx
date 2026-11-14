"use client";

import {
  createContext,
  useContext,
  useReducer,
} from "react";

import {
  cartReducer,
  CartState,
  CartAction,
} from "../reducers/cartReducer";

type CartContextType = {
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {

  const initialState: CartState = {
    products: [],
  };

  const [state, dispatch] = useReducer(
    cartReducer,
    initialState
  );

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}