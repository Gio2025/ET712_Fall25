import React from "react";
import '../App.css';
import islandsImg from "../images/islands.jpg";
import newyorkImg from "../images/newyork.jpg";
import mountainsLogo from "../images/mountains.jpg";
import homeLogo from "../images/home.png";
import brokenLogo from "../images/broken.png";
import { Link } from "react-router-dom";

const Islands = function() {
  return (
    <>
      <header className="header"><h1 className="headertitle">Islands</h1></header>

      <div className="top-logos">
        <div className="logo-card"><Link to="/"><img src={homeLogo} alt="Home" /><p>Click to Home</p></Link></div>
        <div className="logo-card"><Link to="/cities"><img src={newyorkImg} alt="Cities" /><p>Click to Cities</p></Link></div>
        <div className="logo-card"><Link to="/mountains"><img src={mountainsLogo} alt="Mountains" /><p>Click to Mountains</p></Link></div>
        <div className="logo-card"><Link to="/broken-link"><img src={brokenLogo} alt="Broken Link" /><p>Click to Broken Link</p></Link></div>
      </div>

      <div className="maincontainer">
        <div className="cardimg"><img src={islandsImg} alt="Islands" /></div>
      </div>

      <p className="text">
        Fun fact: The Maldives is made up of over 1,000 islands — many of which are less than a meter above sea level!
      </p>
    </>
  )
}

export default Islands;
