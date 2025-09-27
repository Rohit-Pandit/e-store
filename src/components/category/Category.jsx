import React from 'react';
import './Category.css'

const Category = ({id,title,cateogryClick}) => {
  return (
    <div className='category' key={id} onClick={()=>cateogryClick()}>
        <button id='title'>{title}</button>
    </div>
  )
}

export default Category