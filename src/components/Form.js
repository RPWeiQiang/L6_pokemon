import { useState } from "react"

export default function Form({ handelAddItem }) {
    const [description, setDescription] = useState("")
    const [quantity, setQuantity] = useState(1)
    const [necessary,setNecessary]=useState(false)
  
  
    function handelSubmit(e) {
      e.preventDefault()
      const item = {
        id: Date.now(),
        description,
        quantity,
        packed: false,
        necessary
      };
      handelAddItem(item)
      setDescription("");
      setQuantity(1);
      setNecessary(false);
    }
    
    function toggleFav() {
      setNecessary((prev) => !prev); 
    }
  
    return (
      <form className="add-form" onSubmit={handelSubmit}>
        <h3>What do you need to pack? </h3>
        <select id="quantity" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
          <option value={1}>1</option>
          <option value={2} >2</option>
          <option value={3}>3</option>
        </select>
        <input type="text" placeholder="Item..." value={description} onChange={(e) => setDescription(e.target.value)}></input>
        <i className={!necessary?"fa-solid fa-exclamation": "fa-solid fa-exclamation mark"} onClick={toggleFav} ></i>
        <button type="submit">Add</button>
      </form>
    );
  }