import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home page">
      <Link to="/shop">
        <button type="button">Shop</button>
      </Link>
    </div>
  );
}

export default Home;
