import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/pages/Home/Home';
import Shop from './components/pages/Shop/Shop';
import Cart from './components/pages/Cart/Cart';
import './App.css';
import Item from './components/pages/Item/Item';

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
    const response = await fetch('data/ShopData.json');
    const shopData = await response.json();
    setShopItems(shopData.map((item) => ({ ...item, price: item.price.slice(1, item.price.indexOf('-')) })));
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <BrowserRouter>
      <Header cartItemsCount={cartItems.length} />
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
              cartItemsId={cartItems.map((item) => item.id)}
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
        <Route
          path="/shop/:id"
          element={(
            <Item
              shopItems={shopItems}
              cartItemsId={cartItems.map((item) => item.id)}
              onAddToCart={handleAddToCart}
            />
          )}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
