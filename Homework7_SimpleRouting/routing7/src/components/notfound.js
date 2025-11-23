import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import homeLogo from "../images/home.png";

const NotFound = () => {
  return (
    <>
      <header className="header"><h1 className="headertitle">404 - Page Not Found</h1></header>

      <p className="text">
        Oops! This page does not exist. Please click the button below to return home.
      </p>

      <div style={{textAlign: "center", margin: "2rem"}}>
        <Link to="/"><button style={{padding:"0.8rem 1.5rem", fontSize:"1rem"}}>Return Home</button></Link>
      </div>

      <div className="top-logos">
        <div className="logo-card"><Link to="/"><img src={homeLogo} alt="Home" /><p>Click to Home</p></Link></div>
      </div>
    </>
  )
}

export default NotFound;
