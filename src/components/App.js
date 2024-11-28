import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

function App() {
  const [items, setItems] = useState([]) 
  function handelAddItem(newItem) {
    setItems((prevItems) => {
      let itemExists = false;

     
      const updatedItems = prevItems.map((item) => {
        if (item.description.toLowerCase() === newItem.description.toLowerCase()) {
          itemExists = true;
          return { ...item, quantity: item.quantity + newItem.quantity };
        }
        return item;
      });

      
      if (!itemExists) {
        if (newItem.necessary) {
          return [newItem, ...updatedItems]; 
        } else {
          return [...updatedItems, newItem]; 
        }
      }

      return updatedItems; // If updated, return the list with updated quantities
    });
  }

  function handleDelete(id){
    setItems((prevItems)=> prevItems.filter((item)=>item.id!==id));
  }
  function handleUpdate(id) {
    setItems((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      );
      return updatedItems.sort((a, b) => a.packed -b.packed);
    });
  }
  return (
    <div className="app">
      <Logo />
      <Form handelAddItem={handelAddItem} />
      <PackingList items={items} handleDelete={handleDelete} handleUpdate={handleUpdate} setItems={setItems} />
      <Stats  items={items} />
    </div>
  );
}

export default App;
