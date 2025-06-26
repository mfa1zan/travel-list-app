import { useState } from "react";
import Logo from "./Logo";
import Form  from "./Form";
import PackageList  from "./PackageList";
import Stats  from "./Stats";

export default function App(){

  const [items,setItems] = useState([])
  
  function handleClearList(){
    const confirm = window.confirm('Are you sure you want to clear all items?')
    if (confirm )setItems([])
  }

  function handleAddItems(item){
    setItems(items => [...items,item])
  }

  function handleDeleteItems(id){
    setItems(items=>items.filter(item => item.id !== id))
  }

  function handleToggleItem(id){
    setItems(items=>items.map(item => item.id === id ? { ...item ,packed : !item.packed} : item ))
  }

  return <div className="app">
  <Logo />
  <Form onAddItems={handleAddItems}/>
  <PackageList  items={items} OnDeleteItems={handleDeleteItems} onToggleItems={handleToggleItem} onClearList={handleClearList} />
  <Stats items = {items} />
  </div>
}


