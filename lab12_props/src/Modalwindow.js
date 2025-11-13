import React from "react"
import "./App.css"

const Modalwindow = function(){
    // function to close modal window
    const closemodalwindow = function(){
        const modalwindow = document.querySelector(".modalWindow")
        modalwindow.style.display = "none"
    }
return(
    <>
        {/* Modal Window */}
        <section className="modalWindow">
            <div className="modalContent">
                <header className="modalHeader">
                    <p>Add Feedback</p>
                    <p className="closeModal" onClick={closemodalwindow}>&#x58;</p>
                </header>

                <main className="modalBody">
                    <input className="commentArea" type="text" placeholder="Type your comments..."/>
                    <button className="btnpostfeedback">Post Feedback</button>
                </main>
            </div>
        </section>
    </>
)
}

export default Modalwindow