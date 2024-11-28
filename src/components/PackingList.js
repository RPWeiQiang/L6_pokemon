import { useState } from "react";
import Clear from "./Clear";
import Search from "./Search";
import Item from "./Item";

export default function PackingList({items,handleDelete,handleUpdate,setItems}) {
    const [searchQuery, setSearchQuery] = useState("");
  
    const filteredItems = items.filter((item) =>
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    return (
      <div className="bg-color">
        <div className="top-container">
          <Clear setItems={setItems} />
          <Search setSearchQuery={setSearchQuery} />
        </div>
        <div className="list">
          <ul>
          {filteredItems.map((item) => (
            <Item key={item.id} item={item} handleDelete={() => handleDelete(item.id)} handleUpdate={() => handleUpdate(item.id)} />
          ))}
          </ul>
        </div>
      </div>
    );
  }