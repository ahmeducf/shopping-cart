import { createContext, useReducer } from 'react';
import { cartReducer } from 'reducers';
import PropTypes from 'prop-types';

const CartContext = createContext(null);
const CartDispatchContext = createContext(null);

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, {
    cart: [],
  });

  return (
    <CartContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartProvider;
export { CartContext, CartDispatchContext };
