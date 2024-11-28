import { useState } from "react";

export default function Search({ setSearchQuery }) {
    const [search, setSearch] = useState("")
  
    function handelSearch(e) {
      e.preventDefault();
      setSearchQuery(search);
    }
    function handleShowAll() {
      setSearch("");
      setSearchQuery(""); 
    }
  
  
    return (
      <form className="search-form" onSubmit={handelSearch}>
        <input type="text" placeholder="Search item..." value={search} onChange={(e) => setSearch(e.target.value)}></input>
        <button type="submit">Search</button>
        <button type="button" onClick={handleShowAll}>
          All
        </button>
      </form>
    )
  }