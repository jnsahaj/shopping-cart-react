import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/pages/Home/Home';
import Shop from './components/pages/Shop/Shop';
import Cart from './components/Cart/Cart';
import ShopData from './data/ShopData.json';
import './App.css';

function App() {
  const [shopItems, setShopItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (itemId) => {
    if (cartItems.some((item) => item.id === itemId)) return;
    const shopItem = shopItems.find((item) => item.id === itemId);
    setCartItems([...cartItems, { ...shopItem, quantity: 1 }]);
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

  const fetchItems = async () => {
    setShopItems(ShopData.map((item) => ({ ...item, price: item.price.slice(1, item.price.indexOf('-')) })));
  };

  useEffect(() => {
    fetchItems();
  }, []);

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
          element={(
            <Shop
              items={shopItems}
              onAddToCart={handleAddToCart}
            />
          )}
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
