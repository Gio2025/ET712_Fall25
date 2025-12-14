import React from "react";
import "../App.css";

const Card = ({ title, image, price, description, addToCart, qty }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>${price}</p>
      <button onClick={() => addToCart({ title, image, price, description })}>
        Add to Cart {qty > 0 ? `(${qty})` : ""}
      </button>
    </div>
  );
};

export default Card;
