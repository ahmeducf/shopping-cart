import { CartContext } from 'contexts/CartContext';
import { useContext } from 'react';

function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

export default useCart;
