import { useRef } from "react";
import Input from "../UI/Input";
import classes from "./PaymentForm.module.css";

function PaymentForm() {
  const cardholderNameInput = useRef();
  const cardNumberInput = useRef();
  const expiryDateInput = useRef();
  const cvcInput = useRef();

  return (
    <>
      <h2 className={classes.input}>付款資訊</h2>
      <Input
        ref={cardholderNameInput}
        className={classes.input}
        label="持卡人姓名"
        input={{
          id: "cardholderName",
          type: "text",
        }}
      />
      <Input
        ref={cardNumberInput}
        className={classes.input}
        label="卡號"
        input={{
          id: "cardNumber",
          type: "text",
        }}
      />
      <Input
        ref={expiryDateInput}
        className={classes.input}
        label="有效期限"
        input={{
          id: "expiryDate",
          type: "text",
          maxLength: "5",
          placeholder: "MM/YY",
        }}
      />
      <Input
        ref={cvcInput}
        className={classes.input}
        label="CVC/CCV"
        input={{
          id: "cvc",
          type: "text",
          maxLength: "3",
          placeholder: "123",
        }}
      />
    </>
  );
}

export default PaymentForm;
