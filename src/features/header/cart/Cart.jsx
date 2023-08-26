import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { iconContainer, cartLengthLabel } from './Cart.module.css';
import { useCart } from 'hooks';

function Cart() {
  const { cart } = useCart();
  const cartLength = cart.length;

  return (
    <Link to="/checkout" aria-label="Checkout" className={cart}>
      <div className={iconContainer}>
        <FontAwesomeIcon icon={faShoppingCart} />
        {cartLength > 0 && (
          <span className={cartLengthLabel}>{cartLength}</span>
        )}
      </div>
    </Link>
  );
}

export default Cart;
