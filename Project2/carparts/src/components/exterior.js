import React from "react";
import Card from "./card";
import headlight from "../images/headlight.jpg";
import taillight from "../images/taillight.jpg";
import tire from "../images/tire.jpg";

const Exterior = ({ addToCart }) => {
  return (
    <div className="productpage">
      <h1>Exterior Parts</h1>

      <div className="productgrid">
        <Card title="Sport Headlight" image={headlight} price="120" description="High-performance headlight" addToCart={addToCart} />
        <Card title="LED Headlight" image={headlight} price="150" description="Energy-efficient LED" addToCart={addToCart} />
        <Card title="Classic Headlight" image={headlight} price="100" description="Standard design" addToCart={addToCart} />

        <Card title="Red Taillight" image={taillight} price="80" description="Bright red taillight" addToCart={addToCart} />
        <Card title="Smoked Taillight" image={taillight} price="90" description="Smoked lens taillight" addToCart={addToCart} />
        <Card title="LED Taillight" image={taillight} price="110" description="Modern LED taillight" addToCart={addToCart} />

        <Card title="All-Season Tire" image={tire} price="200" description="Durable tire" addToCart={addToCart} />
        <Card title="Sport Tire" image={tire} price="220" description="High-performance tire" addToCart={addToCart} />
        <Card title="Eco Tire" image={tire} price="180" description="Fuel-efficient tire" addToCart={addToCart} />
      </div>
    </div>
  );
};

export default Exterior;
