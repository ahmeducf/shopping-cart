import { useContext } from 'react';
import { ProductsDispatchContext } from 'contexts/ProductsContext';

function useProductsDispatch() {
  const context = useContext(ProductsDispatchContext);
  if (context === undefined) {
    throw new Error(
      'useProductsDispatch must be used within a ProductsProvider',
    );
  }
  return context;
}

export default useProductsDispatch;
