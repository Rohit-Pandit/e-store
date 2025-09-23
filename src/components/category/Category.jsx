import React from 'react';
import './Category.css'

const Category = ({id,title,cateogryClick}) => {
  return (
    <div className='category' key={id} onClick={()=>cateogryClick()}>
        {title}
    </div>
  )
}

export default Category