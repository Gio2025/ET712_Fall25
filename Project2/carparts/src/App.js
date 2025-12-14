import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Home from "./components/home";
import Interior from "./components/interior";
import Exterior from "./components/exterior";
import Mechanical from "./components/mechanical";
import Cart from "./components/cart";

import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    // Check if item is already in cart
    const existing = cart.find((i) => i.title === item.title);
    if (existing) {
      setCart(
        cart.map((i) =>
          i.title === item.title ? { ...i, qty: i.qty + 1 } : i
        )
      );
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };

  const removeFromCart = (title) => {
    setCart(cart.filter((i) => i.title !== title));
  };

  return (
    <Router>
      <Navbar cart={cart} />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} cart={cart} />} />
        <Route path="/interior" element={<Interior addToCart={addToCart} cart={cart} />} />
        <Route path="/exterior" element={<Exterior addToCart={addToCart} cart={cart} />} />
        <Route path="/mechanical" element={<Mechanical addToCart={addToCart} cart={cart} />} />
        <Route
          path="/cart"
          element={<Cart cart={cart} removeFromCart={removeFromCart} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
