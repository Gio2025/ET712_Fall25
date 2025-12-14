import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Navbar = ({ cart }) => {
  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);

  return (
    <nav className="navbar">
      <h2 className="logo">CarParts Store</h2>
      <div className="navlinks">
        <Link to="/">Home</Link>
        <Link to="/interior">Interior</Link>
        <Link to="/exterior">Exterior</Link>
        <Link to="/mechanical">Mechanical</Link>
        <Link to="/cart">Cart ({totalItems})</Link>
      </div>
    </nav>
  );
};

export default Navbar;
