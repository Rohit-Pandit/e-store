import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function Layout({ categories }) {
  const renderCategory = () => {
    if (!categories || !categories.data || categories.data.length === 0) {
      return <p>No categories available</p>;
    }

    return categories.data.map((item) => (
      <li key={item.id}>
        <Link to={`categories/${item.id}`}>{item.title}</Link>
      </li>
    ));
  };

  return (
    <>
      <header>
        <h1>My Store</h1>
      </header>
      
      <section >
        {/* Sidebar Navigation */}
        <nav >
          {categories.errorMessage && <div>Error: {categories.errorMessage}</div>}
          <ul>{renderCategory()}</ul>
        </nav>

        {/* Main Content */}
        <article >
          <Outlet />
        </article>
      </section>
      
      <footer >
      <Link to='/' style={{ color: "white", textDecoration: "none", margin: "0 10px"}}>Home</Link> | 
      <Link to='./Basket' style={{ color: "white", textDecoration: "none", margin: "0 10px" }}>Basket</Link>
      </footer>
    </>
  );
}
