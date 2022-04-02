import React from 'react';
import PropTypes from 'prop-types';
import CartItemCard from '../../CartItemCard/CartItemCard';
import './Cart.css';

function Cart({ items, onQuantityChange, onItemDelete }) {
  const handleQuantityChange = (itemId, quantity) => {
    onQuantityChange(itemId, quantity);
  };

  const handleDeleteCartItem = (itemId) => {
    onItemDelete(itemId);
  };

  const getTotalAmount = (itemList) => {
    const total = itemList.reduce((totalAmount, currentItem) => (
      totalAmount + currentItem.quantity * currentItem.price), 0);
    return total.toFixed(2);
  };

  return (
    <div className="cart page">
      <div className="total-amount">
        {
          getTotalAmount(items)
        }

      </div>
      <div className="cart-items-container">
        {items.map((item) => (
          <CartItemCard
            key={item.id}
            id={item.id}
            heading={item.brand}
            name={item.title}
            imgSrc={item.images_list[0]}
            price={parseFloat(item.price)}
            quantity={item.quantity}
            onQuantityChange={handleQuantityChange}
            onItemDelete={handleDeleteCartItem}
          />
        ))}
      </div>
    </div>
  );
}

Cart.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onQuantityChange: PropTypes.func.isRequired,
  onItemDelete: PropTypes.func.isRequired,
};

export default Cart;
