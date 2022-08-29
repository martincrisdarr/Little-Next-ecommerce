import { useAppContext } from "./stateWrapper";
import Product from "./product";
import styles from "../styles/shoppingCart.module.css";
export default function ShoppingCart() {
  const cart = useAppContext();
  const getTotal = () => {
    const total = cart.items.reduce((acc, item) => acc + item.qty * item.price, 0)
    return total
  }
  return (
    <div
      className={styles.shoppingCart}
      style={{ display: cart.isOpen ? "block" : "none" }}
    >
      <button onClick={() => cart.closeCart()} className={styles.close}>Close</button>
      {cart.items.length === 0 ? (
        <div className={styles.empty}>Cart is empty</div>
      ) : (
        <>
          <h3>Your items</h3>
          <div>
            {cart.items.map((item) => (
              <Product
                key={item.id}
                item={item}
                showAs="ListItem"
                qty={item.qty}
              />
            ))}
          </div>
          <div className={styles.total}>
            Total: ${getTotal()}
          </div>
        </>
      )}
    </div>
  );
}
