import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import QuantitySlider from '../QuantitySlider';

/* eslint-env jest */

describe('ItemCard', () => {
  const handleQuantityChange = jest.fn();

  it('renders correct quantity', () => {
    render(<QuantitySlider quantity={3} onQuantityChange={handleQuantityChange} />);
    const quantity = screen.getByText('3');
    expect(quantity).toBeInTheDocument();
  });

  it('calls quantityChange handler with correct quantity on increase button click', () => {
    render(<QuantitySlider quantity={3} onQuantityChange={handleQuantityChange} />);
    const incQuantityButton = screen.getByRole('button', { name: /increase/i });
    userEvent.click(incQuantityButton);
    expect(handleQuantityChange).toHaveBeenCalledWith(4);
    expect(handleQuantityChange).toHaveBeenCalledTimes(1);
  });

  it('calls quantityChange handler with correct quantity on decrease button click', () => {
    render(<QuantitySlider quantity={3} onQuantityChange={handleQuantityChange} />);
    const decQuantityButton = screen.getByRole('button', { name: /decrease/i });
    userEvent.click(decQuantityButton);
    expect(handleQuantityChange).toHaveBeenCalledWith(2);
    expect(handleQuantityChange).toHaveBeenCalledTimes(1);
  });

  it('does not call quantityChange handler on decrease button click if quantity is 1', () => {
    render(<QuantitySlider quantity={1} onQuantityChange={handleQuantityChange} />);
    const decQuantityButton = screen.getByRole('button', { name: /decrease/i });
    userEvent.click(decQuantityButton);
    expect(handleQuantityChange).not.toHaveBeenCalled();
  });
});
