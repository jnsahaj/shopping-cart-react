import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
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
            <li>Shop</li>
          </Link>
          <li>About</li>
          <Link to="/cart">
            <li>Cart</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
