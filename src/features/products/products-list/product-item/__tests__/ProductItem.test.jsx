import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { beforeEach, describe, expect } from 'vitest';
import ProductItem from '../ProductItem';
import userEvent from '@testing-library/user-event';

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
        <ProductItem product={product} />
      </BrowserRouter>,
    );

    expect(screen.getByLabelText('Product 1')).toBeInTheDocument();
  });

  it('should render a product item with correct title', () => {
    render(
      <BrowserRouter>
        <ProductItem product={product} />
      </BrowserRouter>,
    );

    expect(screen.getByText('Product 1')).toBeInTheDocument();
  });

  it('should render a product item with correct price', () => {
    render(
      <BrowserRouter>
        <ProductItem product={product} />
      </BrowserRouter>,
    );

    expect(screen.getByText('$100')).toBeInTheDocument();
  });

  it('should render a product item with correct image', () => {
    render(
      <BrowserRouter>
        <ProductItem product={product} />
      </BrowserRouter>,
    );

    expect(screen.getByAltText('Product 1')).toBeInTheDocument();
  });

  it('should render a product item with correct link', () => {
    render(
      <BrowserRouter>
        <ProductItem product={product} />
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
        <ProductItem product={product} />
      </BrowserRouter>,
    );

    expect(screen.getByText('Add to cart')).toBeInTheDocument();
  });

  it('should render a product page when click on product item image', async () => {
    render(
      <BrowserRouter>
        <ProductItem product={product} />
      </BrowserRouter>,
    );

    const user = userEvent.setup();

    await user.click(screen.getAllByRole('link')[0]);

    expect(screen.getByText('Product 1')).toBeInTheDocument();
  });

  it('should render a product page when click on product item title', async () => {
    render(
      <BrowserRouter>
        <ProductItem product={product} />
      </BrowserRouter>,
    );

    const user = userEvent.setup();

    await user.click(screen.getAllByRole('link')[1]);

    expect(screen.getByText('Product 1')).toBeInTheDocument();
  });
});
