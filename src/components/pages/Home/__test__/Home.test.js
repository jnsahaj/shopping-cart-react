import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../Home';

/* eslint-env jest */

describe('Home', () => {
  it('renders logo with alt', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );
    const logo = screen.getByRole('img');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('alt', 'Logo');
  });

  it('renders shop button', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );
    const shopButton = screen.getByRole('button', { name: /shop/i });
    expect(shopButton).toBeInTheDocument();
  });
});
