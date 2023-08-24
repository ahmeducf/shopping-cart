import { useState } from 'react';
import { countWrapper, countButton, countInput } from './ItemCount.module.css';

function ItemCount() {
  const [count, setCount] = useState(1);

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
        disabled={count === 1}
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

export default ItemCount;
