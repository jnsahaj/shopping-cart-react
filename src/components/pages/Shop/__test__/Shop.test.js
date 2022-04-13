import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Shop from '../Shop';

/* eslint-env jest */

describe('Shop', () => {
  const mockShopData = [{
    id: '1',
    price: '£49.57 - £234.95',
    brand: 'Fila',
    images_list: ['/'],
  },
  {
    id: '2',
    price: '£38.96',
    brand: 'Desigual',
    images_list: ['/'],
  },
  {
    id: '3',
    price: '£161.63 - £202.04',
    brand: 'Aquatalia',
    images_list: ['/'],
  }];

  const handleAddToCart = jest.fn();

  const onAddToCart = (itemId) => {
    handleAddToCart(itemId);
  };

  it('renders all items', () => {
    render(
      <BrowserRouter>
        <Shop items={mockShopData} cartItemsId={[]} onAddToCart={handleAddToCart} />
      </BrowserRouter>,
    );

    const items = screen.getAllByRole('button', { name: /add to cart/i });
    expect(items.length).toBe(3);
  });

  it('AddToCart handler is called when item added to cart', () => {
    onAddToCart('2');
    expect(handleAddToCart).toHaveBeenCalledTimes(1);
    expect(handleAddToCart).toHaveBeenCalledWith('2');
  });

  // it('calls add-to-cart handler', () => {
  //   render(<Shop onAddToCart={handleAddToCart} />);
  //   expect(handleAddToCart).toBeCalledWith(mockResponse[1]);
  // });
});
