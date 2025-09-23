import React, { useState, useEffect } from 'react';
import './App.css';

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
    <>
     <div></div>
    </>
    
  );
}

export default App;
