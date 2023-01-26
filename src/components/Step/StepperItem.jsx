import classes from "./StepperItem.module.css";

function StepperItem({ stepperTitle, step, active, done }) {
  const classActive = active ? `${classes.active}` : "";
  const classDone = done ? `${classes.done}` : "";
  const classInactive = !active && !done ? `${classes.inactive}` : "";

  return (
    <li
      className={`${classes.stepper__item} ${classActive} ${classDone} ${classInactive}`}
    >
      <h3 className={classes.stepper__step}>{step}</h3>
      <h3 className={classes.stepper__title}>{stepperTitle}</h3>
    </li>
  );
}

export default StepperItem;
