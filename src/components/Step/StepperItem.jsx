import classes from "./StepperItem.module.css";

function StepperItem({ stepperTitle, step, active, done }) {
  const classActive = active ? `${classes.active}` : "";
  const classDone = done ? `${classes.done}` : "";
  const classInactive = !active && !done ? `${classes.inactive}` : "";
  const classStepperStep = `${classes.stepper__step} ${classActive} ${classDone} ${classInactive}`;
  const classStepperTitle = `${classes.stepper__title} ${classActive} ${classDone} ${classInactive}`;

  return (
    <li className={classes.stepper__item}>
      <h3 className={classStepperStep}>{step}</h3>
      <h3 className={classStepperTitle}>{stepperTitle}</h3>
    </li>
  );
}

export default StepperItem;
