import { useMemo } from 'react';
import { CartItem } from 'features/checkout';
import {
  checkout,
  container,
  cartSection,
  checkoutSection,
  heading,
  title,
  itemsCount,
  cartItems,
  totalPrice,
  checkoutWrapper,
  checkoutButton,
  imageWrapper,
  emptyCart,
} from './Checkout.module.css';
import { useCart, useProducts } from 'hooks';
import { ShopNowButton } from 'components';

function Checkout() {
  const { cart } = useCart();
  const { products } = useProducts();

  const cartItemsCount = useMemo(() => {
    return cart.reduce((acc, item) => {
      const product = products.get(item.id);
      return acc + product.quantity;
    }, 0);
  }, [cart, products]);

  const cartTotalPrice = useMemo(() => {
    return cart
      .reduce((acc, item) => {
        const product = products.get(item.id);
        return acc + product.price * product.quantity;
      }, 0)
      .toFixed(2);
  }, [cart, products]);

  return (
    <main className={checkout}>
      <div className={container}>
        <section className={cartSection} aria-label="Shopping cart items">
          <div className={heading}>
            <h2 className={title}>Your shopping cart</h2>
            <p className={itemsCount}>{cartItemsCount} items</p>
          </div>
          <ul className={cartItems} aria-label="Cart items">
            {cart.map((item) => {
              const product = products.get(item.id);
              return <CartItem key={product.id} product={product} />;
            })}
          </ul>
          {cart.length === 0 && (
            <div className={emptyCart}>
              <span>Your cart is empty!</span>
              <ShopNowButton />
            </div>
          )}
        </section>
        <section className={checkoutSection} aria-label="Checkout items">
          <div className={heading}>
            <h2 className={title}>Total</h2>
            <p className={totalPrice}>${cartTotalPrice}</p>
          </div>
          <div className={checkoutWrapper}>
            <button type="button" className={checkoutButton}>
              Checkout
            </button>
            <div
              className={imageWrapper}
              role="img"
              aria-label="Available payment methods: Visa, Mastercard, American Express, Discover, JCB, Diners Club, UnionPay, PayPal, Apple Pay, Google Pay"
            ></div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Checkout;
