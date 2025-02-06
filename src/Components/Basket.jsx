import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import { CardContext } from "../Contexts/cardContext";
import "./Basket.css";

export default function Basket() {
  const { getItems, removeProduct, increaseQty, decreaseQty } =
    useContext(CardContext);
  const navigate = useNavigate();

  const cartItems = getItems();

  return (
    <div className="basket-container">
      <h1>Your Basket</h1>

      {cartItems.length === 0 ? (
        <p className="empty-basket">Your basket is currently empty.</p>
      ) : (
        <>
          <div className="basket-items">
            {cartItems.map((item) => (
              <div className="basket-item" key={item.id}>
                <Link to={`products/${item.id}`} className="basket-item-title">
                  {item.title}
                </Link>
                <div className="basket-item-quantity">
                  <button onClick={() => decreaseQty(item)} className="qty-btn">
                    <FaMinus />
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQty(item)} className="qty-btn">
                    <FaPlus />
                  </button>
                </div>
                <div className="basket-item-price">${item.price}</div>
                <button
                  onClick={() => removeProduct(item)}
                  className="remove-btn"
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>
          <button onClick={() => navigate("/checkout")} className="checkout-btn">
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
}
