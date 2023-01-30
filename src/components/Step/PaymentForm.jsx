import Input from "../UI/Input";
import Button from "../UI/Button";
import classes from "./PaymentForm.module.css";
import { useContext } from "react";
import UserInputContext from "../../store/UserInputContext";

function PaymentForm({ onToPrevStep, handleFormSubmit }) {
  const userInputCtx = useContext(UserInputContext);

  return (
    <form
      className={`${classes.input} ${classes.wrapper}`}
      onSubmit={handleFormSubmit}
    >
      <h2>付款資訊</h2>
      <Input
        className={classes.input}
        label="持卡人姓名"
        input={{
          id: "cardholderName",
          type: "text",
        }}
        onChange={(e) => {
          userInputCtx.updateInput("PAYMENT", {
            cardholderName: e.target.value,
          });
        }}
      />
      <Input
        className={classes.input}
        label="卡號"
        input={{
          id: "cardNumber",
          type: "text",
        }}
        onChange={(e) => {
          userInputCtx.updateInput("PAYMENT", {
            cardNumber: e.target.value,
          });
        }}
      />
      <Input
        className={classes.input}
        label="有效期限"
        input={{
          id: "expiryDate",
          type: "text",
          maxLength: "5",
          placeholder: "MM/YY",
        }}
        onChange={(e) => {
          userInputCtx.updateInput("PAYMENT", {
            expiryDate: e.target.value,
          });
        }}
      />
      <Input
        className={classes.input}
        label="CVC/CCV"
        input={{
          id: "cvc",
          type: "text",
          maxLength: "3",
          placeholder: "123",
        }}
        onChange={(e) => {
          userInputCtx.updateInput("PAYMENT", {
            cvc: e.target.value,
          });
        }}
      />
      <hr />
      <section className={classes.btnWrapper}>
        <Button className="prevStepBtn" onClick={onToPrevStep}>
          <i className="gg-arrow-left"></i>
          上一步
        </Button>
        <Button className="nextStepBtn">
          確認下單
          <i className="gg-arrow-right"></i>
        </Button>
      </section>
    </form>
  );
}

export default PaymentForm;
