import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import userEvent from '@testing-library/user-event';
import ProductItem from 'features/products/products-list/product-item/ProductItem';
import ProductsProvider from 'contexts/ProductsContext';
import CartProvider from 'contexts/CartContext';
import { BrowserRouter } from 'react-router-dom';

const product = {
  id: 1,
  title: 'Test product',
  price: 100,
  image: 'https://via.placeholder.com/150',
};

describe('ItemCount', () => {
  it('should have a valid initial state', () => {
    render(
      <BrowserRouter>
        <ProductsProvider>
          <CartProvider>
            <ProductItem product={product} />
          </CartProvider>
        </ProductsProvider>
      </BrowserRouter>,
    );
    expect(screen.getByRole('spinbutton', { name: 'Count' })).toHaveValue(1);
  });

  it('should increase the count when the increase button is clicked', async () => {
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

    await user.click(screen.getByRole('button', { name: 'Increase count' }));

    expect(screen.getByRole('spinbutton', { name: 'Count' })).toHaveValue(2);
  });

  it('should decrease the count when the decrease button is clicked', async () => {
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

    await user.click(screen.getByRole('button', { name: 'Increase count' }));
    await user.click(screen.getByRole('button', { name: 'Decrease count' }));

    expect(screen.getByRole('spinbutton', { name: 'Count' })).toHaveValue(1);
  });
});
