import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import Checkout from '../Checkout';

describe('Checkout page', () => {
  it('should render the shopping cart items section', () => {
    render(
      <BrowserRouter>
        <Checkout />
      </BrowserRouter>,
    );

    expect(
      screen.getByRole('region', { name: 'Shopping cart items' }),
    ).toBeInTheDocument();
  });

  it('should render the checkout section', () => {
    render(
      <BrowserRouter>
        <Checkout />
      </BrowserRouter>,
    );

    expect(
      screen.getByRole('region', { name: 'Checkout items' }),
    ).toBeInTheDocument();
  });

  it('should render a heading with the title "Your shopping cart"', () => {
    render(
      <BrowserRouter>
        <Checkout />
      </BrowserRouter>,
    );

    expect(
      screen.getByRole('heading', { name: 'Your shopping cart' }),
    ).toBeInTheDocument();
  });

  it('should render a heading with the title "Total"', () => {
    render(
      <BrowserRouter>
        <Checkout />
      </BrowserRouter>,
    );

    expect(screen.getByRole('heading', { name: 'Total' })).toBeInTheDocument();
  });

  it('should render number of items in the cart', () => {
    render(
      <BrowserRouter>
        <Checkout />
      </BrowserRouter>,
    );

    expect(screen.getByText('3 items')).toBeInTheDocument();
  });

  it('should render the total price of the cart', () => {
    render(
      <BrowserRouter>
        <Checkout />
      </BrowserRouter>,
    );

    expect(screen.getByText('$300')).toBeInTheDocument();
  });

  it('should render a list of cart items', () => {
    render(
      <BrowserRouter>
        <Checkout />
      </BrowserRouter>,
    );

    expect(screen.getAllByRole('listitem')).toHaveLength(4);
  });

  it('should render a checkout button', () => {
    render(
      <BrowserRouter>
        <Checkout />
      </BrowserRouter>,
    );

    expect(
      screen.getByRole('button', { name: 'Checkout' }),
    ).toBeInTheDocument();
  });

  it('should render an image in the checkout section', () => {
    render(
      <BrowserRouter>
        <Checkout />
      </BrowserRouter>,
    );

    expect(
      screen.getByRole('img', {
        name: 'Available payment methods: Visa, Mastercard, American Express, Discover, JCB, Diners Club, UnionPay, PayPal, Apple Pay, Google Pay',
      }),
    ).toBeInTheDocument();
  });
});
