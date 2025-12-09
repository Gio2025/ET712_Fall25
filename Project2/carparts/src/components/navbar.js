import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Navbar = ({ cartCount }) => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/interior">Interior</Link>
      <Link to="/exterior">Exterior</Link>
      <Link to="/mechanical">Mechanical</Link>
      <Link to="/cart">Cart {cartCount > 0 && `(${cartCount})`}</Link>
    </nav>
  );
};

export default Navbar;
