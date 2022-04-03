import React from 'react';
import PropTypes from 'prop-types';
import { FiCheckSquare } from 'react-icons/fi';
import './ItemCard.css';

function ItemCard({
  id, imgSrc, heading, name, price, isInCart, onAddToCart,
}) {
  const handleAddToCart = (e) => {
    e.preventDefault(); // Stop event bubbling
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
      {isInCart ? (
        <div className="in-cart-wrapper">
          <div className="text">IN CART</div>
          <FiCheckSquare />
        </div>
      ) : (
        <button
          type="button"
          className="add-to-cart"
          onClick={handleAddToCart}
        >
          ADD TO CART
        </button>
      ) }

    </div>
  );
}

ItemCard.defaultProps = {
  imgSrc: '/',
  name: '',
  isInCart: false,
};

ItemCard.propTypes = {
  id: PropTypes.string.isRequired,
  imgSrc: PropTypes.string,
  heading: PropTypes.string.isRequired,
  name: PropTypes.string,
  price: PropTypes.number.isRequired,
  isInCart: PropTypes.bool,
  onAddToCart: PropTypes.func.isRequired,
};

export default ItemCard;
