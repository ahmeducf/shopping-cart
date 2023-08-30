import { Link, useParams } from 'react-router-dom';
import {
  productPage,
  wrapper,
  backToProductsLink,
  title,
  container,
  left,
  right,
  description,
  addToCartWrapper,
  countAndPrice,
  addToCartButton,
} from './Product.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeftLong,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import {
  Button,
  AddedToCart,
  ItemCount,
  ItemPrice,
  LoadingSpinner,
} from 'components';
import { useCart, useFetchProductById, useCartDispatch } from 'hooks';
import { Error } from 'pages';

function Product() {
  const { id } = useParams();
  const { products, error, isLoading } = useFetchProductById(id);
  const product = products.get(Number(id));
  const { cart } = useCart();
  const isInCart = cart.some((item) => item.id === Number(id));
  const dispatch = useCartDispatch();

  const handleClick = () => {
    dispatch({
      type: 'ADD_TO_CART_REQUEST',
      payload: {
        id: Number(id),
      },
    });
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <main className={productPage}>
      <div className={wrapper}>
        <Link
          to="/shopping-cart/products"
          className={backToProductsLink}
          title="Back to products page"
          aria-label="Back to products page"
        >
          <FontAwesomeIcon icon={faArrowLeftLong} />
          <span>Back to products</span>
        </Link>
        <h1 className={title} aria-label="Product title">
          {product.title}
        </h1>
      </div>
      <div className={container}>
        <section className={left} aria-label="Product image">
          <img src={product.image} alt={product.title} />
        </section>
        <div className={right}>
          <section className={description} aria-label="Product description">
            <h2>Description</h2>
            <p>{product.description}</p>
          </section>
          <section className={addToCartWrapper}>
            <div className={countAndPrice}>
              <ItemCount id={Number(id)} />
              <ItemPrice price={100} />
            </div>
            {isInCart ? (
              <AddedToCart />
            ) : (
              <Button
                className={addToCartButton}
                onClick={handleClick}
                ariaLabel={`Add ${title} to cart`}
              >
                <FontAwesomeIcon icon={faShoppingCart} />
                <span>Add to cart</span>
              </Button>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}

export default Product;
