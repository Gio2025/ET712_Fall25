import React from "react"; 
import avataruser1 from './images/avatar_batman.png'
import './App.css'

const User = function(props){
    return(
        <>
            <section className="card">
                <a><img src={props.image} ></img></a>
                <div>
                    <a className="author">{props.name}</a>
                </div>
                <div className="metadata">
                    <p>Posted on <span className="date">{props.date}</span></p>
                </div>
                <div className="comment">
                    <p><i>"{props.msg}"</i></p>
                </div>
            </section>
        </>
    )
}

export default User