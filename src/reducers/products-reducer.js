function reducer(state, action) {
  switch (action.type) {
    case 'FETCHED_PRODUCTS_SUCCESS': {
      const products = action.payload.reduce((acc, product) => {
        acc.set(product.id, product);
        return acc;
      }, new Map());
      return {
        ...state,
        products,
        isLoading: false,
        error: null,
      };
    }
    case 'FETCHED_PRODUCTS_FAILURE': {
      return {
        ...state,
        products: new Map(),
        isLoading: false,
        error: action.error,
      };
    }
    case 'FETCHED_PRODUCTS_COMPLETE': {
      return {
        ...state,
        isLoading: false,
        error: null,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export default reducer;
