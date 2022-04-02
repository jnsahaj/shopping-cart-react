/* eslint-disable react/prop-types */
import React from 'react';
import './ItemCard.css';

function ItemCard({
  id, imgSrc, heading, name, price, onAddToCart,
}) {
  const handleAddToCart = () => {
    onAddToCart(id);
  };

  return (
    <div className="item">
      <div className="img-wrapper">
        <img src={imgSrc} alt={name} />
      </div>
      <div className="content-wrapper">
        <div className="heading">{heading}</div>
        <div className="name">{name}</div>
        <div className="price">{`$${price}`}</div>
      </div>
      <button type="button" className="add-to-cart" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}

// ItemCard.PropTypes = {
//   imgSrc: PropTypes.string,
// };

export default ItemCard;
