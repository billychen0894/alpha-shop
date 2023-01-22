import CartItems from "./CartItems";
import classes from "./Cart.module.css";

const formattingOptions = {
  style: "currency",
  currency: "NTD",
  minimumFractionDigits: 0,
};

function Cart() {
  const products = [
    {
      id: crypto.randomUUID(),
      fileName: "product-1.jpg",
      productName: "破壞補丁修身牛仔褲",
      price: new Intl.NumberFormat("zh-tw", formattingOptions).format(3999),
    },
    {
      id: crypto.randomUUID(),
      fileName: "product-2.jpg",
      productName: "刷色直筒牛仔褲",
      price: new Intl.NumberFormat("zh-tw", formattingOptions).format(1299),
    },
  ];

  return (
    <section className={classes.cart}>
      <h3>購物籃</h3>
      <CartItems productsList={products} />
    </section>
  );
}

export default Cart;
