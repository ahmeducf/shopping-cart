import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import Nav from '../nav/Nav';

describe('Nav', () => {
  it('renders a link to the home page in the nav', () => {
    render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>,
    );

    expect(screen.getByRole('link', { name: /^Home$/ })).toBeInTheDocument();
  });

  it('renders a link to the products page in the nav', () => {
    render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>,
    );

    expect(
      screen.getByRole('link', { name: /^Products$/ }),
    ).toBeInTheDocument();
  });

  it('renders a link to the about page in the nav', () => {
    render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>,
    );

    expect(screen.getByRole('link', { name: /^About$/ })).toBeInTheDocument();
  });
});
