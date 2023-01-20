import { useState } from "react";
import classes from "./DeliveryForm.module.css";

function DeliveryForm() {
  const [shippingMethod, setShippingMethod] = useState("");

  const shippingMethodChangeHandler = (event) => {
    setShippingMethod(event.target.value);
  };

  return (
    <>
      <h2>運送方式</h2>
      <div className={classes.formControl}>
        <div>
          <input
            type="radio"
            id="standardShipping"
            name="deliveryMethod"
            value="standardShipping"
            checked={shippingMethod === "standardShipping"}
            onChange={shippingMethodChangeHandler}
          />
          <label htmlFor="standardShipping">
            <div>
              <div className={classes.formItemTitle}>標準運送</div>
              <div className={classes.formItemDescription}>約3~7個工作天</div>
            </div>
            <div>免費</div>
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="dhlShipping"
            name="deliveryMethod"
            value="dhlShipping"
            checked={shippingMethod === "dhlShipping"}
            onChange={shippingMethodChangeHandler}
          />
          <label htmlFor="dhlShipping">
            <div>
              <div className={classes.formItemTitle}>DHL 貨運</div>
              <div className={classes.formItemDescription}>48小時內送達</div>
            </div>
            <div>$500</div>
          </label>
        </div>
      </div>
    </>
  );
}

export default DeliveryForm;
