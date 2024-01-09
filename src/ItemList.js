 import React from 'react'

import LineItem from './LineItem';

 const ItemList = ({item, handleCheck, handleDelete}) => {
   return (
    <ul>
    {item.map((items) => 
    <LineItem
        items={items}
        key={items.id}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
    /> 
)
} 
</ul>
   )
 }
 
 export default ItemList