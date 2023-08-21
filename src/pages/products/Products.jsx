import { CategoryList } from 'features/products';
import {
  products,
  wrapper,
  filtersSidebar,
  filter,
} from './Products.module.css';

function Products() {
  return (
    <main className={products}>
      <h2>Products</h2>
      <div className={wrapper}>
        <section className={filtersSidebar} aria-label="Filters" role="listbox">
          <h3>Filters</h3>
          <div className={filter} aria-label="Categories" role="list">
            <h4>Categories</h4>
            <CategoryList />
          </div>
        </section>
      </div>
    </main>
  );
}

export default Products;
