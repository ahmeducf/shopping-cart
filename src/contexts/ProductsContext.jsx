import { createContext, useReducer } from 'react';
import { productsReducer } from 'reducers';
import PropTypes from 'prop-types';

const ProductsContext = createContext(null);
const ProductsDispatchContext = createContext(null);

function ProductsProvider({ children }) {
  const [state, dispatch] = useReducer(productsReducer, {
    products: [],
    isLoading: true,
    error: null,
  });

  return (
    <ProductsContext.Provider value={state}>
      <ProductsDispatchContext.Provider value={dispatch}>
        {children}
      </ProductsDispatchContext.Provider>
    </ProductsContext.Provider>
  );
}

ProductsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProductsProvider;
export { ProductsContext, ProductsDispatchContext };
