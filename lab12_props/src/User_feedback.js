import React from "react";
import './App.css'
import Modalwindow from "./Modalwindow";

const User_feedback = function(props){
        //open modal window
        const openmodalwindow = function(){
            const modalwindow = document.querySelector(".modalWindow")
            modalwindow.style.display ="block"

            // set the username for each user
            const modalusername = document.querySelector(".modalusername").innerHTML = `<em>${props.username}</em>`
        }

   

    return(
        <>
        <div className="feedbackcontainer">
            <section className="feedbackcard">
                <div className="content">{props.username}</div>
                <div className="description">{props.children}</div>
                <div className="cardfooter">
                    <p className="addicon" onClick={openmodalwindow}><span>&#10011;</span>Add Feedback</p>
                </div>
            </section>
        </div>

        <Modalwindow/>
        </>
    )
}

export default User_feedback