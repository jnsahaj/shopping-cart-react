import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="logo-wrapper">
        {/* <img src="/" alt="Logo" /> */}
        Home
      </div>
      <nav className="navbar">
        <ul className="links">
          <li>Shop</li>
          <li>About</li>
          <li>Cart</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
