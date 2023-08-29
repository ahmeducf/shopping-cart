import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';
import Product from '../Product';
import ProductsProvider from 'contexts/ProductsContext';
import CartProvider from 'contexts/CartContext';

vi.mock('hooks', async () => {
  const actual = await vi.importActual('hooks');

  return {
    ...actual,
    useFetchProductById: vi.fn(() => ({
      products: {
        get: vi.fn(() => ({
          id: 1,
          title: 'Product title',
          description: 'Product description',
          image: 'https://via.placeholder.com/150',
          quantity: 1,
        })),
      },
      isLoading: false,
      error: null,
    })),
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

vi.mock('react', async () => {
  const actual = await vi.importActual('react');

  return {
    ...actual,
    useParams: vi.fn(() => ({ id: '1' })),
  };
});

describe('Product page', () => {
  it('should render the product title heading', () => {
    render(
      <BrowserRouter>
        <ProductsProvider>
          <CartProvider>
            <Product />
          </CartProvider>
        </ProductsProvider>
      </BrowserRouter>,
    );

    expect(
      screen.getByRole('heading', { name: /product title/i }),
    ).toBeInTheDocument();
  });

  it('should render the product description', () => {
    render(
      <BrowserRouter>
        <ProductsProvider>
          <CartProvider>
            <Product />
          </CartProvider>
        </ProductsProvider>
      </BrowserRouter>,
    );

    expect(
      screen.getByRole('region', { name: /product description/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /description/i }),
    ).toBeInTheDocument();
  });

  it('should render the product image', () => {
    render(
      <BrowserRouter>
        <ProductsProvider>
          <CartProvider>
            <Product />
          </CartProvider>
        </ProductsProvider>
      </BrowserRouter>,
    );

    expect(
      screen.getByRole('region', { name: /product image/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /product/i })).toBeInTheDocument();
  });

  it('should render a link to back to the products page', () => {
    render(
      <BrowserRouter>
        <ProductsProvider>
          <CartProvider>
            <Product />
          </CartProvider>
        </ProductsProvider>
      </BrowserRouter>,
    );

    expect(
      screen.getByRole('link', { name: /back to products page/i }),
    ).toBeInTheDocument();
  });

  it('should render the item count', () => {
    render(
      <BrowserRouter>
        <ProductsProvider>
          <CartProvider>
            <Product />
          </CartProvider>
        </ProductsProvider>
      </BrowserRouter>,
    );

    expect(
      screen.getByRole('region', { name: /item count/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /decrease count/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /increase count/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('spinbutton', { name: /count/i }),
    ).toBeInTheDocument();
  });

  it('should render the add to cart button', () => {
    render(
      <BrowserRouter>
        <ProductsProvider>
          <CartProvider>
            <Product />
          </CartProvider>
        </ProductsProvider>
      </BrowserRouter>,
    );

    expect(
      screen.getByRole('button', { name: /add.*to cart/i }),
    ).toBeInTheDocument();
  });
});
