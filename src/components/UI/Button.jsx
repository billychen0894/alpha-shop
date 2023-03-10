import classes from "./Button.module.css";

function Button({ children, type, className, onClick }) {
  const classPrevStepBtn =
    className === "nextStepBtn" ? classes.nextStepBtn : "";
  const classNextStepBtn =
    className === "prevStepBtn" ? classes.prevStepBtn : "";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${classes.button} ${classPrevStepBtn} ${classNextStepBtn}`}
    >
      {children}
    </button>
  );
}

export default Button;
