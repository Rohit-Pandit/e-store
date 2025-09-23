import React,{useState,useEffect} from 'react';
import './Menu.css';
import Category from '../category/Category.jsx';

const Menu = () => {
     const [result,setResult] = useState([]);
    
      useEffect(()=>{
           fetch("http://localhost:3001/categories")
           .then(res => res.json())
           .then(data=>{
            setResult(data)
           })
           .catch(err => console.error("Error fetching:", err));
      },[])

      const handleCategoryOnclick = id=>(alert(id))
        
      const renderCategory = ()=>{
        return (
              result.map(d=>(
                <Category key={d.id} id={d.id} title ={d.title} cateogryClick= {()=>handleCategoryOnclick(d.id)}/>
            ))
        );
      }
  return (
    <div className='menu'>
        {result && renderCategory()}
    </div>
  )
}

export default Menu