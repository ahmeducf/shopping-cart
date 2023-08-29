import { render, screen } from '@testing-library/react';
import { Products } from 'pages';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';
import ProductsProvider from 'contexts/ProductsContext';
import userEvent from '@testing-library/user-event';
import CartProvider from 'contexts/CartContext';

vi.mock('hooks', async () => {
  const actual = await vi.importActual('hooks');

  return {
    ...actual,
    useFetchProducts: vi.fn(() => ({
      products: new Map([
        [
          '1',
          {
            id: 1,
            name: 'Product 1',
            price: 100,
            category: 'electronics',
            image: 'image 1',
          },
        ],
        [
          '2',
          {
            id: 2,
            name: 'Product 2',
            price: 200,
            category: 'electronics',
            image: 'image 2',
          },
        ],
        [
          '3',
          {
            id: 3,
            title: 'Green Shirt',
            price: 10.99,
            category: 'product 3',
            image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
          },
        ],
      ]),
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
          price: 100,
        })),
      },
    })),
  };
});

describe('Products', () => {
  it('renders a heading "Products"', () => {
    render(
      <ProductsProvider>
        <CartProvider>
          <BrowserRouter>
            <Products />
          </BrowserRouter>
        </CartProvider>
      </ProductsProvider>,
    );

    expect(
      screen.getByRole('heading', { name: /products/i }),
    ).toBeInTheDocument();
  });

  it('renders a sidebar section with a heading "Filters"', () => {
    render(
      <ProductsProvider>
        <CartProvider>
          <BrowserRouter>
            <Products />
          </BrowserRouter>
        </CartProvider>
      </ProductsProvider>,
    );

    expect(
      screen.getByRole('listbox', { name: /filters/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /filters/i }),
    ).toBeInTheDocument();
  });

  it('renders a sidebar section with a heading "Categories"', () => {
    render(
      <ProductsProvider>
        <CartProvider>
          <BrowserRouter>
            <Products />
          </BrowserRouter>
        </CartProvider>
      </ProductsProvider>,
    );

    expect(
      screen.getByRole('heading', { name: /categories/i }),
    ).toBeInTheDocument();
  });

  it('renders a sidebar section with a list of categories', () => {
    render(
      <ProductsProvider>
        <CartProvider>
          <BrowserRouter>
            <Products />
          </BrowserRouter>
        </CartProvider>
      </ProductsProvider>,
    );

    expect(
      screen.getByRole('list', { name: /categories/i }),
    ).toBeInTheDocument();
  });

  it('renders a grid of products', () => {
    render(
      <ProductsProvider>
        <CartProvider>
          <BrowserRouter>
            <Products />
          </BrowserRouter>
        </CartProvider>
      </ProductsProvider>,
    );

    expect(
      screen.getByRole('list', { name: /^products section$/i }),
    ).toBeInTheDocument();
  });

  it('renders a grid of 2 products when the category "Electronics" is selected', async () => {
    render(
      <ProductsProvider>
        <CartProvider>
          <BrowserRouter>
            <Products />
          </BrowserRouter>
        </CartProvider>
      </ProductsProvider>,
    );

    const user = userEvent.setup();

    await user.click(screen.getByRole('button', { name: /Electronics/ }));

    expect(screen.getAllByTestId('product-item')).toHaveLength(2);
  });

  it('renders a default heading "All"', () => {
    render(
      <ProductsProvider>
        <CartProvider>
          <BrowserRouter>
            <Products />
          </BrowserRouter>
        </CartProvider>
      </ProductsProvider>,
    );

    expect(screen.getByRole('heading', { name: /all/i })).toBeInTheDocument();
  });

  it('renders a heading "Electronics" when the category is selected', async () => {
    render(
      <ProductsProvider>
        <CartProvider>
          <BrowserRouter>
            <Products />
          </BrowserRouter>
        </CartProvider>
      </ProductsProvider>,
    );

    const user = userEvent.setup();

    await user.click(screen.getByRole('button', { name: /Electronics/ }));

    expect(
      screen.getByRole('heading', { name: /Electronics/ }),
    ).toBeInTheDocument();
  });

  it('should render a "Added to cart" text when the add to cart button is clicked', async () => {
    render(
      <ProductsProvider>
        <CartProvider>
          <BrowserRouter>
            <Products />
          </BrowserRouter>
        </CartProvider>
      </ProductsProvider>,
    );

    const user = userEvent.setup();

    await user.click(
      screen.getAllByRole('button', {
        name: /Add .* to cart/i,
      })[0],
    );

    expect(screen.getByText(/Added to cart/i)).toBeInTheDocument();
  });
});
