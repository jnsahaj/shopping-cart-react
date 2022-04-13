import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Item from '../Item';

/* eslint-env jest */

describe('Item', () => {
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

  const renderMockItem = ({ id, cartItemsId }) => {
    render(
      <MemoryRouter initialEntries={[`/shop/${id}`]}>
        <Routes>
          <Route
            path="/shop/:id"
            element={(
              <Item
                shopItems={mockShopData}
                cartItemsId={cartItemsId}
                onAddToCart={handleAddToCart}
              />
            )}
          />
        </Routes>
      </MemoryRouter>,
    );
  };

  it('renders item details correctly', async () => {
    renderMockItem({ id: '3', cartItemsId: [] });

    const heading = await screen.findByText(/Aquatalia/i);
    const price = await screen.findByText('$161.63');
    expect(heading).toBeInTheDocument();
    expect(price).toBeInTheDocument();
  });

  it('renders IN CART message and not ADD TO CART button if item is in cart ', async () => {
    renderMockItem({ id: '1', cartItemsId: ['1', '3'] });

    const inCart = await screen.findByText(/in cart/i);
    const addToCartButton = screen.queryByText(/add to cart/i);

    expect(inCart).toBeInTheDocument();
    expect(addToCartButton).not.toBeInTheDocument();
  });

  it('calls add to cart handler if add-to-cart button is clicked', async () => {
    renderMockItem({ id: '1', cartItemsId: [] });

    const addToCartButton = await screen.findByRole('button', { name: /add to cart/i });
    userEvent.click(addToCartButton);

    expect(handleAddToCart).toHaveBeenCalledTimes(1);
  });

  it('calls add to cart handler if but-now button is clicked', async () => {
    renderMockItem({ id: '1', cartItemsId: [] });

    const addToCartButton = await screen.findByRole('button', { name: /buy now/i });
    userEvent.click(addToCartButton);

    expect(handleAddToCart).toHaveBeenCalledTimes(1);
  });
});
