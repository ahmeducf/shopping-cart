import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { addToCartButton } from './AddToCartButton.module.css';

function AddToCartButton() {
  return (
    <button className={addToCartButton}>
      <FontAwesomeIcon icon={faShoppingCart} />
      <span>Add to cart</span>
    </button>
  );
}

export default AddToCartButton;
