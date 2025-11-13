import React from "react";
import '../App.css';
import aboutimg from "../images/about.png";
import contactimg from"../images/contact.png";
import { Link } from "react-router-dom";


const Home = function(){
    return(
        <>
            <header className="header">
                <h1 className="headertitle">Welcome to React Routing</h1>
            </header>
            <main className="maincontainer">
                <div className="cardimg">
                    <Link to="/about">
                        <img src={aboutimg}/>
                    </Link>
                </div>
                <div className="cardimg">
                    <Link to="/contact">
                        <img src={contactimg}/>
                    </Link>
                </div>
            </main>
        </>
    )
}

export default Home