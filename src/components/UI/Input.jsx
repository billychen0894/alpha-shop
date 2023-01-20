import { forwardRef } from "react";

const Input = forwardRef(function Input(props, ref) {
  return (
    <div className={props.className}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
