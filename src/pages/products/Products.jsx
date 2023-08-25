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
import { useState } from 'react';
import { useFetchProducts } from 'hooks';
import { Error as ErrorPage } from 'pages';

function Products() {
  const { products: productsData, isLoading, error } = useFetchProducts();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const pageHeading =
    selectedCategory.slice(0, 1).toUpperCase() + selectedCategory.slice(1);

  if (error) {
    return <ErrorPage error={error} />;
  }

  if (isLoading) {
    return <div style={{ color: 'red' }}>Loading...</div>;
  }

  return (
    <main className={products}>
      <h2 className={hidden}>Products</h2>
      <div className={wrapper}>
        <section className={filtersSidebar} aria-label="Filters" role="listbox">
          <h3 className={hidden}>Filters</h3>
          <div aria-label="Categories" role="list">
            <h4 className={filterHeading}>Categories</h4>
            <CategoryList
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </div>
        </section>
        <section
          className={productsSection}
          aria-label="Products section"
          role="list"
        >
          <h3 className={heading}>{pageHeading}</h3>
          <ProductsList
            products={productsData}
            selectedCategory={selectedCategory}
          />
        </section>
      </div>
    </main>
  );
}

export default Products;
