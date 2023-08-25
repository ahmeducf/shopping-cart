function reducer(state, action) {
  switch (action.type) {
    case 'FETCHED_PRODUCTS_SUCCESS': {
      const products = action.payload.reduce((acc, product) => {
        if (state.products.has(product.id)) {
          acc.set(product.id, state.products.get(product.id));
          return acc;
        }

        acc.set(product.id, { ...product, quantity: 1 });
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
    case 'FETCHED_PRODUCT_BY_ID_SUCCESS': {
      const product = action.payload;
      if (state.products.has(product.id)) {
        return state;
      }
      const products = new Map(state.products);
      products.set(product.id, { ...product, quantity: 1 });
      return {
        ...state,
        products,
        isLoading: false,
        error: null,
      };
    }
    case 'FETCHED_PRODUCT_BY_ID_FAILURE': {
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    }
    case 'FETCHED_PRODUCT_BY_ID_COMPLETE': {
      return {
        ...state,
        isLoading: false,
        error: null,
      };
    }
    case 'UPDATE_PRODUCT_QUANTITY': {
      const { id, quantity } = action;
      const products = new Map(state.products);
      const product = products.get(id);
      products.set(id, { ...product, quantity });

      return {
        ...state,
        products,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export default reducer;
