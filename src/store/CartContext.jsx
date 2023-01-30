import { createContext } from "react";

const CartContext = createContext({
  items: [],
  totalAmount: 0,
  removeItem: () => {},
  addItem: () => {},
});

export default CartContext;
