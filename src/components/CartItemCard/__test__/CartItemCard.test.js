import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CartItemCard from '../CartItemCard';

/* eslint-env jest */

describe('ItemCard', () => {
  const handleQuantityChange = jest.fn();
  const handleDeleteCartItem = jest.fn();

  const onQuantityChange = (quantity) => {
    handleQuantityChange('1', quantity);
  };

  function MockItemCard() {
    return (
      <CartItemCard
        id="1"
        heading="itemHeading"
        imgSrc="itemImageSrc"
        price="50"
        quantity={2}
        onQuantityChange={handleQuantityChange}
        onItemDelete={handleDeleteCartItem}
      />
    );
  }

  it('renders correct heading', () => {
    render(<MockItemCard />);
    const itemHeading = screen.getByText('itemHeading');
    expect(itemHeading).toBeInTheDocument();
  });

  it('renders correct image', () => {
    render(<MockItemCard />);
    const itemImg = screen.getByRole('img');
    expect(itemImg).toHaveAttribute('src', 'itemImageSrc');
  });

  it('renders correct price with currency', () => {
    render(<MockItemCard />);
    const itemPrice = screen.getByText('$50');
    expect(itemPrice).toBeInTheDocument();
  });

  it('calls deleteItem handler when delete button is clicked', () => {
    render(<MockItemCard />);

    const deleteButton = screen.getByRole('button', { name: /delete/i });
    userEvent.click(deleteButton);

    expect(handleDeleteCartItem).toHaveBeenCalledWith('1');
    expect(handleDeleteCartItem).toHaveBeenCalledTimes(1);
  });

  it('quantityChange handler is called on quantity change', () => {
    onQuantityChange(2);
    expect(handleQuantityChange).toHaveBeenCalledWith('1', 2);
  });
});
