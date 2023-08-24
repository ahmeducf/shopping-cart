import { Outlet } from 'react-router-dom';
import { Header } from 'features/header';
import ProductsProvider from 'contexts/ProductsContext';
import CartProvider from 'contexts/CartContext';

function Root() {
  return (
    <ProductsProvider>
      <CartProvider>
        <Header />
        <Outlet />
      </CartProvider>
    </ProductsProvider>
  );
}

export default Root;
