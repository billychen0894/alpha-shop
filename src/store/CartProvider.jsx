import { useReducer } from "react";
import CartContext from "./CartContext";

const skinnyJeanId = crypto.randomUUID();
const slimJeanId = crypto.randomUUID();

const initialCartState = {
  // assume the initial items were added by users
  items: [
    {
      id: skinnyJeanId,
      fileName: "product-1.jpg",
      productName: "破壞補丁修身牛仔褲",
      price: 3999,
      count: 1,
    },
    {
      id: slimJeanId,
      fileName: "product-2.jpg",
      productName: "刷色直筒牛仔褲",
      price: 1299,
      count: 1,
    },
  ],
  totalAmount: 5298,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      let updatedTotalAmount = state.totalAmount + action.item.price;

      const prevItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      const prevItem = state.items[prevItemIndex];

      let updatedItems;

      if (prevItem) {
        const nextItem = {
          ...prevItem,
          count: prevItem.count + 1,
        };
        updatedItems = [...state.items];
        updatedItems[prevItemIndex] = nextItem;
      } else {
        updatedItems = state.items.concat(action.item);
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }
    case "REMOVE": {
      const prevItemIndex = state.items.findIndex(
        (item) => item.id === action.id
      );
      const prevItem = state.items[prevItemIndex];

      let updatedTotalAmount = state.totalAmount - prevItem.price;

      let updatedItems;

      if (prevItem.count === 1) {
        updatedItems = state.items.filter((item) => item.id !== action.id);
      } else {
        const nextItem = {
          ...prevItem,
          count: prevItem.count - 1,
        };
        updatedItems = [...state.items];
        updatedItems[prevItemIndex] = nextItem;
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }
    default: {
      throw Error("Unknown action" + action.type);
    }
  }
};

function CartProvider({ children }) {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    initialCartState
  );

  const handleRemoveItem = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };
  const handleAddItem = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: handleAddItem,
    removeItem: handleRemoveItem,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartProvider;
