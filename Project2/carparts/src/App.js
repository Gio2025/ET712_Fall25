import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/navbar";
import Home from "./components/home";
import Interior from "./components/interior";
import Exterior from "./components/exterior";
import Mechanical from "./components/mechanical";
import Cart from "./components/cart";

import "./App.css";

/* helper ONLY for page class, does not change layout */
function PageWrapper({ children }) {
  const location = useLocation();

  const pageClass =
    location.pathname === "/interior"
      ? "interior"
      : location.pathname === "/exterior"
      ? "exterior"
      : location.pathname === "/mechanical"
      ? "mechanical"
      : location.pathname === "/cart"
      ? "cart"
      : "home";

  return <div className={pageClass}>{children}</div>;
}

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item, quantity = 1) => {
    const existing = cart.find((i) => i.title === item.title);
    if (existing) {
      setCart(cart.map((i) => i.title === item.title ? { ...i, qty: i.qty + quantity } : i));
    } else {
      setCart([...cart, { ...item, qty: quantity }]);
    }
  };

  const removeFromCart = (title) => {
    setCart(cart.filter((i) => i.title !== title));
  };

  return (
    <Router>
      <PageWrapper>
        <Navbar cart={cart} />
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} cart={cart} />} />
          <Route path="/interior" element={<Interior addToCart={addToCart} cart={cart} />} />
          <Route path="/exterior" element={<Exterior addToCart={addToCart} cart={cart} />} />
          <Route path="/mechanical" element={<Mechanical addToCart={addToCart} cart={cart} />} />
          <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
        </Routes>
      </PageWrapper>
    </Router>
  );
}

export default App;
