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
} from './Checkout.module.css';

function Checkout() {
  return (
    <main className={checkout}>
      <div className={container}>
        <section className={cartSection} aria-label="Shopping cart items">
          <div className={heading}>
            <h2 className={title}>Your shopping cart</h2>
            <p className={itemsCount}>3 items</p>
          </div>
          <ul className={cartItems} aria-label="Cart items">
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </ul>
        </section>
        <section className={checkoutSection} aria-label="Checkout items">
          <div className={heading}>
            <h2 className={title}>Total</h2>
            <p className={totalPrice}>$300</p>
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
