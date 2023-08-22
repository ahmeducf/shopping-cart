import { countWrapper, countButton, countInput } from './ItemCount.module.css';

function ItemCount() {
  return (
    <div className={countWrapper}>
      <button className={countButton}>-</button>
      <input className={countInput} type="number" value="1" />
      <button className={countButton}>+</button>
    </div>
  );
}

export default ItemCount;
