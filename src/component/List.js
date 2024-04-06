import React from 'react'

function List(props) {
  return (
    <>
    <li className='list-item'>
    {props.item}
    <span className='icons'>
        <i className="fa-solid fa-trash-can icon-delete" 
        onClick={(e)=>{
            props.delete(props.index)
        }}
        ></i>
    </span>
    </li>
    </>
  )
}

export default List