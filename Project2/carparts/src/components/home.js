import React from "react";
import Card from "./card";

import seat from "../images/seat.jpg";
import radio from "../images/radio.jpg";
import floormat from "../images/floormat.jpg";
import headlight from "../images/headlight.jpg";
import taillight from "../images/taillight.jpg";
import tire from "../images/tire.jpg";
import brakepad from "../images/brakepad.jpg";
import engine from "../images/engine.jpg";
import transmission from "../images/transmission.jpg";

const Home = ({ addToCart, cart }) => {
  return (
    <div className="productpage">
      <h1>Featured Car Parts</h1>

      <div className="productgrid">
        <Card title="Leather Seat" image={seat} price={199} description="Premium leather seat" addToCart={addToCart} showAddToCart={false} />
        <Card title="Bluetooth Radio" image={radio} price={99} description="High-quality radio" addToCart={addToCart} showAddToCart={false} />
        <Card title="Rubber Floor Mat" image={floormat} price={49} description="All-weather mat" addToCart={addToCart} showAddToCart={false} />

        <Card title="LED Headlight" image={headlight} price={150} description="Bright LED headlight" addToCart={addToCart} showAddToCart={false} />
        <Card title="Red Taillight" image={taillight} price={80} description="Standard taillight" addToCart={addToCart} showAddToCart={false} />
        <Card title="All-Season Tire" image={tire} price={200} description="Durable tire" addToCart={addToCart} showAddToCart={false} />

        <Card title="Standard Brake Pad" image={brakepad} price={60} description="Reliable braking" addToCart={addToCart} showAddToCart={false} />
        <Card title="V6 Engine" image={engine} price={1500} description="Powerful engine" addToCart={addToCart} showAddToCart={false} />
        <Card title="Manual Transmission" image={transmission} price={800} description="Classic manual gearbox" addToCart={addToCart} showAddToCart={false} />
      </div>
    </div>
  );
};

export default Home;
