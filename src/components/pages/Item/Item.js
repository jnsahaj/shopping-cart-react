import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Item.css';

function Item({ shopItems, cartItemsId, onAddToCart }) {
  const { id: itemId } = useParams();
  const [item, setItem] = useState(null);
  const [inCart, setInCart] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(itemId);
  };

  useEffect(() => {
    setItem(shopItems.find((selectedItem) => selectedItem.id === itemId));
  }, []);

  useEffect(() => {
    setInCart(cartItemsId.includes(itemId));
  });

  return (
    <div className="item-page page">
      {item != null && (
      <div className="item-container">
        <div className="img-wrapper">
          <img src={item.images_list[0]} alt="Item" />
        </div>
        <div className="content-wrapper">
          <div className="heading">{item.brand}</div>
          <p className="name">{item.title}</p>
          <div className="price">{`$${item.price.slice(1, item.price.indexOf('-'))}`}</div>
          {inCart && <div className="in-cart">IN CART</div> }
          <div className="feature-wrapper">
            {item.features.map((feature) => {
              const featureName = Object.keys(feature)[0];
              return (
                <div key={featureName} className="feature">
                  <span className="feature-name">{featureName}</span>
                  {`: ${feature[featureName]}`}
                </div>
              );
            })}
          </div>
          <div className="button-wrapper">
            {!inCart && (
            <button type="button" className="add-to-cart" onClick={handleAddToCart}>
              Add to Cart
            </button>
            )}
            <Link to="/cart">
              <button type="button" className="buy-now" onClick={handleAddToCart}>
                Buy Now
              </button>
            </Link>
          </div>
        </div>

      </div>
      )}
    </div>
  );
}

Item.defaultProps = {
  cartItemsId: [],
};

Item.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  shopItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  cartItemsId: PropTypes.arrayOf(PropTypes.string),
  onAddToCart: PropTypes.func.isRequired,
};

export default Item;
