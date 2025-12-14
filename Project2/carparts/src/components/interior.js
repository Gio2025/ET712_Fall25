import React from "react";
import Card from "./card";

import seat from "../images/seat.jpg";
import radio from "../images/radio.jpg";
import floormat from "../images/floormat.jpg";

const Interior = ({ addToCart, cart }) => {
  const getQty = (title) => {
    const item = cart.find((i) => i.title === title);
    return item ? item.qty : 0;
  };

  return (
    <div className="productpage">
      <h1>Interior Parts</h1>
      <div className="productgrid">
        <Card title="Leather Seat" image={seat} price={199} description="Premium leather seat" addToCart={addToCart} qty={getQty("Leather Seat")} />
        <Card title="Sport Seat" image={seat} price={179} description="Comfortable sport seat" addToCart={addToCart} qty={getQty("Sport Seat")} />
        <Card title="Cloth Seat" image={seat} price={149} description="Durable cloth seat" addToCart={addToCart} qty={getQty("Cloth Seat")} />
        <Card title="Car Radio" image={radio} price={99} description="Bluetooth radio" addToCart={addToCart} qty={getQty("Car Radio")} />
        <Card title="Touchscreen Radio" image={radio} price={149} description="Touchscreen display" addToCart={addToCart} qty={getQty("Touchscreen Radio")} />
        <Card title="Classic Radio" image={radio} price={79} description="Classic style radio" addToCart={addToCart} qty={getQty("Classic Radio")} />
        <Card title="Rubber Floor Mat" image={floormat} price={49} description="All-weather mat" addToCart={addToCart} qty={getQty("Rubber Floor Mat")} />
        <Card title="Carpet Floor Mat" image={floormat} price={39} description="Soft carpet mat" addToCart={addToCart} qty={getQty("Carpet Floor Mat")} />
        <Card title="Luxury Floor Mat" image={floormat} price={59} description="Luxury interior mat" addToCart={addToCart} qty={getQty("Luxury Floor Mat")} />
      </div>
    </div>
  );
};

export default Interior;
