import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CardContextProvider from './Contexts/cardContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
      <CardContextProvider>
        <App/>
      </CardContextProvider>
    
 </React.StrictMode>


);

//<Route path='products/:productId' element={<ProductDetails/>}></Route>   colon is very important to tell the url that it is a dynamic value 
