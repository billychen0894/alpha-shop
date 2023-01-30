import PaymentForm from "./PaymentForm";
import AddressForm from "./AddressForm";
import DeliveryForm from "./DeliveryForm";
import { useContext, useState } from "react";
import UserInputContext from "../../store/UserInputContext";
import CartContext from "../../store/CartContext";

function StepperForm({ onToPrevStep, onToNextStep, stepControl }) {
  const [formData, setFormData] = useState({
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
  });
  const userInputCtx = useContext(UserInputContext);
  const cartCtx = useContext(CartContext);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(
      `Cardholder Name: ${userInputCtx.formData.payment.cardholderName}`
    );
    console.log(`Card Number: ${userInputCtx.formData.payment.cardNumber}`);
    console.log(`Expiry Date: ${userInputCtx.formData.payment.expiryDate}`);
    console.log(`CVC: ${userInputCtx.formData.payment.cvc}`);
    console.log(`Total: ${cartCtx.totalAmount}`);
  };

  return (
    <>
      {stepControl === "step1" && (
        <AddressForm
          formData={formData}
          setFormData={setFormData}
          onToNextStep={onToNextStep}
        />
      )}
      {stepControl === "step2" && (
        <DeliveryForm
          formData={formData}
          setFormData={setFormData}
          onToNextStep={onToNextStep}
          onToPrevStep={onToPrevStep}
        />
      )}
      {stepControl === "step3" && (
        <PaymentForm
          onToPrevStep={onToPrevStep}
          handleFormSubmit={handleFormSubmit}
        />
      )}
    </>
  );
}

export default StepperForm;
