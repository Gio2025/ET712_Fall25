import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Navbar = function() {
  return (
    <nav className="navbar">
      <div className="qcclink">
        <a href="https://www.lonelyplanet.com/" target="_blank" rel="noreferrer">Travel Guide</a>
      </div>

      <div className="btngroup">
        <button><Link to="/">Home</Link></button>
        <button><Link to="/cities">Cities</Link></button>
        <button><Link to="/mountains">Mountains</Link></button>
        <button><Link to="/islands">Islands</Link></button>
        <button><Link to="/broken-link">Broken Link</Link></button>
      </div>
    </nav>
  )
}

export default Navbar;
