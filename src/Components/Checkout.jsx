import React, { useContext, useState } from "react";
import { CardContext } from "../Contexts/cardContext";
import "./Checkout.css";

export default function CheckOut() {
  const { getItems } = useContext(CardContext);
  const cartItems = getItems();

  // Calculate total amount
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Form state
  const [form, setForm] = useState({
    name: "",
    address: "",
    city: "",
    zip: "",
    country: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
  };

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>

      {/* Order Summary */}
      <div className="order-summary">
        <h2>Order Summary</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <span>{item.title} (x{item.quantity})</span>
                <span>₹{item.price * item.quantity}</span>
              </li>
            ))}
          </ul>
        )}
        <hr />
        <h3>Total Amount: ₹{totalAmount}</h3>
      </div>

      {/* Shipping Address Form */}
      <form onSubmit={handleSubmit}>
        <h2>Shipping Address</h2>
        <label>
          Full Name:
          <input type="text" name="name" value={form.name} onChange={handleChange} required />
        </label>

        <label>
          Address:
          <textarea name="address" value={form.address} onChange={handleChange} required />
        </label>

        <label>
          City:
          <input type="text" name="city" value={form.city} onChange={handleChange} required />
        </label>

        <label>
          Zip Code:
          <input type="text" name="zip" value={form.zip} onChange={handleChange} required />
        </label>

        <label>
          Country:
          <input type="text" name="country" value={form.country} onChange={handleChange} required />
        </label>

        <button type="submit" className="confirm-btn">Confirm Order</button>
      </form>
    </div>
  );
}
