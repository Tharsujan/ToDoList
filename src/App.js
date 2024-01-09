import AddItem from "./AddItem";
import Content from "./Content";
import { Footer } from "./Footer";
import { Header } from "./Header";
import SearchItem from "./SearchItem";
import "./index.css"
import React, { useState } from 'react'

function App() {
  const [item,Setitem] =useState([
    {id:1,checked:true,item:"Practise Coding"},
    {id:2,checked:false,item:"Play Cricket"},
    {id:3,checked:false,item:"Read about AI"},


   ]
 
   )

   const [newItem , setNewItem] =useState('')
   const [search ,setSearch] =useState("")
   const addItem =(item) =>{
    const id = item.length ? item[item.length -1].id +1 : 1;
     const addNewItem ={id,checked:false,item}
     const listItems= [...item,addNewItem]
     Setitem(listItems)
     localStorage.setItem("todo_list", JSON.stringify(listItems))
   };
   const handleCheck = (id)=>{
       const listItems=item.map((item) => item.id===id ? {...item,checked: !item.checked} : item)
       Setitem(listItems)
       localStorage.setItem("todo_list" , JSON.stringify(listItems))
   }
    const handleDelete = (id) =>{
      const listItems = item.filter((item) => item.id!== id)
      Setitem(listItems)
      localStorage.setItem("todo_list" , JSON.stringify(listItems))

    }

    const handleSubmit = (e) => {
      e.preventDefault()
   
      if(!newItem) return;
      console.log(newItem)
      addItem(newItem)
      setNewItem('')

    }
  return (
    <div className="App">
     <Header /> 
     <AddItem
      newItem={newItem}
      setNewItem={setNewItem}
      handleSubmit={handleSubmit}
     />
     <SearchItem
       search={search}
       setSearch={setSearch}
     />
     <Content
         item={item.filter(items => ((items.item).toLowerCase()).includes(search.toLowerCase()))}
         handleCheck={handleCheck}
         handleDelete={handleDelete} 
     />
     <Footer
     length= {item.length}
     />
    </div>
  );
}

export default App;
