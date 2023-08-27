import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';
import Checkout from '../Checkout';
import ProductsProvider from 'contexts/ProductsContext';
import CartProvider from 'contexts/CartContext';

vi.mock('hooks', async () => {
  const actual = await vi.importActual('hooks');

  return {
    ...actual,
    useProducts: vi.fn(() => ({
      products: {
        get: vi.fn(() => ({
          id: 1,
          title: 'Product title',
          description: 'Product description',
          image: 'https://via.placeholder.com/150',
          quantity: 1,
          price: 100,
        })),
      },
    })),
    useCart: vi.fn(() => ({
      cart: [
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 3,
        },
        {
          id: 4,
        },
      ],
    })),
  };
});

describe('Checkout page', () => {
  it('should render the shopping cart items section', () => {
    render(
      <ProductsProvider>
        <CartProvider>
          <BrowserRouter>
            <Checkout />
          </BrowserRouter>
        </CartProvider>
      </ProductsProvider>,
    );

    expect(
      screen.getByRole('region', { name: 'Shopping cart items' }),
    ).toBeInTheDocument();
  });

  it('should render the checkout section', () => {
    render(
      <ProductsProvider>
        <CartProvider>
          <BrowserRouter>
            <Checkout />
          </BrowserRouter>
        </CartProvider>
      </ProductsProvider>,
    );

    expect(
      screen.getByRole('region', { name: 'Checkout items' }),
    ).toBeInTheDocument();
  });

  it('should render a heading with the title "Your shopping cart"', () => {
    render(
      <ProductsProvider>
        <CartProvider>
          <BrowserRouter>
            <Checkout />
          </BrowserRouter>
        </CartProvider>
      </ProductsProvider>,
    );

    expect(
      screen.getByRole('heading', { name: 'Your shopping cart' }),
    ).toBeInTheDocument();
  });

  it('should render a heading with the title "Total"', () => {
    render(
      <ProductsProvider>
        <CartProvider>
          <BrowserRouter>
            <Checkout />
          </BrowserRouter>
        </CartProvider>
      </ProductsProvider>,
    );

    expect(screen.getByRole('heading', { name: 'Total' })).toBeInTheDocument();
  });

  it('should render number of items in the cart', () => {
    render(
      <ProductsProvider>
        <CartProvider>
          <BrowserRouter>
            <Checkout />
          </BrowserRouter>
        </CartProvider>
      </ProductsProvider>,
    );

    expect(screen.getByText('4 items')).toBeInTheDocument();
  });

  it('should render the total price of the cart', () => {
    render(
      <ProductsProvider>
        <CartProvider>
          <BrowserRouter>
            <Checkout />
          </BrowserRouter>
        </CartProvider>
      </ProductsProvider>,
    );

    expect(screen.getByText(/\$400.00/i)).toBeInTheDocument();
  });

  it('should render a list of cart items', () => {
    render(
      <ProductsProvider>
        <CartProvider>
          <BrowserRouter>
            <Checkout />
          </BrowserRouter>
        </CartProvider>
      </ProductsProvider>,
    );

    expect(screen.getAllByRole('listitem')).toHaveLength(4);
  });

  it('should render a checkout button', () => {
    render(
      <ProductsProvider>
        <CartProvider>
          <BrowserRouter>
            <Checkout />
          </BrowserRouter>
        </CartProvider>
      </ProductsProvider>,
    );

    expect(
      screen.getByRole('button', { name: 'Checkout' }),
    ).toBeInTheDocument();
  });

  it('should render an image in the checkout section', () => {
    render(
      <ProductsProvider>
        <CartProvider>
          <BrowserRouter>
            <Checkout />
          </BrowserRouter>
        </CartProvider>
      </ProductsProvider>,
    );

    expect(
      screen.getByRole('img', {
        name: 'Available payment methods: Visa, Mastercard, American Express, Discover, JCB, Diners Club, UnionPay, PayPal, Apple Pay, Google Pay',
      }),
    ).toBeInTheDocument();
  });
});
