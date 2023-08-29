import PropTypes from 'prop-types';
import {
  productItem,
  card,
  cardImage,
  cardContent,
  countAndPrice,
  productTitle,
  addToCartButton,
} from './ProductItem.module.css';
import { Link } from 'react-router-dom';
import { ItemCount, ItemPrice, Button, AddedToCart } from 'components';
import { useCart, useCartDispatch } from 'hooks';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ProductItem({ product }) {
  const { id, title, price, image } = product;
  const { cart } = useCart();
  const isInCart = cart.some((item) => item.id === id);
  const dispatch = useCartDispatch();

  const handleClick = () => {
    dispatch({
      type: 'ADD_TO_CART_REQUEST',
      payload: {
        id,
      },
    });
  };

  return (
    <li
      className={productItem}
      aria-label={title}
      title={title}
      data-testid="product-item"
    >
      <div className={card}>
        <Link to={`/products/${id}`}>
          <div className={cardImage}>
            <img src={image} alt={title} loading="lazy" />
          </div>
        </Link>
        <div className={cardContent}>
          <div className={countAndPrice}>
            <ItemCount id={Number(id)} />
            <ItemPrice price={price} />
          </div>
          <h3 className={productTitle}>
            <Link to={`/products/${id}`}>{title}</Link>
          </h3>
          {!isInCart ? (
            <Button
              className={addToCartButton}
              onClick={handleClick}
              ariaLabel={`Add ${title} to cart`}
            >
              <FontAwesomeIcon icon={faShoppingCart} />
              <span>Add to cart</span>
            </Button>
          ) : (
            <AddedToCart />
          )}
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
