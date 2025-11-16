import React from "react"
import "./App.css"

const Modalwindow = function(){
    // function to close modal window
    const closemodalwindow = function(){
        const modalwindow = document.querySelector(".modalWindow")
        modalwindow.style.display = "none"
    }

    // function to collect comment
    const collectcomment = function(){
        let commentarea = document.querySelector(".commentArea")
        const commentlist = document.querySelector(".commentlist")
        const modalusername = document.querySelector(".modalusername").textContent
        const postdate = new Date().toLocaleDateString()
        const modalwindow = document.querySelector(".modalWindow")

        /** append comment from the modal window to the comment list */
        commentlist.innerHTML += `<li><em><b>${modalusername}</b></em> --- ${commentarea.value} --- <span style="font-size:0.8rem; color: gray">Posted on ${postdate}</span></li>`
        commentarea.value = ""
        modalwindow.style.display = "none"
        }
    



return(
    <>
        {/* Modal Window */}
        <section className="modalWindow">
            <div className="modalContent">
                <header className="modalHeader">
                    <p>Add Feedback to <b className="modalusername"></b></p>
                    <p className="closeModal" onClick={closemodalwindow}>&#x58;</p>
                </header>

                <main className="modalBody">
                    <input className="commentArea" type="text" placeholder="Type your comments..."/>
                    <button className="btnpostfeedback" onClick={collectcomment}>Post Feedback</button>
                </main>
            </div>
        </section>
    </>
)
}

export default Modalwindow