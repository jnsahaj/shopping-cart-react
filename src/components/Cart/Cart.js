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
      <div className="total-amount">
        {
        // eslint-disable-next-line react/prop-types
        items.reduce((totalAmount, currentItem) => (
          totalAmount + currentItem.quantity * currentItem.price), 0)
        }

      </div>
      {/* eslint-disable-next-line react/prop-types */}
      {items.map((item) => (
        <CartItemCard
          key={item.id}
          id={item.id}
          name={item.title}
          imgSrc={item.images_list[0]}
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
