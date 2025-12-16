import React from "react";
import "../App.css";

const Cart = ({ cart, removeFromCart }) => {
  const subtotal = cart.reduce(
    (acc, item) => acc + item.qty * item.price,
    0
  );

  const tax = subtotal * 0.0816;
  const total = subtotal + tax;

  return (
    <div className="cartpage">
      <h1>Your Cart</h1>
      {cart.length === 0 && <p>Your cart is empty</p>}

      {cart.map((item) => (
        <div key={item.title} className="cartitem">
          <img src={item.image} alt={item.title} className="cartitem-image" />
          <div>
            <h3>{item.title}</h3>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.qty}</p>
            <button onClick={() => removeFromCart(item.title)}>Remove</button>
          </div>
        </div>
      ))}

      {cart.length > 0 && (
        <>
          <h2>Subtotal: ${subtotal.toFixed(2)}</h2>
          <h2>NY Sales Tax (8.16%): ${tax.toFixed(2)}</h2>
          <h2>Total: ${total.toFixed(2)}</h2>
        </>
      )}
    </div>
  );
};

export default Cart;
