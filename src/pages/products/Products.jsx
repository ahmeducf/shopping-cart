import { CategoryList, ProductsList } from 'features/products';
import {
  products,
  wrapper,
  filtersSidebar,
  filterHeading,
  hidden,
  productsSection,
  heading,
  toggleSidebarWrapper,
  toggleSidebarButton,
  active,
} from './Products.module.css';
import { useState } from 'react';
import { useFetchProducts } from 'hooks';
import { Error as ErrorPage } from 'pages';
import { LoadingSpinner } from 'components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

function Products() {
  const { products: productsData, isLoading, error } = useFetchProducts();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const pageHeading =
    selectedCategory.slice(0, 1).toUpperCase() + selectedCategory.slice(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  if (error) {
    return <ErrorPage error={error} />;
  }

  if (isLoading) {
    return <LoadingSpinner />;
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
      <div
        className={`${toggleSidebarWrapper} ${isSidebarOpen ? active : ''}`}
      ></div>
      <button
        className={toggleSidebarButton}
        aria-label="Toggle sidebar"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <FontAwesomeIcon icon={isSidebarOpen ? faXmark : faBars} />
      </button>
      <aside
        className={`${filtersSidebar} ${isSidebarOpen ? '' : hidden}`}
        aria-label="Filters"
        role="listbox"
        aria-hidden={!isSidebarOpen}
        aria-expanded={isSidebarOpen}
      >
        <h3 className={hidden}>Filters</h3>
        <div aria-label="Categories" role="list">
          <h4 className={filterHeading}>Categories</h4>
          <CategoryList
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        </div>
      </aside>
    </main>
  );
}

export default Products;
