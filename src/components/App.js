import { useEffect, useState } from "react";
import Logo from "./Logo";
import Form  from "./Form";
import PackageList  from "./PackageList";
import Stats  from "./Stats";
import { supabase } from "../supabaseClient";

export default function App(){

  const [items,setItems] = useState([])
  
  // following effect will get existing items from the DB
  useEffect(() => {
    const fetchItems = async () => {
      const {data,error} = await supabase.from("items").select("*");
      if (error) console.error(error)
      else setItems(data)
    }
    fetchItems() 
  },[])


  async function handleClearList(){
    const ok = window.confirm('Are you sure you want to clear all items?')
    if (!ok )return 
    const {error} = await supabase.from("items").delete().gt('id',0)
    if (error) { console.error(error); return; }
    setItems([]);
  }

  function handleAddItems(item){
    setItems(items => [...items,item])
    console.log(item)
  }

  async function handleDeleteItems(id){
    const {error} = await supabase.from("items").delete().eq('id',id)
    if (error) {
      console.error(error)
      return
    }
    setItems(items=>items.filter(item => item.id !== id))
  }

  async function handleToggleItem(id,packed){
    const {data,error} = await supabase.from("items").update({ packed: !packed }).eq('id',id).select().single()
    if (error) { console.error(error); return; }
    setItems(items => items.map(i=> (i.id === id ? data : i)))

    // setItems(items=>items.map(item => item.id === id ? { ...item ,packed : !item.packed} : item ))
  }

  return <div className="app">
  <Logo />
  <Form onAddItems={handleAddItems}/>
  <PackageList  items={items} OnDeleteItems={handleDeleteItems} onToggleItems={handleToggleItem} onClearList={handleClearList} />
  <Stats items = {items} />
  </div>
}


