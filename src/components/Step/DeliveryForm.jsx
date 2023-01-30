import classes from "./DeliveryForm.module.css";
import Button from "../UI/Button";

function DeliveryForm({ onToPrevStep, onToNextStep, formData, setFormData }) {
  return (
    <form className={classes.formControl}>
      <h2>運送方式</h2>
      <div className={classes.inputSelection}>
        <input
          type="radio"
          id="standardShipping"
          name="deliveryMethod"
          value="standardShipping"
          checked={formData.delivery.shippingMethod === "standardShipping"}
          onChange={(e) => {
            setFormData({
              ...formData,
              delivery: {
                ...formData.delivery,
                shippingMethod: e.target.value,
              },
            });
          }}
        />
        <label htmlFor="standardShipping">
          <div>
            <div className={classes.formItemTitle}>標準運送</div>
            <div className={classes.formItemDescription}>約3~7個工作天</div>
          </div>
          <div>免費</div>
        </label>
      </div>
      <div className={classes.inputSelection}>
        <input
          type="radio"
          id="dhlShipping"
          name="deliveryMethod"
          value="dhlShipping"
          checked={formData.delivery.shippingMethod === "dhlShipping"}
          onChange={(e) => {
            setFormData({
              ...formData,
              delivery: {
                ...formData.delivery,
                shippingMethod: e.target.value,
              },
            });
          }}
        />
        <label htmlFor="dhlShipping">
          <div>
            <div className={classes.formItemTitle}>DHL 貨運</div>
            <div className={classes.formItemDescription}>48小時內送達</div>
          </div>
          <div>$500</div>
        </label>
      </div>
      <hr />
      <div className={classes.btnWrapper}>
        <Button className="prevStepBtn" type="button" onClick={onToPrevStep}>
          <i className="gg-arrow-left"></i>
          上一步
        </Button>
        <Button className="nextStepBtn" type="button" onClick={onToNextStep}>
          下一步
          <i className="gg-arrow-right"></i>
        </Button>
      </div>
    </form>
  );
}

export default DeliveryForm;
