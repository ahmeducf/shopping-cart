import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { addToCartButton } from './AddToCartButton.module.css';
import { useCartDispatch } from 'hooks';
import PropTypes from 'prop-types';

function AddToCartButton({ id }) {
  const dispatch = useCartDispatch();

  const handleClick = () => {
    dispatch({
      type: 'ADD_TO_CART_REQUEST',
      payload: {
        id,
      },
    });
  };

  return (
    <button
      className={addToCartButton}
      aria-label="Add to cart"
      onClick={handleClick}
    >
      <FontAwesomeIcon icon={faShoppingCart} />
      <span>Add to cart</span>
    </button>
  );
}

AddToCartButton.propTypes = {
  id: PropTypes.number.isRequired,
};

export default AddToCartButton;
