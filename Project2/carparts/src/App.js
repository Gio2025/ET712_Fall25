import './App.css';
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/navbar";
import Homepage from "./components/homepage";
import Interior from "./components/interior";
import Exterior from "./components/exterior";
import Mechanical from "./components/mechanical";
import Cart from "./components/cart";

function App() {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (item) => {
    setCartItems(prev => {
      const prevQty = prev[item.name]?.qty || 0;
      return {
        ...prev,
        [item.name]: { ...item, qty: prevQty + 1 }
      };
    });
  };

  const removeFromCart = (itemName) => {
    setCartItems(prev => {
      const newCart = { ...prev };
      delete newCart[itemName];
      return newCart;
    });
  };

  return (
    <>
      <BrowserRouter>
        <Navbar cartCount={Object.keys(cartItems).length} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/interior" element={<Interior addToCart={addToCart} cartItems={cartItems} />} />
          <Route path="/exterior" element={<Exterior addToCart={addToCart} cartItems={cartItems} />} />
          <Route path="/mechanical" element={<Mechanical addToCart={addToCart} cartItems={cartItems} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
