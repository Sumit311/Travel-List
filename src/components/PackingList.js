import { useState } from "react";
import { Item } from "./Item";

// LIST OF ITEMS
export function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearList,
}) {
  // Sorting items Code
  const [sortBy, setsortBy] = useState("input");

  let sortedItem;

  // Default sort
  if (sortBy === "input") sortedItem = items;

  if (sortBy === "description") {
    sortedItem = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }

  if (sortBy === "quantity") {
    sortedItem = items.slice().sort((a, b) => a.quantity - b.quantity);
  }

  if (sortBy === "packed") {
    sortedItem = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  // calling ITEM component with props and sorted list
  return (
    <div className="list">
      <ul>
        {sortedItem.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setsortBy(e.target.value)}>
          <option value="input">sort by input order</option>
          <option value="packed">sort by packed item</option>
          <option value="description">sort by description</option>
          <option value="quantity">sort by quantity</option>
        </select>

        <button className="btn" onClick={onClearList}>
          Clear List
        </button>
      </div>
    </div>
  );
}
