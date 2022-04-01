import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../Header';

/* eslint-env jest */

describe('Header', () => {
  it('renders shop logo', () => {
    render(<Header />);
    const logo = screen.getByRole('img');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('alt', 'Logo');
  });

  it('renders nav links', () => {
    render(<Header />);
    const navLinks = screen.getByRole('navigation');
    expect(navLinks).toBeInTheDocument();
  });
});
