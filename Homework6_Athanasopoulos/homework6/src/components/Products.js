import React from "react";
import "../App.css";
import ProductCard from "./ProductCard";

// import all images
import headphonesImg from "../images/headphones.png";
import mouseImg from "../images/mouse.png";
import keyboardImg from "../images/keyboard.png";
import watchImg from "../images/watch.png";
import speakerImg from "../images/speaker.png";
import chargerImg from "../images/charger.png";
import displayImg from "../images/display.png";
import standImg from "../images/stand.png";
import ssdImg from "../images/ssd.png";
import webcamImg from "../images/webcam.png";

// List of products
const products = [
  { name: "Wireless Headphones", image: headphonesImg, price: 59.99, inStock: true },
  { name: "Gaming Mouse", image: mouseImg, price: 29.99, inStock: true },
  { name: "Mechanical Keyboard", image: keyboardImg, price: 89.99, inStock: false },
  { name: "Smart Watch", image: watchImg, price: 129.99, inStock: true },
  { name: "Bluetooth Speaker", image: speakerImg, price: 39.99, inStock: true },
  { name: "USB-C Charger", image: chargerImg, price: 19.99, inStock: false },
  { name: "LED Monitor", image: displayImg, price: 199.99, inStock: true },
  { name: "Laptop Stand", image: standImg, price: 24.99, inStock: true },
  { name: "External SSD", image: ssdImg, price: 149.99, inStock: false },
  { name: "Webcam 1080p", image: webcamImg, price: 49.99, inStock: true },
];

const Products = function() {
  // create an empty array to store all cards
  const cards = [];

  // make a ProductCard for each product
  for (let i = 0; i < products.length; i++) {
    const product = products[i];

    cards.push(
      <ProductCard
        key={i}
        name={product.name}
        image={product.image}
        price={product.price}
        inStock={product.inStock}
      />
    );
  }

  // show all product cards inside a container
  return <main className="products-container">{cards}</main>;
}

export default Products;
