import React,{useState,useEffect} from 'react';
import './Menu.css'

const Menu = () => {
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
    <div className='menu'>
        {
            result && result.map(d=>(
                <div key={d.id}>{d.title}</div>
            ))
        }
    </div>
  )
}

export default Menu