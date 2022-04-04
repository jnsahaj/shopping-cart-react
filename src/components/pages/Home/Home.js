import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import './Home.css';

function Home() {
  return (
    <div className="home page">
      <div className="logo-wrapper">
        <img src={logo} alt="Logo" />
        <div className="shop-at">
          Vertigo
        </div>
      </div>
      <div className="shop">
        <Link to="/shop">
          <button type="button">Shop</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
