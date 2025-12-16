import React, { useState } from "react";
import "../App.css";
import Modalwindow from "./modalwindow";
import { Link } from "react-router-dom";

const Card = ({
  title,
  image,
  price,
  description,
  addToCart,
  qty,
  showAddToCart = true
}) => {
  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="card">
      <img
        src={image}
        alt={title}
        className="card-image"
        onClick={() => setShowModal(true)}
      />

      <h3>
        <Link to="/cart">{title}</Link>
      </h3>

      <p>{description}</p>
      <p>${price}</p>

      {showAddToCart && (
        <>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />

          <button onClick={() => addToCart({ title, image, price, description }, quantity)}>
            Add to Cart {qty > 0 ? `(${qty})` : ""}
          </button>
        </>
      )}

      <Modalwindow
        show={showModal}
        close={() => setShowModal(false)}
        title={title}
        image={image}
        description={description}
      />
    </div>
  );
};

export default Card;
