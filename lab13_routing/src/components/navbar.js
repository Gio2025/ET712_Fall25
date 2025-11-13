import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Navbar = function(){

    return(
        <>
            <nav className="navbar">
                <div className="qcclink">
                    <a href="https://www.cqcc.cuny.edu.com" target="_blank">QCC</a>
                </div>

                <div className="btngroup">
                    <button> <Link to="/">Home</Link></button>
                    <button> <Link to="/about">About Us</Link></button>
                    <button> <Link to="/contact">Contact Us</Link></button>
                </div>
            </nav>    
        
        </>
    )
}

export default Navbar