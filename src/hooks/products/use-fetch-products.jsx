import { useProducts, useProductsDispatch } from 'hooks';
import { useEffect } from 'react';

function useFetchProducts() {
  const { products, isLoading, error } = useProducts();
  const dispatch = useProductsDispatch();

  useEffect(() => {
    let isMounted = true;

    async function fetchProducts() {
      try {
        const response = await fetch('https://fakestoreapi.com/products', {
          mode: 'cors',
        });
        if (!response.ok || response.status >= 400) {
          throw new Error('Server Error');
        }

        const data = await response.json();
        dispatch({ type: 'FETCHED_PRODUCTS_SUCCESS', payload: data });
      } catch (error) {
        dispatch({ type: 'FETCHED_PRODUCTS_FAILURE', error: error });
      } finally {
        dispatch({ type: 'FETCHED_PRODUCTS_COMPLETE' });
      }
    }

    if (isMounted) {
      fetchProducts();
    }

    return () => {
      isMounted = false;
    };
  }, [dispatch]);

  return { products, isLoading, error };
}

export default useFetchProducts;
