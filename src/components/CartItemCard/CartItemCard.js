import React from 'react';
import './CartItemCard.css';

function CartItemCard({
  // eslint-disable-next-line react/prop-types
  id, imgSrc, heading, name, price, quantity, onQuantityChange, onItemDelete,
}) {
  const handleQuantityChange = (e) => {
    onQuantityChange(id, e.target.value);
  };

  const handleDeleteCartItem = () => {
    onItemDelete(id);
  };

  return (
    <div className="cart-item">
      <div className="img-wrapper">
        <img src={imgSrc} alt={name} />
      </div>
      <div className="content-wrapper">
        <div className="heading">{heading}</div>
        <div className="name">{name}</div>
        <div className="price">{`$${price}`}</div>
      </div>
      <div className="quantity-wrapper">
        <input
          type="number"
          className="quantity-input"
          value={quantity}
          onChange={handleQuantityChange}
        />
      </div>
      <button
        type="button"
        className="delete-cart-item"
        onClick={handleDeleteCartItem}
      >
        Delete
      </button>
    </div>
  );
}

export default CartItemCard;
