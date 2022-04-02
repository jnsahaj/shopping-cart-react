import React from 'react';
import PropTypes from 'prop-types';
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

ItemCard.defaultProps = {
  imgSrc: '/',
  name: '',
};

ItemCard.propTypes = {
  id: PropTypes.string.isRequired,
  imgSrc: PropTypes.string,
  heading: PropTypes.string.isRequired,
  name: PropTypes.string,
  price: PropTypes.number.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default ItemCard;
