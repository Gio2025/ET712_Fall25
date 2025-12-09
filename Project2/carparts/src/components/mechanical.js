import React from "react";
import Card from "./card";
import engine from "../images/engine.jpg";
import brakepad from "../images/brakepad.jpg";
import transmission from "../images/transmission.jpg";

const Mechanical = ({ addToCart, cartItems }) => {
  const items = [
    { name: "Engine", price: 500, image: engine },
    { name: "Brakepad", price: 70, image: brakepad },
    { name: "Transmission", price: 400, image: transmission },
  ];

  return (
    <div className="productContainer">
      {items.map(item => (
        <Card key={item.name} item={item} addToCart={addToCart} cartItems={cartItems} />
      ))}
    </div>
  );
};

export default Mechanical;
