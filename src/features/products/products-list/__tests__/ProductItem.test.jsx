import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { beforeEach, describe, expect, vi } from 'vitest';
import ProductItem from '../product-item/ProductItem';
import userEvent from '@testing-library/user-event';
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
  };
});

describe('ProductItem', () => {
  let product;
  beforeEach(() => {
    product = {
      id: 1,
      title: 'Product 1',
      price: 100,
      image:
        'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    };
  });

  it('should render a product item', () => {
    render(
      <BrowserRouter>
        <ProductsProvider>
          <CartProvider>
            <ProductItem product={product} />
          </CartProvider>
        </ProductsProvider>
      </BrowserRouter>,
    );

    expect(screen.getByLabelText('Product 1')).toBeInTheDocument();
  });

  it('should render a product item with correct title', () => {
    render(
      <BrowserRouter>
        <ProductsProvider>
          <CartProvider>
            <ProductItem product={product} />
          </CartProvider>
        </ProductsProvider>
      </BrowserRouter>,
    );

    expect(screen.getByText('Product 1')).toBeInTheDocument();
  });

  it('should render a product item with correct price', () => {
    render(
      <BrowserRouter>
        <ProductsProvider>
          <CartProvider>
            <ProductItem product={product} />
          </CartProvider>
        </ProductsProvider>
      </BrowserRouter>,
    );

    expect(screen.getByText('$100')).toBeInTheDocument();
  });

  it('should render a product item with correct image', () => {
    render(
      <BrowserRouter>
        <ProductsProvider>
          <CartProvider>
            <ProductItem product={product} />
          </CartProvider>
        </ProductsProvider>
      </BrowserRouter>,
    );

    expect(screen.getByAltText('Product 1')).toBeInTheDocument();
  });

  it('should render a product item with correct link', () => {
    render(
      <BrowserRouter>
        <ProductsProvider>
          <CartProvider>
            <ProductItem product={product} />
          </CartProvider>
        </ProductsProvider>
      </BrowserRouter>,
    );

    expect(screen.getAllByRole('link')[0]).toHaveAttribute(
      'href',
      '/products/1',
    );
    expect(screen.getAllByRole('link')[1]).toHaveAttribute(
      'href',
      '/products/1',
    );
  });

  it('should render a product item with correct add to cart button', () => {
    render(
      <BrowserRouter>
        <ProductsProvider>
          <CartProvider>
            <ProductItem product={product} />
          </CartProvider>
        </ProductsProvider>
      </BrowserRouter>,
    );

    expect(screen.getByText('Add to cart')).toBeInTheDocument();
  });

  it('should render a product page when click on product item image', async () => {
    render(
      <BrowserRouter>
        <ProductsProvider>
          <CartProvider>
            <ProductItem product={product} />
          </CartProvider>
        </ProductsProvider>
      </BrowserRouter>,
    );

    const user = userEvent.setup();

    await user.click(screen.getAllByRole('link')[0]);

    expect(screen.getByText('Product 1')).toBeInTheDocument();
  });

  it('should render a product page when click on product item title', async () => {
    render(
      <BrowserRouter>
        <ProductsProvider>
          <CartProvider>
            <ProductItem product={product} />
          </CartProvider>
        </ProductsProvider>
      </BrowserRouter>,
    );

    const user = userEvent.setup();

    await user.click(screen.getAllByRole('link')[1]);

    expect(screen.getByText('Product 1')).toBeInTheDocument();
  });
});
