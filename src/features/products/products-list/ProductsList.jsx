import { useProducts } from 'hooks';
import { productsList } from './ProductsList.module.css';
import { ProductItem } from './product-item';
import PropTypes from 'prop-types';

function ProductsList({ products, selectedCategory }) {
  let filteredProducts = products;

  if (selectedCategory !== 'all') {
    filteredProducts = products.filter(
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
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }),
  ).isRequired,
  selectedCategory: PropTypes.string.isRequired,
};

export default ProductsList;
