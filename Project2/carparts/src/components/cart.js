import React from "react";
import '../App.css';

const Cart = ({ cartItems, removeFromCart }) => {
  const subtotal = Object.values(cartItems).reduce((sum, item) => sum + item.price * item.qty, 0);
  const tax = subtotal * 0.0816;
  const total = subtotal + tax;

  return (
    <div className="cartPage">
      <h2>Shopping Cart</h2>
      {Object.keys(cartItems).length === 0 && <p>Your cart is empty.</p>}
      {Object.values(cartItems).map(item => (
        <div className="cartItem" key={item.name}>
          <img className="cartImg" src={item.image} alt={item.name} />
          <div>
            <h4>{item.name}</h4>
            <p>Quantity: {item.qty}</p>
            <p>Price: ${item.price * item.qty}</p>
            <button onClick={() => removeFromCart(item.name)}>Remove</button>
          </div>
        </div>
      ))}
      {Object.keys(cartItems).length > 0 && (
        <div className="cartTotals">
          <p>Subtotal: ${subtotal.toFixed(2)}</p>
          <p>NY Sales Tax (8.16%): ${tax.toFixed(2)}</p>
          <p>Total: ${total.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
