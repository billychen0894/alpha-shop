import { createContext } from "react";

const UserInputContext = createContext({
  formData: {
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
  },
  updateInput: () => {},
});

export default UserInputContext;
