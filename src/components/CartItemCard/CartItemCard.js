import React from 'react';
import { FiTrash2 } from 'react-icons/fi';
import QuantitySlider from '../QuantitySlider/QuantitySlider';
import './CartItemCard.css';

function CartItemCard({
  // eslint-disable-next-line react/prop-types
  id, imgSrc, heading, name, price, onQuantityChange, onItemDelete,
}) {
  const handleQuantityChange = (quantity) => {
    onQuantityChange(id, quantity);
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
        <QuantitySlider onQuantityChange={handleQuantityChange} />
      </div>
      <button
        type="button"
        className="delete-cart-item"
        onClick={handleDeleteCartItem}
      >
        <FiTrash2 />
      </button>
    </div>
  );
}

export default CartItemCard;
