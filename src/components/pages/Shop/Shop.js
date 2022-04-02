/* eslint-disable react/prop-types */
import React from 'react';
import ItemCard from '../../ItemCard/ItemCard';
import './Shop.css';

// eslint-disable-next-line react/prop-types
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
            price={item.price}
            isInCart={false}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Shop;
