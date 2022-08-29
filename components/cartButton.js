import {useAppContext} from './stateWrapper'
import styles from '../styles/cartButton.module.css'
export default function CartButton({item}) {
  const cart = useAppContext()
  const handleClick = () => {
    cart.addItemToCart(item)
    cart.openCart()
  }
  return <button className={styles.button} onClick={handleClick}>Add to cart</button>
}