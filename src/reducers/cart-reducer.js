function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART_REQUEST': {
      const { id, quantity } = action.payload;
      return {
        ...state,
        cart: [
          ...state.cart,
          {
            id,
            quantity,
          },
        ],
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export default cartReducer;
