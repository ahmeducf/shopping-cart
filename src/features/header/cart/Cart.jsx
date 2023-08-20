import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { cart, iconContainer } from './Cart.module.css';

function Cart() {
  return (
    <Link to="/checkout" aria-label="Checkout" className={cart}>
      <div className={iconContainer}>
        <FontAwesomeIcon icon={faShoppingCart} />
      </div>
    </Link>
  );
}

export default Cart;
