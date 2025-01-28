import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from './Fetcher';
import './ProductDetails.css';

export default function ProductDetails() {
  const [product, setProduct] = useState({ errorMsg: '', data: {} });
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const responseObj = await getProductById(params.productId);
      setProduct(responseObj);
    };
    fetchData();
  }, [params.productId]);

  return (
    <div className="product-details-container">
      {/* Row 1: Image and Details */}
      <div className="product-details-row">
        {/* Column 1: Image */}
        <figure className="product-details-image">
          <img src={`/assets/${product.data.image}`} alt={product.data.title} />
        </figure>

        {/* Column 2: Details */}
        <div className="product-details-info">
          <h1 className="product-details-title">{product.data.title}</h1>
          <ul className="product-details-specs">
            {product.data.specs &&
              Object.entries(product.data.specs).map(([key, value], i) => (
                <li key={i}>
                  <strong>{key}: </strong>
                  {value}
                </li>
              ))}
          </ul>
          <div className="product-details-features">
            <h2>Features</h2>
            <ul>
              {product.data.features?.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>
          <div className='product-details-description'>
            <h3>Description</h3>
            {product.data.description}
          </div>
        </div>
      </div>

      {/* Row 2: Price, Stock, and Add Button */}
      <div className="product-details-row product-details-finance">
        <div className="product-details-price">
          &pound;{product.data.price}
        </div>
        <div className="product-details-stock">
          <label>Stock Level: {product.data.stock}</label>
          <br />
          <label>FREE Delivery</label>
        </div>
        <button className="product-details-add-button">Add Product</button>
      </div>
    </div>
  );
}
