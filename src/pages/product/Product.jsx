import { Link } from 'react-router-dom';
import {
  product,
  wrapper,
  backToProductsLink,
  title,
  container,
  left,
  right,
  description,
  addToCartWrapper,
  countAndPrice,
} from './Product.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { AddToCartButton, ItemCount, ItemPrice } from 'components';

function Product() {
  return (
    <main className={product}>
      <div className={wrapper}>
        <Link
          to="/products"
          className={backToProductsLink}
          title="Back"
          aria-label="Back"
        >
          <FontAwesomeIcon icon={faArrowLeftLong} />
        </Link>
        <h1 className={title} aria-label="Product title">
          Product Title
        </h1>
      </div>
      <div className={container}>
        <section className={left} aria-label="Product image">
          {/* TODO: Replace with real image */}
          <img
            src="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
            alt="Product"
          />
        </section>
        <div className={right}>
          <section className={description} aria-label="Product description">
            <h2>Description</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, voluptate, quibusdam, quia voluptas quod dolorum
              voluptatem quos quae quidem repellendus? Quisquam, voluptatum
              voluptate, quibusdam, quia voluptas quod dolorum voluptatem quos
              quae quidem repellendus?
            </p>
          </section>
          <section className={addToCartWrapper}>
            <div className={countAndPrice}>
              <ItemCount />
              <ItemPrice price={100} />
            </div>
            <AddToCartButton />
          </section>
        </div>
      </div>
    </main>
  );
}

export default Product;
