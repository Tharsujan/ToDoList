import React from 'react'
import { FaTrash } from "react-icons/fa";
const LineItem = ({items, handleCheck, handleDelete}) => {
  return (
        <li className='item' key={items.id}>
        <input
        type='checkbox'
        onChange={() => handleCheck(items.id)}
        checked={items.checked}/>
        <label style={(items.checked)?{textDecoration:"line-through"} :null}onDoubleClick={() => handleCheck(items.id)}>{items.item}</label>
        <FaTrash
        role='button'
        onClick={() =>handleDelete(items.id)}
        tabIndex='0'
        aria-label={`Delete ${items.item}`}
        />

    </li>
  )
}

export default LineItem