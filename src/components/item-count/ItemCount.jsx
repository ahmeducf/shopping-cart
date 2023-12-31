import { useProducts, useProductsDispatch } from 'hooks';
import { countWrapper, countButton, countInput } from './ItemCount.module.css';
import PropTypes from 'prop-types';

function ItemCount({ id }) {
  const { products } = useProducts();
  const { quantity } = products.get(id);
  const dispatch = useProductsDispatch();

  const isValueValid = (value) => {
    return value >= 1 && value <= 99;
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (isValueValid(Number(value))) {
      dispatch({
        type: 'UPDATE_PRODUCT_QUANTITY',
        id: id,
        quantity: Number(value),
      });
    }
  };

  const handleDecrease = () => {
    if (isValueValid(quantity - 1)) {
      dispatch({
        type: 'UPDATE_PRODUCT_QUANTITY',
        id: id,
        quantity: quantity - 1,
      });
    }
  };

  const handleIncrease = () => {
    if (isValueValid(quantity + 1)) {
      dispatch({
        type: 'UPDATE_PRODUCT_QUANTITY',
        id: id,
        quantity: quantity + 1,
      });
    }
  };

  const handleInputBlur = (e) => {
    const value = e.target.value;
    if (value === '') {
      dispatch({ type: 'UPDATE_PRODUCT_QUANTITY', id: id, quantity: 1 });
    }
  };

  return (
    <div className={countWrapper} aria-label="Item count" role="region">
      <button
        className={countButton}
        aria-label="Decrease count"
        disabled={quantity === 1}
        onClick={handleDecrease}
      >
        -
      </button>
      <input
        className={countInput}
        type="number"
        value={quantity}
        min="1"
        max="99"
        aria-label="Count"
        role="spinbutton"
        onChange={handleInputChange}
        onBlur={handleInputBlur}
      />
      <button
        className={countButton}
        aria-label="Increase count"
        onClick={handleIncrease}
      >
        +
      </button>
    </div>
  );
}

ItemCount.propTypes = {
  id: PropTypes.number.isRequired,
};

export default ItemCount;
