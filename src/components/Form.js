import { useState } from "react";
import { supabase } from "../supabaseClient";

export default function Form({ onAddItems }) {

  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);



  async function handleSubmit(e) {
    e.preventDefault();
    
    if (!description) return;

    const { data, error } = await supabase
  .from('items')
  .insert([{ description, quantity, packed: false }])
  .select()
  .single();


    if(error) {
      console.log(error)
      return 
    }

    setDescription("");
    setQuantity(1);
    onAddItems(data);


    // const newItem = { description, quantity, id: Date.now(), packed: false };
    // console.log(newItem);

    // setDescription("");
    // setQuantity(1);
    // onAddItems(newItem);
  }

  return (<form className="add-form" onSubmit={handleSubmit}>
    <h3>What do you need for your trip 😍?</h3>
    <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
      {Array.from({ length: 20 }, (_, i) => i + 1).map(num => <option value={num} key={num}>{num}</option>)}
    </select>
    <input type="text" placeholder="Item..." value={description} onChange={(e) => setDescription(e.target.value)}></input>
    <button>Add</button>
  </form>);
}
