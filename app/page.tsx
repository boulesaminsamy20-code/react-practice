"use client";

import { CartProvider } from "./context/CartContext";

import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

export default function Home() {

  return (
    <CartProvider>
      <main>
        <Navbar />

        <ProductList />

        <Cart />
      </main>
    </CartProvider>
  );
}