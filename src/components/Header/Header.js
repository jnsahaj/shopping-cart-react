import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingBag, FiShoppingCart } from 'react-icons/fi';
import PropTypes from 'prop-types';
import logo from '../../assets/logo.png';
import './Header.css';

function Header({ cartItemsCount }) {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo-wrapper">
          <img src={logo} alt="Logo" />
        </div>
      </Link>
      <nav className="navbar">
        <ul className="links">
          <Link to="/shop">
            <li>
              <FiShoppingBag />
              <div className="link-names">Shop</div>
            </li>
          </Link>
          <Link to="/cart">
            <li>
              {cartItemsCount > 0 && <div className="cart-items-badge">{cartItemsCount}</div>}
              <FiShoppingCart />
              <div className="link-names">Cart</div>
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

Header.defaultProps = {
  cartItemsCount: 0,
};

Header.propTypes = {
  cartItemsCount: PropTypes.number,
};

export default Header;
