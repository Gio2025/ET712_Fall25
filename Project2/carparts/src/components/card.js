import React from "react";
import '../App.css';

const Card = ({ item, addToCart, cartItems }) => {
  const count = cartItems[item.name]?.qty || 0;

  return (
    <div className="productCard">
      <img className="productImg" src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>${item.price}</p>
      <button className="addBtn" onClick={() => addToCart(item)}>
        Add to Cart {count > 0 && `(${count})`}
      </button>
    </div>
  );
};

export default Card;
