function reducer(state, action) {
  switch (action.type) {
    case 'FETCHED_PRODUCTS_SUCCESS': {
      return {
        ...state,
        products: action.payload,
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
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export default reducer;
