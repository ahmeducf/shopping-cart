import { render, screen } from '@testing-library/react';
import Header from '../Header';
import { describe, expect, it } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

describe('Header', () => {
  it('renders a banner', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );

    expect(
      screen.getByRole('banner', { name: /site header/i }),
    ).toBeInTheDocument();
  });

  it('renders a heading', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );

    expect(
      screen.getByRole('link', { name: /^Fake Store$/ }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /^Fake Store$/ }),
    ).toBeInTheDocument();
  });

  it('renders a navigation', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );

    expect(
      screen.getByRole('navigation', { name: /main navigation/i }),
    ).toBeInTheDocument();
  });

  it('renders a cart', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );

    expect(screen.getByRole('link', { name: /checkout/i })).toBeInTheDocument();
  });
});
