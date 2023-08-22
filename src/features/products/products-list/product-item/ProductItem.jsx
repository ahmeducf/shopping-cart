import PropTypes from 'prop-types';
import {
  productItem,
  card,
  cardImage,
  cardContent,
  countAndPrice,
  productTitle,
} from './ProductItem.module.css';
import { Link } from 'react-router-dom';
import { ItemCount, ItemPrice, AddToCartButton } from 'components';
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
            <ItemCount />
            <ItemPrice price={price} />
          </div>
          <h3 className={productTitle}>
            <Link to={`/products/${id}`}>{title}</Link>
          </h3>
          <AddToCartButton />
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
