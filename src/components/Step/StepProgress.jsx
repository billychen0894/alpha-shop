import StepperItem from "./StepperItem";
import classes from "./StepProgress.module.css";

function StepProgress({ stepControl }) {
  return (
    <div className={classes.stepper}>
      <h2>結帳</h2>
      <ul>
        <StepperItem
          stepperTitle="寄送地址"
          step="1"
          active={stepControl === "step1" ? true : false}
          done={
            stepControl === "step2" || stepControl === "step3" ? true : false
          }
        />
        <StepperItem
          stepperTitle="運送方式"
          step="2"
          active={stepControl === "step2" ? true : false}
          done={stepControl === "step3" ? true : false}
        />
        <StepperItem
          stepperTitle="付款資訊"
          step="3"
          active={stepControl === "step3" ? true : false}
          done={false}
        />
      </ul>
    </div>
  );
}

export default StepProgress;
