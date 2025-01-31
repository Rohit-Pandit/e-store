import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from './Fetcher';
import CategoryProducts from './CategoryProducts'
export default function Category(props) {
   const [products, setProducts] = useState({ errorMsg: '', data: [] });
  const {categoryId} = useParams();
  useEffect(()=>{
    const fetchData = async ()=>{
      const responseObj = await getProducts(categoryId);
      setProducts(responseObj);
    }
    fetchData();
  },[categoryId])


  const renderProducts = ()=>{
    //using map
        return products.data.map( p=>
          <CategoryProducts key={p.id} {...p}>
            {p.title} 
          </CategoryProducts>
        )
    }


  return (
    <div>
      <h1>Products</h1>
        {products.errorMessage && <div> Error: {products.errorMessage}</div>}
        { products.data && renderProducts()}
    </div>
  )
}
