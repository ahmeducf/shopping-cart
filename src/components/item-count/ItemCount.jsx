import { countWrapper, countButton, countInput } from './ItemCount.module.css';

function ItemCount() {
  return (
    <div className={countWrapper} aria-label="Item count" role="region">
      <button className={countButton} aria-label="Decrease count">
        -
      </button>
      <input
        className={countInput}
        type="number"
        value="1"
        aria-label="Count"
      />
      <button className={countButton} aria-label="Increase count">
        +
      </button>
    </div>
  );
}

export default ItemCount;
