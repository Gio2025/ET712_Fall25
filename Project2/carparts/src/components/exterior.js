import React from "react";
import Card from "./card";
import headlight from "../images/headlight.jpg";
import taillight from "../images/taillight.jpg";
import tire from "../images/tire.jpg";

const Exterior = ({ addToCart, cartItems }) => {
  const items = [
    { name: "Headlight", price: 120, image: headlight },
    { name: "Taillight", price: 110, image: taillight },
    { name: "Tire", price: 200, image: tire },
  ];

  return (
    <div className="productContainer">
      {items.map(item => (
        <Card key={item.name} item={item} addToCart={addToCart} cartItems={cartItems} />
      ))}
    </div>
  );
};

export default Exterior;
