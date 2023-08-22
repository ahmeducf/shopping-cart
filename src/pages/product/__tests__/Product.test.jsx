import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import Product from '../Product';

describe('Product page', () => {
  it('should render the product title heading', () => {
    render(
      <BrowserRouter>
        <Product />
      </BrowserRouter>,
    );

    expect(
      screen.getByRole('heading', { name: /product title/i }),
    ).toBeInTheDocument();
  });

  it('should render the product description', () => {
    render(
      <BrowserRouter>
        <Product />
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
        <Product />
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
        <Product />
      </BrowserRouter>,
    );

    expect(screen.getByRole('link', { name: /back/i })).toBeInTheDocument();
  });

  it('should render the item count', () => {
    render(
      <BrowserRouter>
        <Product />
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
        <Product />
      </BrowserRouter>,
    );

    expect(
      screen.getByRole('button', { name: /add to cart/i }),
    ).toBeInTheDocument();
  });
});
