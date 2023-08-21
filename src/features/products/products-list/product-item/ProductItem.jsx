import PropTypes from 'prop-types';
import {
  productItem,
  card,
  cardImage,
  cardContent,
  countAndPrice,
  countWrapper,
  countButton,
  countInput,
  priceWrapper,
  priceValue,
  productTitle,
  addToCartButton,
} from './ProductItem.module.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function ProductItem({ product }) {
  const { id, title, price, image } = product;
  return (
    <li className={productItem} aria-label={title}>
      <div className={card}>
        <Link to={`/products/${id}`}>
          <div className={cardImage}>
            <img src={image} alt={title} />
          </div>
        </Link>
        <div className={cardContent}>
          <div className={countAndPrice}>
            <div className={countWrapper}>
              <button className={countButton}>-</button>
              <input className={countInput} type="number" value="1" />
              <button className={countButton}>+</button>
            </div>
            <div className={priceWrapper}>
              <span className={priceValue}>{`$${price}`}</span>
            </div>
          </div>
          <h3 className={productTitle}>
            <Link to={`/products/${id}`}>{title}</Link>
          </h3>
          <button className={addToCartButton}>
            <FontAwesomeIcon icon={faShoppingCart} />
            <span>Add to cart</span>
          </button>
        </div>
      </div>
    </li>
  );
}

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductItem;
