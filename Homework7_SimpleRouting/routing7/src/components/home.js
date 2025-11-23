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

const Home = function() {
  return (
    <>
      <header className="header">
        <h1 className="headertitle">Welcome to Travel Explorer</h1>
      </header>

      <div className="top-logos">
        <div className="logo-card"><Link to="/cities"><img src={newyorkImg} alt="Cities" /><p>Click to Cities</p></Link></div>
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
        Explore the most famous cities: New York, Tokyo, and Paris.
      </p>
    </>
  )
}

export default Home;
