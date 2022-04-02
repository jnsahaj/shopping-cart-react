import React, { useEffect, useState } from 'react';
import ItemCard from '../../ItemCard/ItemCard';

// eslint-disable-next-line react/prop-types
function Shop({ onAddToCart }) {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const response = await fetch('https://fakestoreapi.com/products?limit=7');
    const itemsData = await response.json();
    setItems(itemsData);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleAddToCart = (itemId) => {
    onAddToCart(items.find((item) => item.id === itemId));
  };

  return (
    <div className="shop page">
      <h3>SHOP PAGE</h3>
      {items.map((item) => (
        <ItemCard
          key={item.id}
          id={item.id}
          name={item.title}
          imgSrc={item.image}
          price={item.price}
          onAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
}

export default Shop;
