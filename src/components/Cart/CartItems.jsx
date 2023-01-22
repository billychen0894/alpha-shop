import classes from "./CartItem.module.css";
import { MinusIcon, PlusIcon } from "../Icon/Icons";
import Image from "../Image/Image";

function CartItems({ productsList }) {
  const products = productsList.map((product) => (
    <div key={product.id} className={classes.cartItem}>
      <Image fileName={product.fileName} alt={product.productName} />
      <div className={classes.description}>
        <div className={classes.productName}>{product.productName}</div>
        <div className={classes.productControlContainer}>
          <div className={classes.productControl}>
            <MinusIcon />
            <span className={classes.productCount}>1</span>
            <PlusIcon />
          </div>
        </div>
        <div className={classes.price}>{`$${product.price}`}</div>
      </div>
    </div>
  ));

  return (
    <>
      {products}
      <section className={classes.cartInfo}>
        <div className={classes.text}>運費</div>
        <div className={classes.price}>免費</div>
      </section>
      <section className={classes.cartInfo}>
        <div className={classes.text}>小計</div>
        <div className={classes.price}>$5,298</div>
      </section>
    </>
  );
}

export default CartItems;
