import React, { useContext } from 'react';
import { CardContext } from '../Contexts/cardContext';
import { Link } from 'react-router-dom';
import './Basket.css';

export default function Basket() {
  const { getItems } = useContext(CardContext);
  const cardItems = getItems(); // Get cart items from context

  return (
    <div className="basket-container">
      <h1>Your Basket</h1>

      {cardItems.length > 0 ? (
        <div className="basket-items">
          {cardItems.map((p) => (
            <div className="basket-item" key={p.id}>
              <div className="basket-item-title">
                <Link to={`/categories/${p.id}/products/${p.id}`}>{p.title}</Link>
               
              </div>
              <div className="basket-item-quantity">Quantity: {p?.quantity ?? 1}</div>
      
              <div className="basket-item-price">Price: &pound;{p.price}</div>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-basket">The basket is currently empty</div>
      )}
    </div>
  );
}
