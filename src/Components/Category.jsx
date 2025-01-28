import React from 'react'

export default function Category(props) {
  return (
    <div key={props.id} onClick={()=>props.categoryClick(props.id)}>
        {props.title}
    </div>
  )
}
