import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import CartItem from '../CartItem';

describe('CartItem component', () => {
  it('should render the cart item', () => {
    render(
      <BrowserRouter>
        <CartItem />
      </BrowserRouter>,
    );

    expect(screen.getByRole('listitem')).toBeInTheDocument();
  });

  it('should render the product image', () => {
    render(
      <BrowserRouter>
        <CartItem />
      </BrowserRouter>,
    );

    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('should render two links', () => {
    render(
      <BrowserRouter>
        <CartItem />
      </BrowserRouter>,
    );

    expect(screen.getAllByRole('link')).toHaveLength(2);
  });

  it('should render the product title', () => {
    render(
      <BrowserRouter>
        <CartItem />
      </BrowserRouter>,
    );

    expect(
      screen.getByRole('heading', {
        name: /fjallraven - foldsack no\. 1 backpack, fits 15 laptops/i,
      }),
    ).toBeInTheDocument();
  });

  it('should render the product price', () => {
    render(
      <BrowserRouter>
        <CartItem />
      </BrowserRouter>,
    );

    expect(screen.getByText('$100')).toBeInTheDocument();
  });

  it('should render the delete button', () => {
    render(
      <BrowserRouter>
        <CartItem />
      </BrowserRouter>,
    );

    expect(screen.getByRole('button', { name: /delete/i })).toBeInTheDocument();
  });

  it('should render the item count', () => {
    render(
      <BrowserRouter>
        <CartItem />
      </BrowserRouter>,
    );

    expect(screen.getByRole('spinbutton')).toBeInTheDocument();
  });
});
