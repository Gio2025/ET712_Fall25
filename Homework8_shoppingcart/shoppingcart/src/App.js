import './App.css';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import NavBar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  const [cart, setCart] = useState([]);

  // Add to cart
  const addToCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);

    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  // Remove item
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <h1 className='apptitle'>George's Grocery Market</h1>

      <NavBar cart={cart} />

      <Routes>
        <Route path="/" element={<ProductList addToCart={addToCart} />} />
        <Route path="/products" element={<ProductList addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
      </Routes>
    </div>
  );
}

export default App;
