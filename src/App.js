import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Menu from './components/menu/Menu';
import Content from './components/content/Content';

function App() {
 
    const [products, setProducts] = useState([]);

  return (
    
     <div className='app'>
      <div className="header">
        <Header/>
      </div>
      <div className="menu">
        <Menu setProducts = {setProducts}/>
      </div>
      <div className="content">
        <Content products={products}/>
      </div>
      <div className="footer">
        <Footer/>
      </div>
     </div>
   
    
  );
}

export default App;
