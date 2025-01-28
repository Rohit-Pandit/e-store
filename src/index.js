import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ProductDetails from './Components/ProductDetails';
import Basket from './Components/Basket';
import Checkout from './Components/Checkout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <App />}/>
      <Route path='basket' element={<Basket/>}></Route>
      <Route path='checkout' element={<Checkout/>}></Route>
      <Route path='products/:productId' element={<ProductDetails/>}></Route>  
    </Routes>
  </BrowserRouter>
 </React.StrictMode>


);

//<Route path='products/:productId' element={<ProductDetails/>}></Route>   colon is very important to tell the url that it is a dynamic value 
