import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const NavBar = ({ cart }) => {
  return (
    <nav className="navbar">
      <Link to="/products">Products</Link>

      <Link to="/cart">
        Cart ({cart.reduce((total, item) => total + item.qty, 0)})
      </Link>
    </nav>
  );
};

export default NavBar;
