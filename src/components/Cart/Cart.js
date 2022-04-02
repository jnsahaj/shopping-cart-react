import React from 'react';
import CartItemCard from '../CartItemCard/CartItemCard';

// eslint-disable-next-line react/prop-types
function Cart({ items, onQuantityChange, onItemDelete }) {
  const handleQuantityChange = (itemId, quantity) => {
    onQuantityChange(itemId, quantity);
  };

  const handleDeleteCartItem = (itemId) => {
    onItemDelete(itemId);
  };

  return (
    <div>
      {/* eslint-disable-next-line react/prop-types */}
      {items.map((item) => (
        <CartItemCard
          key={item.id}
          id={item.id}
          name={item.title}
          imgSrc={item.image}
          price={item.price}
          quantity={item.quantity}
          onQuantityChange={handleQuantityChange}
          onItemDelete={handleDeleteCartItem}
        />
      ))}
    </div>
  );
}

export default Cart;
