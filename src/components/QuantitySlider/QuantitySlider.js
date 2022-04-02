import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import './QuantitySlider.css';

// eslint-disable-next-line react/prop-types
function QuantitySlider({ onQuantityChange }) {
  const [quantity, setQuantity] = useState(1);
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      onQuantityChange(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
    onQuantityChange(quantity + 1);
  };

  return (
    <div className="quantity-slider-wrapper">
      <div className="quantity-slider">
        <button type="button" className="decrease" onClick={decreaseQuantity}>
          <FiMinus />
        </button>
        <div className="quantity-display">{quantity}</div>
        <button type="button" className="increase" onClick={increaseQuantity}>
          <FiPlus />
        </button>
      </div>
    </div>
  );
}

export default QuantitySlider;
