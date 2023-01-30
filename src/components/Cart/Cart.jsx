import { useContext, useState } from "react";
import CartItems from "./CartItems";
import classes from "./Cart.module.css";
import CartContext from "../../store/CartContext";

const formattingOptions = {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
};

function Cart() {
  const cartCtx = useContext(CartContext);

  const handleRemoveItem = (id) => {
    cartCtx.removeItem(id);
  };

  const handleAddItem = (item) => {
    cartCtx.addItem(item);
  };

  const cartItems = cartCtx.items.map((item) => (
    <CartItems
      key={item.id}
      productName={item.productName}
      price={item.price}
      count={item.count}
      fileName={item.fileName}
      onRemoveItem={handleRemoveItem.bind(null, item.id)}
      onAddItem={handleAddItem.bind(null, item)}
    />
  ));

  const formattedTotalAmount = new Intl.NumberFormat(
    "en-US",
    formattingOptions
  ).format(cartCtx.totalAmount);

  return (
    <section className={classes.cart}>
      <h3>購物籃</h3>
      {cartItems}
      <section className={classes.cartInfo}>
        <div className={classes.text}>運費</div>
        <div className={classes.price}>免費</div>
      </section>
      <section className={classes.cartInfo}>
        <div className={classes.text}>小計</div>
        <div className={classes.price}>{formattedTotalAmount}</div>
      </section>
    </section>
  );
}

export default Cart;
