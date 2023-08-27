import { BrowserRouter } from 'react-router-dom';
import { describe, expect } from 'vitest';
import About from '../About';
import { render, screen } from '@testing-library/react';

describe('About page', () => {
  it('should have a link to the Fake Store API', () => {
    render(
      <BrowserRouter>
        <About />
      </BrowserRouter>,
    );

    expect(
      screen.getByRole('link', { name: /fakestore api/i }),
    ).toHaveAttribute('href', 'https://fakestoreapi.com/');
  });

  it('should have a link to my GitHub profile', () => {
    render(
      <BrowserRouter>
        <About />
      </BrowserRouter>,
    );

    expect(screen.getByRole('link', { name: /ahmeducf/i })).toHaveAttribute(
      'href',
      'https://github.com/ahmeducf',
    );
  });
});
