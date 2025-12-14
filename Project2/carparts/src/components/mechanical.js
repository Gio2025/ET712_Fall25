import React from "react";
import Card from "./card";
import brakepad from "../images/brakepad.jpg";
import engine from "../images/engine.jpg";
import transmission from "../images/transmission.jpg";

const Mechanical = ({ addToCart }) => {
  return (
    <div className="productpage">
      <h1>Mechanical Parts</h1>

      <div className="productgrid">
        <Card title="Standard Brake Pad" image={brakepad} price="60" description="Reliable braking" addToCart={addToCart} />
        <Card title="Sport Brake Pad" image={brakepad} price="80" description="High-performance braking" addToCart={addToCart} />
        <Card title="Eco Brake Pad" image={brakepad} price="50" description="Long-lasting and efficient" addToCart={addToCart} />

        <Card title="V6 Engine" image={engine} price="1500" description="Powerful engine" addToCart={addToCart} />
        <Card title="V8 Engine" image={engine} price="2000" description="High-performance engine" addToCart={addToCart} />
        <Card title="Electric Engine" image={engine} price="1800" description="Eco-friendly engine" addToCart={addToCart} />

        <Card title="Manual Transmission" image={transmission} price="800" description="Classic manual gearbox" addToCart={addToCart} />
        <Card title="Automatic Transmission" image={transmission} price="1000" description="Smooth automatic gearbox" addToCart={addToCart} />
        <Card title="CVT Transmission" image={transmission} price="900" description="Continuously variable transmission" addToCart={addToCart} />
      </div>
    </div>
  );
};

export default Mechanical;
