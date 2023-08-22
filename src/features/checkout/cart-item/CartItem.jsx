import { DeleteButton, ItemCount, ItemPrice } from 'components';
import {
  cartItem,
  imageWrapper,
  detailsWrapper,
  titleAndPriceWrapper,
  countAndRemoveWrapper,
} from './CartItem.module.css';
import { Link } from 'react-router-dom';

function CartItem() {
  return (
    <li className={cartItem}>
      <Link to="/products/2" className={imageWrapper}>
        {/* TODO: Add alt text for accessibility */}
        <img
          src="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
          alt="product"
        />
      </Link>
      <div className={detailsWrapper}>
        <Link to="/products/2" className={titleAndPriceWrapper}>
          <h3>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h3>
          <ItemPrice price={100} />
        </Link>
        <div className={countAndRemoveWrapper}>
          <DeleteButton />
          <ItemCount />
        </div>
      </div>
    </li>
  );
}

export default CartItem;
