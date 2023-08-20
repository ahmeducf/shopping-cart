import { render, screen } from '@testing-library/react';
import Header from './Header';
import { expect } from 'vitest';

describe('Header', () => {
  it('renders a heading', () => {
    render(<Header />);

    expect(
      screen.getByRole('banner', { name: /site header/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /my app/i }),
    ).toBeInTheDocument();
  });
});
