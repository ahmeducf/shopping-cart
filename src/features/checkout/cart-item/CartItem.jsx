import PropTypes from 'prop-types';
import { DeleteButton, ItemCount, ItemPrice } from 'components';
import {
  cartItem,
  imageWrapper,
  detailsWrapper,
  titleAndPriceWrapper,
  countAndRemoveWrapper,
} from './CartItem.module.css';
import { Link } from 'react-router-dom';
import { useCartDispatch } from 'hooks';

function CartItem({ product }) {
  const dispatch = useCartDispatch();
  const handleRemove = () => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id: product.id } });
  };

  return (
    <li className={cartItem}>
      <Link to={`/products/${product.id}`} className={imageWrapper}>
        <img src={product.image} alt={product.title} />
      </Link>
      <div className={detailsWrapper}>
        <Link to={`/products/${product.id}`} className={titleAndPriceWrapper}>
          <h3>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h3>
          <ItemPrice price={product.price} />
        </Link>
        <div className={countAndRemoveWrapper}>
          <DeleteButton onClick={handleRemove} />
          <ItemCount id={product.id} />
        </div>
      </div>
    </li>
  );
}

CartItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartItem;
