import StepperItem from "./StepperItem";
import classes from "./StepProgress.module.css";

function StepProgress() {
  return (
    <div className={classes.stepper}>
      <h2>結帳</h2>
      <ul>
        <StepperItem
          stepperTitle="寄送地址"
          step="1"
          active={false}
          done={true}
        />
        <StepperItem
          stepperTitle="運送方式"
          step="2"
          active={true}
          done={false}
        />
        <StepperItem
          stepperTitle="付款資訊"
          step="3"
          active={false}
          done={false}
        />
      </ul>
    </div>
  );
}

export default StepProgress;
