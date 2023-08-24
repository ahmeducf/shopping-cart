import { CartDispatchContext } from 'contexts/CartContext';
import { useContext } from 'react';

function useCartDispatch() {
  const context = useContext(CartDispatchContext);
  if (context === undefined) {
    throw new Error('useCartDispatch must be used within a CartProvider');
  }
  return context;
}

export default useCartDispatch;
