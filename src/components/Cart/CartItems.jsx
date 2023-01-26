import classes from "./CartItem.module.css";
import { MinusIcon, PlusIcon } from "../Icon/Icons";
import Image from "../Image/Image";

const formattingOptions = {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
};

function CartItems({
  productName,
  price,
  count,
  fileName,
  onRemoveItem,
  onAddItem,
}) {
  const formattedPrice = new Intl.NumberFormat(
    "en-US",
    formattingOptions
  ).format(price);

  return (
    <div className={classes.cartItem}>
      <Image fileName={fileName} alt={productName} />
      <div className={classes.description}>
        <div className={productName}>{productName}</div>
        <div className={classes.productControlContainer}>
          <div className={classes.productControl}>
            <MinusIcon onRemoveClick={onRemoveItem} />
            <span className={classes.productCount}>{count}</span>
            <PlusIcon onAddClick={onAddItem} />
          </div>
        </div>
        <div className={classes.price}>{formattedPrice}</div>
      </div>
    </div>
  );
}

export default CartItems;
