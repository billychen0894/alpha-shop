import { useReducer } from "react";
import UserInputContext from "./UserInputContext";

const initialUserInput = {
  address: {
    name: "",
    phone: "",
    email: "",
    address: "",
  },
  delivery: { deliveryMethod: "" },
  payment: {
    cardholderName: "",
    cardNumber: "",
    expiryDate: "",
    cvc: "",
  },
};
const userInputReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE": {
      if (action.inputType === "PAYMENT") {
        return {
          ...state,
          payment: { ...state.payment, ...action.inputData },
        };
      }
      return;
    }
    default: {
      throw new Error("Unknown action" + action.type);
    }
  }
};

function UserInputProvider({ children }) {
  const [userInput, dispatchUserInput] = useReducer(
    userInputReducer,
    initialUserInput
  );

  const handleUpdateInput = (inputType, inputData) => {
    dispatchUserInput({ type: "UPDATE", inputData, inputType });
  };

  const userInputContext = {
    formData: {
      address: {
        name: "",
        phone: "",
        email: "",
        address: "",
      },
      delivery: { deliveryMethod: "" },
      payment: {
        cardholderName: userInput.payment.cardholderName,
        cardNumber: userInput.payment.cardNumber,
        expiryDate: userInput.payment.expiryDate,
        cvc: userInput.payment.cvc,
      },
    },
    updateInput: handleUpdateInput,
  };
  return (
    <UserInputContext.Provider value={userInputContext}>
      {children}
    </UserInputContext.Provider>
  );
}

export default UserInputProvider;
