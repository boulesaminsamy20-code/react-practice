"use client";

import { useCart } from "../context/CartContext";

import type { Product } from "../reducers/cartReducer";

const availableProducts: Product[] = [
  {
    id: 1,
    name: "Laptop",
    price: 20000,
    quantity: 1,
  },
  {
    id: 2,
    name: "Mouse",
    price: 500,
    quantity: 1,
  },
  {
    id: 3,
    name: "Keyboard",
    price: 1000,
    quantity: 1,
  },
];

export default function ProductList() {

  const { dispatch } = useCart();

  return (
    <section>
      <h2>Products</h2>

      {availableProducts.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>

          <p>Price: {product.price}</p>

          <button
            onClick={() =>
              dispatch({
                type: "ADD",
                payload: product,
              })
            }
          >
            Add to Cart
          </button>
        </div>
      ))}
    </section>
  );
}