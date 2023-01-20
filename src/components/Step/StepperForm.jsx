import PaymentForm from "./PaymentForm";
import AddressForm from "./AddressForm";
import DeliveryForm from "./DeliveryForm";
import classes from "./StepperForm.module.css";
import Button from "../UI/Button";

function StepperForm() {
  return (
    <form className={classes.formControl}>
      <DeliveryForm />
      <hr />
      <div className={classes.btnWrapper}>
        <Button className="prevStepBtn">
          <i className="gg-arrow-left"></i>
          上一步
        </Button>
        <Button className="nextStepBtn">
          下一步
          <i className="gg-arrow-right"></i>
        </Button>
      </div>
    </form>
  );
}

export default StepperForm;
