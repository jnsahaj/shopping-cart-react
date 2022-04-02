import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/pages/Home/Home';
import Shop from './components/pages/Shop/Shop';
import Cart from './components/Cart/Cart';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, { ...item, quantity: 1 }]);
  };

  const handleQuantityChange = (itemId, quantity) => {
    setCartItems(cartItems.map((item) => (item.id === itemId
      ? { ...item, quantity }
      : item
    )));
  };

  const handleDeleteCartItem = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/shop"
          element={<Shop onAddToCart={handleAddToCart} />}
        />
        <Route
          path="/cart"
          element={(
            <Cart
              items={cartItems}
              onQuantityChange={handleQuantityChange}
              onItemDelete={handleDeleteCartItem}
            />
          )}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
