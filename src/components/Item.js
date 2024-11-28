
export default function Item({ item, handleDelete,handleUpdate }) {
    const itemStyle = {
      textDecoration: item.packed ? "line-through" : "",
      background: item.necessary ? "#f4a226" : "",
      padding: item.necessary ? "1rem" : "",
      borderRadius: item.necessary ? "1rem" : "",
      color: item.necessary ? " #5a3e2b" : "",
    };
  
    return (
      <li>
        <div style={itemStyle} onClick={handleUpdate}>
        <i className={!item.packed?"fa-regular fa-square":"fa-solid fa-square-check"}></i> 
        {item.description} ({item.quantity}) 
        <i class="fa-solid fa-x" onClick={handleDelete}></i>
        </div>
      </li>
    )
  }