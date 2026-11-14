"use client";

import { useCart } from "../context/CartContext";

export default function Navbar() {

  const { state } = useCart();

  const totalQuantity = state.products.reduce(
    (total, product) => total + product.quantity,
    0
  );

  return (
    <nav>
      <h2>My Store</h2>

      <p>Cart: {totalQuantity}</p>
    </nav>
  );
}