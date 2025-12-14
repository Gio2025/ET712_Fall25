import React from "react";
import "../App.css";

const Modalwindow = ({ show, close, title, image, description }) => {
  if (!show) return null;

  return (
    <div className="modaloverlay">
      <div className="modalcontent">
        <h2>{title}</h2>
        <img src={image} alt={title} />
        <p>{description}</p>
        <button onClick={close}>Close</button>
      </div>
    </div>
  );
};

export default Modalwindow;
