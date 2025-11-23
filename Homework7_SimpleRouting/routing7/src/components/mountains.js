import React from "react";
import '../App.css';
import mountainsImg from "../images/mountains.jpg";
import newyorkImg from "../images/newyork.jpg";
import islandsLogo from "../images/islands.jpg";
import homeLogo from "../images/home.png";
import brokenLogo from "../images/broken.png";
import { Link } from "react-router-dom";

const Mountains = function() {
  return (
    <>
      <header className="header"><h1 className="headertitle">Mountains</h1></header>

      <div className="top-logos">
        <div className="logo-card"><Link to="/"><img src={homeLogo} alt="Home" /><p>Click to Home</p></Link></div>
        <div className="logo-card"><Link to="/cities"><img src={newyorkImg} alt="Cities" /><p>Click to Cities</p></Link></div>
        <div className="logo-card"><Link to="/islands"><img src={islandsLogo} alt="Islands" /><p>Click to Islands</p></Link></div>
        <div className="logo-card"><Link to="/broken-link"><img src={brokenLogo} alt="Broken Link" /><p>Click to Broken Link</p></Link></div>
      </div>

      <div className="maincontainer">
        <div className="cardimg"><img src={mountainsImg} alt="Mountains" /></div>
      </div>

      <p className="text">
        Did you know? Mount Everest grows about 4 mm taller every year due to tectonic plate movement.
      </p>
    </>
  )
}

export default Mountains;
