import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';
import CartItem from '../CartItem';
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
        })),
      },
    })),
  };
});

let product = {
  id: 1,
  title: 'Test product',
  image: 'https://via.placeholder.com/150',
  price: 100,
  quantity: 1,
};

describe('CartItem component', () => {
  it('should render the cart item', () => {
    render(
      <ProductsProvider>
        <CartProvider>
          <BrowserRouter>
            <CartItem product={product} />
          </BrowserRouter>
        </CartProvider>
      </ProductsProvider>,
    );

    expect(screen.getByRole('listitem')).toBeInTheDocument();
  });

  it('should render the product image', () => {
    render(
      <ProductsProvider>
        <CartProvider>
          <BrowserRouter>
            <CartItem product={product} />
          </BrowserRouter>
        </CartProvider>
      </ProductsProvider>,
    );

    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('should render two links', () => {
    render(
      <ProductsProvider>
        <CartProvider>
          <BrowserRouter>
            <CartItem product={product} />
          </BrowserRouter>
        </CartProvider>
      </ProductsProvider>,
    );

    expect(screen.getAllByRole('link')).toHaveLength(2);
  });

  it('should render the product title', () => {
    render(
      <ProductsProvider>
        <CartProvider>
          <BrowserRouter>
            <CartItem product={product} />
          </BrowserRouter>
        </CartProvider>
      </ProductsProvider>,
    );

    expect(
      screen.getByRole('heading', {
        name: /fjallraven - foldsack no\. 1 backpack, fits 15 laptops/i,
      }),
    ).toBeInTheDocument();
  });

  it('should render the product price', () => {
    render(
      <ProductsProvider>
        <CartProvider>
          <BrowserRouter>
            <CartItem product={product} />
          </BrowserRouter>
        </CartProvider>
      </ProductsProvider>,
    );

    expect(screen.getByText('$100')).toBeInTheDocument();
  });

  it('should render the delete button', () => {
    render(
      <ProductsProvider>
        <CartProvider>
          <BrowserRouter>
            <CartItem product={product} />
          </BrowserRouter>
        </CartProvider>
      </ProductsProvider>,
    );

    expect(screen.getByRole('button', { name: /delete/i })).toBeInTheDocument();
  });

  it('should render the item count', () => {
    render(
      <ProductsProvider>
        <CartProvider>
          <BrowserRouter>
            <CartItem product={product} />
          </BrowserRouter>
        </CartProvider>
      </ProductsProvider>,
    );

    expect(screen.getByRole('spinbutton')).toBeInTheDocument();
  });
});
