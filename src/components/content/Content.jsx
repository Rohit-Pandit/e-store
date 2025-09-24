import React from 'react';
import './Content.css'

const Content = ({products}) => {
  
    if (!products || products.length === 0) {
      return <div className="content">No products to show</div>;
    }

  return (
    <div className="content">
      {products.map(p => (
        <div key={p.id} className="product-card">
          <h3>{p.title}</h3>
          <p>Price: ${p.price}</p>
          <img src={`/assets/${p.image}`} alt="" />
          <p>{p.description}</p>
          <p>{p.stock}</p>
        </div>
      ))}
    </div>
  );
}

export default Content


//{id,title,image,description,specs,features,stock}