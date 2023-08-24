import { useState } from 'react';
import { countWrapper, countButton, countInput } from './ItemCount.module.css';
import PropTypes from 'prop-types';

function ItemCount({ count, setCount, isInCart }) {
  const isValueValid = (value) => {
    return value === '' || value >= 1;
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (isValueValid(value)) {
      setCount(value);
    }
  };

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleInputBlur = (e) => {
    const value = e.target.value;
    if (value === '') {
      setCount(1);
    }
  };

  return (
    <div className={countWrapper} aria-label="Item count" role="region">
      <button
        className={countButton}
        aria-label="Decrease count"
        disabled={count === 1 || isInCart}
        onClick={handleDecrease}
      >
        -
      </button>
      <input
        className={countInput}
        type="number"
        value={count}
        aria-label="Count"
        role="spinbutton"
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        disabled={isInCart}
      />
      <button
        className={countButton}
        aria-label="Increase count"
        onClick={handleIncrease}
        disabled={isInCart}
      >
        +
      </button>
    </div>
  );
}

ItemCount.propTypes = {
  count: PropTypes.number.isRequired,
  setCount: PropTypes.func.isRequired,
  isInCart: PropTypes.bool.isRequired,
};

export default ItemCount;
