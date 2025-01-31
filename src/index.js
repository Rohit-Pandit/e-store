import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
    <App/>
 </React.StrictMode>


);

//<Route path='products/:productId' element={<ProductDetails/>}></Route>   colon is very important to tell the url that it is a dynamic value 
