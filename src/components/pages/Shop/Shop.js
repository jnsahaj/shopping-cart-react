/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import ItemCard from '../../ItemCard/ItemCard';
import './Shop.css';

function Shop({ items, onAddToCart }) {
  const handleAddToCart = (itemId) => {
    onAddToCart(itemId);
  };

  return (
    <div className="shop page">
      <h3>SHOP PAGE</h3>
      <div className="items-container">
        {items.map((item) => (
          <ItemCard
            key={item.id}
            id={item.id}
            heading={item.brand}
            name={item.title}
            imgSrc={item.images_list[0]}
            price={parseFloat(item.price)}
            isInCart={false}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

Shop.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default Shop;
