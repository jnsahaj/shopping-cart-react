import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../Header';

/* eslint-env jest */

describe('Header', () => {
  it('renders shop logo', () => {
    render(
      <Router>
        <Header cartItemsCount={1} />
      </Router>,
    );
    const logo = screen.getByRole('img');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('alt', 'Logo');
  });

  it('renders navbar', () => {
    render(
      <Router>
        <Header cartItemsCount={1} />
      </Router>,
    );
    const navbar = screen.getByRole('navigation');
    expect(navbar).toBeInTheDocument();
    const navlinks = screen.getAllByRole('listitem');
    expect(navlinks.length).toBe(2);
  });

  it('renders all navbar links', () => {
    render(
      <Router>
        <Header cartItemsCount={1} />
      </Router>,
    );
    const navlinks = screen.getAllByRole('listitem');
    expect(navlinks.length).toBe(2);
  });

  it('renders cart-items badge with correct number', () => {
    render(
      <Router>
        <Header cartItemsCount={4} />
      </Router>,
    );
    const badge = screen.getByText('4');
    expect(badge).toBeInTheDocument();
  });

  it('does not render cart-items badge if cart is empty', () => {
    render(
      <Router>
        <Header cartItemsCount={0} />
      </Router>,
    );
    const badge = screen.queryByText('0');
    expect(badge).not.toBeInTheDocument();
  });
});
