import { CategoryList, ProductsList } from 'features/products';
import {
  products,
  wrapper,
  filtersSidebar,
  filterHeading,
  hidden,
  productsSection,
  heading,
} from './Products.module.css';

function Products() {
  return (
    <main className={products}>
      <h2 className={hidden}>Products</h2>
      <div className={wrapper}>
        <section className={filtersSidebar} aria-label="Filters" role="listbox">
          <h3 className={hidden}>Filters</h3>
          <div aria-label="Categories" role="list">
            <h4 className={filterHeading}>Categories</h4>
            <CategoryList />
          </div>
        </section>
        <section
          className={productsSection}
          aria-label="Products section"
          role="list"
        >
          <h3 className={heading}>All</h3>
          <ProductsList />
        </section>
      </div>
    </main>
  );
}

export default Products;
