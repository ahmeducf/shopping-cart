import { Outlet } from 'react-router-dom';
import { Header } from 'features/header';
import ProductsProvider from 'contexts/ProductsContext';

function Root() {
  return (
    <ProductsProvider>
      <Header />
      <Outlet />
    </ProductsProvider>
  );
}

export default Root;
