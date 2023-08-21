import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect } from 'vitest';
import { ProductsList } from 'features/products';

describe('ProductsList', () => {
  it('should render a list of products', () => {
    render(
      <BrowserRouter>
        <ProductsList />
      </BrowserRouter>,
    );

    expect(screen.getByLabelText('products')).toBeInTheDocument();
  });
});
