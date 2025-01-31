import React, { useState, useEffect, useRef } from 'react';
import './App.css';

import { getCategories } from './Components/Fetcher';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ProductDetails from './Components/ProductDetails';
import Basket from './Components/Basket';
import Checkout from './Components/Checkout';
import Category from './Components/Category';
import Layout from './Components/Layout';
import Home from './Components/Home';


function App() {
  const [categories, setCategories] = useState({errorMessage : '', data:[]});

  const hasFetched = useRef(false);

  useEffect(() => {
    if (!hasFetched.current) {
      hasFetched.current = true; // Ensure fetch only runs once
      const fetchData = async()=>{
      const responseObj = await getCategories();
      setCategories(responseObj)
      }
      fetchData();
    }
  }, []);


  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Layout categories={categories}/>}>
          <Route index element={<Home/>}/>
            <Route path='basket' element={<Basket/>}/>
            <Route path='checkout' element={<Checkout/>}/>
            <Route path='categories/:categoryId/products/:productId' element={<ProductDetails/>}/> 
            <Route path='categories/:categoryId' element={<Category/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App;
