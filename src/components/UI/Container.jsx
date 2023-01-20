import classes from "./Container.module.css";

function Container({ children, className }) {
  return <div className={`${classes.container} ${className}`}>{children}</div>;
}

export default Container;
