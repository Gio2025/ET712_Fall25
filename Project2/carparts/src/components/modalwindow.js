import React from "react";
import "../App.css";

const Modalwindow = function () {
  const closemodalwindow = () => {
    document.querySelector(".modalWindow").style.display = "none";
  };

  return (
    <>
      <section className="modalWindow">
        <div className="modalContent">
          <header className="modalHeader">
            <h2 className="modalTitle"></h2>
            <p className="closeModal" onClick={closemodalwindow}>✖</p>
          </header>

          <main className="modalBody">
            <img className="modalImg" />
            <p className="modalDesc"></p>
          </main>
        </div>
      </section>
    </>
  );
};

export default Modalwindow;
