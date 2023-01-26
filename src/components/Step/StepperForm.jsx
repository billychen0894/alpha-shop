import PaymentForm from "./PaymentForm";
import AddressForm from "./AddressForm";
import DeliveryForm from "./DeliveryForm";
import classes from "./StepperForm.module.css";
import Button from "../UI/Button";

function StepperForm({ onToPrevStep, onToNextStep, stepControl }) {
  let stepButtons = (
    <>
      {stepControl === "step1" ? null : (
        <Button className="prevStepBtn" onClick={onToPrevStep}>
          <i className="gg-arrow-left"></i>
          上一步
        </Button>
      )}
      <Button className="nextStepBtn" onClick={onToNextStep}>
        {stepControl !== "step3" ? "下一步" : "確認下單"}
        <i className="gg-arrow-right"></i>
      </Button>
    </>
  );

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className={classes.formControl} onSubmit={handleSubmit}>
      {stepControl === "step1" && <AddressForm />}
      {stepControl === "step2" && <DeliveryForm />}
      {stepControl === "step3" && <PaymentForm />}
      <hr />
      <div className={classes.btnWrapper}>{stepButtons}</div>
    </form>
  );
}

export default StepperForm;
