import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe } from 'vitest';
import Home from '../Home';

describe('Home', () => {
  it('should render the heading', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );

    expect(
      screen.getByRole('heading', { name: /welcome to fake store!/i }),
    ).toBeInTheDocument();
  });
  it('should render the text', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );

    expect(
      screen.getByText(
        'Fake Store is your one-stop destination for fashion-forward clothing and exquisite jewelry for both men and women. Step into a world of endless possibilities and let us redefine your shopping journey.',
      ),
    ).toBeInTheDocument();
  });
  it('should render the shop now button', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );

    expect(screen.getByRole('link', { name: /shop now/i })).toBeInTheDocument();
  });
});
