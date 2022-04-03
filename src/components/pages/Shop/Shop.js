/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ItemCard from '../../ItemCard/ItemCard';
import './Shop.css';

function Shop({ items, cartItemsId, onAddToCart }) {
  const handleAddToCart = (itemId) => {
    onAddToCart(itemId);
  };

  return (
    <div className="shop page">
      <div className="items-container">
        {items.map((item) => (
          <Link key={item.id} to={`/shop/${item.id}`}>
            <ItemCard
              id={item.id}
              heading={item.brand}
              name={item.title}
              imgSrc={item.images_list[0]}
              price={parseFloat(item.price)}
              isInCart={cartItemsId.includes(item.id)}
              onAddToCart={handleAddToCart}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

Shop.defaultProps = {
  cartItemsId: [],
};

Shop.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  cartItemsId: PropTypes.arrayOf(PropTypes.String),
  onAddToCart: PropTypes.func.isRequired,
};

export default Shop;
