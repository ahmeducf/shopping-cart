function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART_REQUEST': {
      const { id } = action.payload;
      return {
        ...state,
        cart: [
          ...state.cart,
          {
            id,
          },
        ],
      };
    }
    case 'REMOVE_ITEM': {
      const { id } = action.payload;
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== id),
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export default cartReducer;
