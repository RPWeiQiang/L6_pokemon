export default function Stats({items}) {
    const totalItems=items.length
    const packedItems=items.filter((item)=>item.packed===true).length
    const packedPercentage= Math.round((packedItems/totalItems)*100)
    return (
      <footer className="stats">
        {packedPercentage===100?<em>You got everything!</em>:<em>You have {totalItems} items in the list. You already packed {packedItems} ({packedItems>0?packedPercentage:0}%).</em>}
      </footer>
    );
  }