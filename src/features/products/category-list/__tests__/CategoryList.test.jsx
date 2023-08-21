import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect } from 'vitest';
import CategoryList from '../CategoryList';

describe('CategoryList', () => {
  it('renders a list of categories', () => {
    render(
      <BrowserRouter>
        <CategoryList />
      </BrowserRouter>,
    );

    expect(screen.getByRole('list')).toMatchSnapshot();
  });

  it('renders a list of categories with the correct number of items', () => {
    render(
      <BrowserRouter>
        <CategoryList />
      </BrowserRouter>,
    );

    expect(screen.getAllByRole('listitem')).toHaveLength(5);
  });

  it('renders a list of categories with the correct names', () => {
    render(
      <BrowserRouter>
        <CategoryList />
      </BrowserRouter>,
    );

    expect(screen.getByText('All')).toBeInTheDocument();
    expect(screen.getByText('Electronics')).toBeInTheDocument();
    expect(screen.getByText('Jewelry')).toBeInTheDocument();
    expect(screen.getByText("Men's clothing")).toBeInTheDocument();
    expect(screen.getByText("Women's clothing")).toBeInTheDocument();
  });
});
