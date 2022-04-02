import React from 'react';
import CartItemCard from '../CartItemCard/CartItemCard';

// eslint-disable-next-line react/prop-types
function Cart({ items, onQuantityChange }) {
  const handleQuantityChange = (itemId, quantity) => {
    onQuantityChange(itemId, quantity);
  };

  return (
    <div>
      {/* eslint-disable-next-line react/prop-types */}
      {items.map((item) => (
        <CartItemCard
          key={item.id}
          id={item.id}
          name={item.name}
          imgSrc={item.image}
          price={item.price}
          quantity={item.quantity}
          onQuantityChange={handleQuantityChange}
        />
      ))}
    </div>
  );
}

export default Cart;
