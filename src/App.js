import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Category from './Components/Category';
import { getCategories, getProducts } from './Components/Fetcher';
import CategoryProducts from './Components/CategoryProducts';


function App() {
  const [categoriesU, setCategoriesU] = useState({errorMessage : '', data:[]});
  const [productsU, setProductsU] = useState({errorMessage : '', data:[]});

  const hasFetched = useRef(false);

  useEffect(() => {
    if (!hasFetched.current) {
      hasFetched.current = true; // Ensure fetch only runs once
      const fetchData = async()=>{
      const responseObj = await getCategories();
      setCategoriesU(responseObj)
      }
      fetchData();
    }
  }, []);

  const categoryClickHandle = id =>{
    const fetchData = async()=>{
      const responseObj = await getProducts(id);
      setProductsU(responseObj)
      }
      fetchData();
  }
  const renderCategory = ()=>{
    //using for loop
    const categories = categoriesU.data.length > 0 ? (
      categoriesU.data.map((item) => (
        <Category 
          key={item.id} 
          id={item.id} 
          title={item.title} 
          categoryClick={() => categoryClickHandle(item.id)} 
        />
      ))
    ) : (
      <p>No categories available</p>
    );
    
    return categories;
    
    
  }

  const renderProduct = ()=>{
  //using map
      return productsU.data.map( p=>
        <CategoryProducts key={p.id} {...p}>{p.title} </CategoryProducts>
      )
  }

  return (
    <>
    <header>My store</header>
    <section>
      <nav>
        {categoriesU.errorMessage && <div> Error: {categoriesU.errorMessage}</div>}
        {
          categoriesU.data && renderCategory()
        }
      </nav>
      <article>
        <h1>Products</h1>
        {productsU.errorMessage && <div> Error: {productsU.errorMessage}</div>}
        { productsU.data && renderProduct()}
      </article>
    </section>
    <footer>
      footer
    </footer>
    </>
    
  );
}

export default App;
