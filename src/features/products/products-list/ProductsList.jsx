import { productsList } from './ProductsList.module.css';
import { ProductItem } from './product-item';

function ProductsList() {
  const products = [
    {
      id: 1,
      title: 'Product 1',
      price: 100,
      image:
        'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    },
    {
      id: 2,
      title: 'Product 2',
      price: 200,
      image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
    },
    {
      id: 3,
      title: 'Product 3',
      price: 300,
      image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
    },
  ];

  return (
    <ul className={productsList} aria-label="products">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ul>
  );
}

export default ProductsList;
