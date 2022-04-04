import React from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import PropTypes from 'prop-types';
import './QuantitySlider.css';

function QuantitySlider({ quantity, onQuantityChange }) {
  const decreaseQuantity = () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    onQuantityChange(quantity + 1);
  };

  return (
    <div className="quantity-slider-wrapper">
      <div className="quantity-slider">
        <button type="button" className="decrease" aria-label="decrease" onClick={decreaseQuantity}>
          <FiMinus />
        </button>
        <div className="quantity-display">{quantity}</div>
        <button type="button" className="increase" aria-label="increase" onClick={increaseQuantity}>
          <FiPlus />
        </button>
      </div>
    </div>
  );
}

QuantitySlider.propTypes = {
  quantity: PropTypes.number.isRequired,
  onQuantityChange: PropTypes.func.isRequired,
};

export default QuantitySlider;
