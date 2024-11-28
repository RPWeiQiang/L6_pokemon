export default function Clear({ setItems }) {
    function handleClearAll() {
      setItems([]);
    }
  
    function handleClearPacked() {
      setItems((prevItems) => prevItems.filter((item) => !item.packed));
    }
  
    return (
      <div className="search-form">
        <button className="clear-btns" onClick={handleClearAll}>Clear All</button>
        <button className="clear-btns" onClick={handleClearPacked}>Clear Packed</button>
      </div>
    );
  }