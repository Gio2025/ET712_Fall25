import React from "react";
import '../App.css';

import beef from '../images/beef.png';
import rice from '../images/rice.png';
import broccoli from '../images/broccoli.png';

const products = [
  { id: 1, name: "Ground Beef", price: 6.00, was: 8.50, image: beef },
  { id: 2, name: "White Rice", price: 1.20, was: 2.00, image: rice },
  { id: 3, name: "Broccoli", price: 2.40, was: 3.00, image: broccoli }
];

const ProductList = ({ addToCart }) => {
  return (
    <>
      <h2 className="producttitle">Products</h2>

      <section className="cardcontainer">
        {products.map((product) => (
          <div key={product.id} className="card">
            <img src={product.image} />

            <p className="productname">
              {product.name}
              <s>${product.was}/lb</s>
              <span>${product.price}</span>/lb
            </p>

            <button
              className="btn_addcart"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </section>
    </>
  );
};

export default ProductList;
