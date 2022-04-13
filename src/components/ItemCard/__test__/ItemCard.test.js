import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ItemCard from '../ItemCard';

/* eslint-env jest */

describe('ItemCard', () => {
  const handleAddToCart = jest.fn();

  function MockItemCard() {
    return (
      <ItemCard
        id="1"
        heading="itemHeading"
        name="itemName"
        imgSrc="itemImageSrc"
        price="50"
        isInCart
        onAddToCart={handleAddToCart}
      />
    );
  }

  it('renders correct heading and name', () => {
    render(<MockItemCard />);

    const itemName = screen.getByText('itemName');
    const itemHeading = screen.getByText('itemHeading');

    expect(itemName).toBeInTheDocument();
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

  it('renders IN CART message and not ADD TO CART button if item is in cart ', () => {
    render(<ItemCard
      id="1"
      heading="itemHeading"
      name="itemName"
      imgSrc="itemImageSrc"
      price="50"
      isInCart
      onAddToCart={handleAddToCart}
    />);

    const inCart = screen.getByText(/in cart/i);
    const addToCartButton = screen.queryByRole('button');

    expect(inCart).toBeInTheDocument();
    expect(addToCartButton).not.toBeInTheDocument();
  });

  it('calls add to cart handler if add-to-cart button is clicked', () => {
    render(<ItemCard
      id="1"
      heading="itemHeading"
      name="itemName"
      imgSrc="itemImageSrc"
      price="50"
      isInCart={false}
      onAddToCart={handleAddToCart}
    />);

    const addToCartButton = screen.getByRole('button');
    userEvent.click(addToCartButton);

    expect(handleAddToCart).toHaveBeenCalledTimes(1);
  });
});
