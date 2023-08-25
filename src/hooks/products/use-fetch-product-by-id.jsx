import { useProducts, useProductsDispatch } from 'hooks';
import { useEffect } from 'react';

function useFetchProductById(id) {
  const { products, isLoading, error } = useProducts();
  const dispatch = useProductsDispatch();

  useEffect(() => {
    let isMounted = true;
    async function fetchProductById() {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok || response.status >= 400) {
          throw new Error('Server error');
        }
        const data = await response.json();
        dispatch({ type: 'FETCHED_PRODUCT_BY_ID_SUCCESS', payload: data });
      } catch (error) {
        dispatch({ type: 'FETCHED_PRODUCT_BY_ID_FAILURE', error: error });
      } finally {
        dispatch({ type: 'FETCHED_PRODUCT_BY_ID_COMPLETE' });
      }
    }

    if (isMounted) {
      fetchProductById();
    }

    return () => {
      isMounted = false;
    };
  }, [dispatch, id]);

  return { products, error, isLoading };
}

export default useFetchProductById;
