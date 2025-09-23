import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Menu from './components/menu/Menu';
import Content from './components/content/Content';

function App() {
 
  const [result,setResult] = useState("");

  useEffect(()=>{
       fetch("http://localhost:3001/categories")
       .then(res => res.json())
       .then(data=>{
        console.log(data)
        setResult(data)
       })
  },[])

  return (
    
     <div className='app'>
      <div className="header">
        <Header/>
      </div>
      <div className="menu">
        <Menu/>
      </div>
      <div className="content">
        <Content/>
      </div>
      <div className="footer">
        <Footer/>
      </div>
     </div>
   
    
  );
}

export default App;
