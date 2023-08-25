import { useEffect, useState } from 'react';

function useFetchProductById(id) {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    async function fetchProductById() {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok || response.status >= 400) {
          throw new Error('Server error');
        }
        const data = await response.json();
        setProduct(data);
        setError(null);
      } catch (error) {
        setError(error);
        setProduct(null);
      } finally {
        setIsLoading(false);
      }
    }

    if (isMounted) {
      fetchProductById();
    }

    return () => {
      isMounted = false;
    };
  }, [id]);

  return { product, error, isLoading };
}

export default useFetchProductById;
