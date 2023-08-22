import PropTypes from 'prop-types';
import { priceValue } from './ItemPrice.module.css';

function ItemPrice({ price }) {
  return (
    <div>
      <span className={priceValue}>{`$${price}`}</span>
    </div>
  );
}

ItemPrice.propTypes = {
  price: PropTypes.number.isRequired,
};

export default ItemPrice;
