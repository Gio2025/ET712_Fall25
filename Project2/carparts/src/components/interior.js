import React from "react";
import Card from "./card";
import seat from "../images/seat.jpg";
import radio from "../images/radio.jpg";
import floormat from "../images/floormat.jpg";

const Interior = ({ addToCart, cartItems }) => {
  const items = [
    { name: "Seat", price: 100, image: seat },
    { name: "Radio", price: 50, image: radio },
    { name: "Floor Mat", price: 30, image: floormat },
  ];

  return (
    <div className="productContainer">
      {items.map(item => (
        <Card key={item.name} item={item} addToCart={addToCart} cartItems={cartItems} />
      ))}
    </div>
  );
};

export default Interior;
