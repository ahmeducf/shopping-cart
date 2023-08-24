import { addedToCart } from './AddedToCart.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';

function AddedToCart() {
  return (
    <div className={addedToCart}>
      <span>Added to cart</span>
      <FontAwesomeIcon icon={faCheckCircle} />
    </div>
  );
}

export default AddedToCart;
