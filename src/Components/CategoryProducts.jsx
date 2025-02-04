import React, { useContext } from 'react';
import './CategoryProduct.css';
import { Link, useNavigate } from 'react-router-dom';
import { CardContext } from '../Contexts/cardContext';

export default function CategoryProducts({ id, title, image, specs, features, price, stock }) {
  const navigate = useNavigate();
  const cardContext = useContext(CardContext);
  const { addProduct } = cardContext;

  return (
    <article className="category-product-item">
      <div className="category-product-item-title">
        <Link to={`products/${id}`}>{title}</Link>
      </div>

      <figure className="category-product-item-image-container">
        <img src={`/assets/${image}`} alt={title} />
      </figure>

      <aside className="category-product-item-info">
        {specs?.capacity && (
          <div className="category-product-item-info-capacity">
            <h1>Capacity</h1>
            <label>{specs.capacity}</label>
          </div>
        )}

        <div className="category-product-item-info-features">
          <h1>Features</h1>
          <ul>
            {features?.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>
      </aside>

      <aside className="category-product-item-finance">
        <div className="category-product-item-finance-price">
          &pound;{price}
        </div>
        <div className="category-product-item-info-stock">
          <label>Stock Level: {stock}</label>
          <label>FREE Delivery</label>
        </div>
        <div className="category-product-item-action">
          <button onClick={() => navigate(`products/${id}`)}>View Product</button>
          <button onClick={()=>addProduct({id,title,price})}>Add Product</button>
        </div>
      </aside>
    </article>
  );
}
