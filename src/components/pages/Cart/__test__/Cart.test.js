import React from 'react';
import { render, screen } from '@testing-library/react';
import Cart from '../Cart';

/* eslint-env jest */

describe('Cart', () => {
  const mockItems = [
    {
      id: '1', images_list: ['/'], brand: 'item1', price: 50, quantity: 2,
    },
    {
      id: '2', images_list: ['/'], brand: 'item2', price: 20, quantity: 1,
    },
  ];

  const handleQuantityChange = jest.fn();
  const handleDeleteCartItem = jest.fn();

  const onItemDelete = (itemId) => {
    handleDeleteCartItem(itemId);
  };

  const onQuantityChange = (itemId, quantity) => {
    handleQuantityChange(itemId, quantity);
  };

  it('renders all items', () => {
    render(<Cart
      items={mockItems}
      onQuantityChange={handleQuantityChange}
      onItemDelete={handleDeleteCartItem}
    />);

    const items = screen.getAllByRole('img');
    expect(items.length).toBe(2);
  });

  it('renders item brand correctly', () => {
    render(<Cart
      items={mockItems}
      onQuantityChange={handleQuantityChange}
      onItemDelete={handleDeleteCartItem}
    />);

    const item1 = screen.getByText(/item1/i);
    expect(item1).toBeInTheDocument();
  });

  it('renders price with currency', () => {
    render(<Cart
      items={mockItems}
      onQuantityChange={handleQuantityChange}
      onItemDelete={handleDeleteCartItem}
    />);

    const item1Price = screen.getByText('$50');
    expect(item1Price).toBeInTheDocument();
  });

  it('renders order summary subtotal correctly', () => {
    render(<Cart
      items={mockItems}
      onQuantityChange={handleQuantityChange}
      onItemDelete={handleDeleteCartItem}
    />);

    const subtotal = screen.getByText('$120.00');
    expect(subtotal).toBeInTheDocument();
  });

  it('does not render order summary if cart is empty', () => {
    render(<Cart
      items={[]}
      onQuantityChange={handleQuantityChange}
      onItemDelete={handleDeleteCartItem}
    />);

    const subtotal = screen.queryByText(/order summary/i);
    expect(subtotal).not.toBeInTheDocument();
  });

  it('deleteItem handler is called on item deletion', () => {
    onItemDelete(mockItems[0].id);
    expect(handleDeleteCartItem).toHaveBeenCalledWith('1');
  });

  it('quantityChange handler is called on quantity change', () => {
    onQuantityChange(mockItems[1].id, 2);
    expect(handleQuantityChange).toHaveBeenCalledWith('2', 2);
  });
});
