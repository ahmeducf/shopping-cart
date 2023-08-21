import { render, screen } from '@testing-library/react';
import { Products } from 'pages';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

describe('Products', () => {
  it('renders a heading "Products"', () => {
    render(
      <BrowserRouter>
        <Products />
      </BrowserRouter>,
    );

    expect(
      screen.getByRole('heading', { name: /products/i }),
    ).toBeInTheDocument();
  });

  it('renders a sidebar section with a heading "Filters"', () => {
    render(
      <BrowserRouter>
        <Products />
      </BrowserRouter>,
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
      <BrowserRouter>
        <Products />
      </BrowserRouter>,
    );

    expect(
      screen.getByRole('heading', { name: /categories/i }),
    ).toBeInTheDocument();
  });

  it('renders a sidebar section with a list of categories', () => {
    render(
      <BrowserRouter>
        <Products />
      </BrowserRouter>,
    );

    expect(
      screen.getByRole('list', { name: /categories/i }),
    ).toBeInTheDocument();
  });

  it('renders a grid of products', () => {
    render(
      <BrowserRouter>
        <Products />
      </BrowserRouter>,
    );

    expect(
      screen.getByRole('list', { name: /^products section$/i }),
    ).toBeInTheDocument();
  });

  it('renders a grid of products with a default heading "All"', () => {
    render(
      <BrowserRouter>
        <Products />
      </BrowserRouter>,
    );

    expect(screen.getByRole('heading', { name: /all/i })).toBeInTheDocument();
  });
});
