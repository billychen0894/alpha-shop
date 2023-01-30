import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  return (
    <div className={props.className}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input
        ref={ref}
        {...props.input}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
});

export default Input;
