import React from "react";
import "../App.css";

const ProductCard = function(props) {
  return (
    <div className="product-card">
      <img src={props.image} alt={props.name} />
      <div className="product-info">
        <p className="product-name">{props.name}</p>
        <p className="product-price">${props.price}</p>
        <p className={props.inStock ? "product-status in-stock" : "product-status out-stock"}>
          {props.inStock ? "In Stock" : "Out of Stock"}
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
