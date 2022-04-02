/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingBag, FiShoppingCart } from 'react-icons/fi';
import './Header.css';

function Header({ cartItemsCount }) {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo-wrapper">
          {/* <img src="/" alt="Logo" /> */}
          Home
        </div>
      </Link>
      <nav className="navbar">
        <ul className="links">
          <Link to="/shop">
            <li>
              <FiShoppingBag />
              <div>Shop</div>
            </li>
          </Link>
          <Link to="/cart">
            <li>
              {cartItemsCount > 0 && <div className="cart-items-badge">{cartItemsCount}</div>}
              <FiShoppingCart />
              <div>Cart</div>
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
