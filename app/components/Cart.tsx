"use client";

import { useCart } from "../context/CartContext";

export default function Cart() {

  const { state, dispatch } = useCart();

  const totalPrice = state.products.reduce(
    (total, product) =>
      total + product.price * product.quantity,
    0
  );

  return (
    <section>
      <h2>Shopping Cart</h2>

      {state.products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>

          <p>Price: {product.price}</p>

          <p>Quantity: {product.quantity}</p>

          <button
            onClick={() =>
              dispatch({
                type: "INCREASE",
                payload: product.id,
              })
            }
          >
            +
          </button>

          <button
            onClick={() =>
              dispatch({
                type: "DECREASE",
                payload: product.id,
              })
            }
          >
            -
          </button>

          <button
            onClick={() =>
              dispatch({
                type: "REMOVE",
                payload: product.id,
              })
            }
          >
            Remove
          </button>
        </div>
      ))}

      <h2>Total: {totalPrice}</h2>
    </section>
  );
}