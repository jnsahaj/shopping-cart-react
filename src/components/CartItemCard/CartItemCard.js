import React from 'react';

function CartItemCard({
  // eslint-disable-next-line react/prop-types
  id, imgSrc, name, price, quantity, onQuantityChange,
}) {
  const handleQuantityChange = (e) => {
    onQuantityChange(id, e.target.value);
  };

  return (
    <div className="cart-item">
      <div className="img-wrapper">
        <img src={imgSrc} alt={name} />
      </div>
      <div className="content-wrapper">
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
    </div>
  );
}

export default CartItemCard;
