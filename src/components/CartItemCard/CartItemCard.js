import React from 'react';
import { FiTrash2 } from 'react-icons/fi';
import PropTypes from 'prop-types';
import QuantitySlider from '../QuantitySlider/QuantitySlider';
import './CartItemCard.css';

function CartItemCard({
  id, imgSrc, heading, name, price, quantity, onQuantityChange, onItemDelete,
}) {
  const handleQuantityChange = (newQuantity) => {
    onQuantityChange(id, newQuantity);
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
        <QuantitySlider quantity={quantity} onQuantityChange={handleQuantityChange} />
      </div>
      <button
        type="button"
        aria-label="delete"
        className="delete-cart-item"
        onClick={handleDeleteCartItem}
      >
        <FiTrash2 />
      </button>
    </div>
  );
}

CartItemCard.defaultProps = {
  imgSrc: '/',
  name: '',
};

CartItemCard.propTypes = {
  id: PropTypes.string.isRequired,
  imgSrc: PropTypes.string,
  heading: PropTypes.string.isRequired,
  name: PropTypes.string,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  onQuantityChange: PropTypes.func.isRequired,
  onItemDelete: PropTypes.func.isRequired,
};

export default CartItemCard;
