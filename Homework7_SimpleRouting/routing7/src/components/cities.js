import React from "react";
import '../App.css';
import newyorkImg from "../images/newyork.jpg";
import tokyoImg from "../images/tokyo.jpg";
import parisImg from "../images/paris.jpg";
import mountainsLogo from "../images/mountains.jpg";
import islandsLogo from "../images/islands.jpg";
import homeLogo from "../images/home.png";
import brokenLogo from "../images/broken.png";
import { Link } from "react-router-dom";

const Cities = function() {
  return (
    <>
      <header className="header">
        <h1 className="headertitle">Cities Around the World</h1>
      </header>

      <div className="top-logos">
        <div className="logo-card"><Link to="/"><img src={homeLogo} alt="Home" /><p>Click to Home</p></Link></div>
        <div className="logo-card"><Link to="/mountains"><img src={mountainsLogo} alt="Mountains" /><p>Click to Mountains</p></Link></div>
        <div className="logo-card"><Link to="/islands"><img src={islandsLogo} alt="Islands" /><p>Click to Islands</p></Link></div>
        <div className="logo-card"><Link to="/broken-link"><img src={brokenLogo} alt="Broken Link" /><p>Click to Broken Link</p></Link></div>
      </div>

      <main className="maincontainer">
        <div className="cardimg"><img src={newyorkImg} alt="New York" /></div>
        <div className="cardimg"><img src={tokyoImg} alt="Tokyo" /></div>
        <div className="cardimg"><img src={parisImg} alt="Paris" /></div>
      </main>

      <p className="text">
        Curious facts: New York City, Tokyo, and Paris are some of the most famous cities worldwide.
      </p>
    </>
  )
}

export default Cities;
