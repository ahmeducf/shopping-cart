import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import Error from '../Error';

describe('Error', () => {
  it('should render the Error component', () => {
    render(
      <BrowserRouter>
        <Error />
      </BrowserRouter>,
    );

    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('should render the heading', () => {
    render(
      <BrowserRouter>
        <Error />
      </BrowserRouter>,
    );

    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  it('should render the description', () => {
    render(
      <BrowserRouter>
        <Error />
      </BrowserRouter>,
    );

    expect(
      screen.getByText(/Sorry, the page you are looking for does not exist./),
    ).toBeInTheDocument();
  });

  it('should render the link', () => {
    render(
      <BrowserRouter>
        <Error />
      </BrowserRouter>,
    );

    expect(screen.getByRole('link')).toBeInTheDocument();
  });
});
