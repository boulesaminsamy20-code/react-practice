export type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

export type CartState = {
  products: Product[];
};

export type CartAction =
  | { type: "ADD"; payload: Product }
  | { type: "REMOVE"; payload: number }
  | { type: "INCREASE"; payload: number }
  | { type: "DECREASE"; payload: number };


export function cartReducer(
  state: CartState,
  action: CartAction
): CartState {

  switch (action.type) {

    case "ADD": {
      const existingProduct = state.products.find(
        (product) => product.id === action.payload.id
      );

      if (existingProduct) {
        return {
          ...state,
          products: state.products.map((product) =>
            product.id === action.payload.id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          ),
        };
      }

      return {
        ...state,
        products: [...state.products, action.payload],
      };
    }

    case "REMOVE":
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };

    case "INCREASE":
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload
            ? { ...product, quantity: product.quantity + 1 }
            : product
        ),
      };

    case "DECREASE":
      return {
        ...state,
        products: state.products
          .map((product) =>
            product.id === action.payload
              ? { ...product, quantity: product.quantity - 1 }
              : product
          )
          .filter((product) => product.quantity > 0),
      };

    default:
      return state;
  }
}