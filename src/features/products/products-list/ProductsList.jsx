import { productsList } from './ProductsList.module.css';
import { ProductItem } from './product-item';
import PropTypes from 'prop-types';

function ProductsList({ products, selectedCategory }) {
  let filteredProducts = [...products].map(([, product]) => product);

  if (selectedCategory !== 'all') {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === selectedCategory,
    );
  }

  return (
    <ul className={productsList} aria-label="products">
      {filteredProducts.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ul>
  );
}

ProductsList.propTypes = {
  products: PropTypes.instanceOf(Map).isRequired,
  selectedCategory: PropTypes.string.isRequired,
};

export default ProductsList;
