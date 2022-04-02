import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ItemCard from '../ItemCard';

/* eslint-env jest */

const handleAddToCart = jest.fn();

function MockItemCard() {
  return (
    <ItemCard
      id="1"
      name="itemName"
      imgSrc="itemImageSrc"
      price="50"
      onAddToCart={handleAddToCart}
    />
  );
}

describe('ItemCard', () => {
  it('renders correct name', () => {
    render(<MockItemCard />);
    const itemName = screen.getByText('itemName');
    expect(itemName).toBeInTheDocument();
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

  it('add to cart handler is called', () => {
    render(<MockItemCard />);
    const addToCartButton = screen.getByRole('button');
    userEvent.click(addToCartButton);
    expect(handleAddToCart).toHaveBeenCalledTimes(1);
  });
});
