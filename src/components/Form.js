import { useState } from "react";
import { initialItems } from "../App";

// ADD ITEM FORM
export function Form({ onAddItem }) {
  const [description, setdescription] = useState("");
  const [quantity, setquantity] = useState(1);

  // Function to add new items to array from form
  function handleClick(e) {
    e.preventDefault();

    const newItem = { description, quantity, packed: false, id: Date.now() };

    initialItems.push(newItem);

    // calling the funcion from main component to change state of items array.
    onAddItem(newItem);

    // resetting the the form fields.
    setdescription("");
    setquantity(1);
  }

  return (
    // Form
    <form className="add-form" onSubmit={handleClick}>
      <h3>What you want from your trip ?</h3>

      <select
        value={quantity}
        onChange={(e) => setquantity(Number(e.target.value))}
      >
        {Array.from({ length: 5 }, (_, i) => i + 1).map((i) => (
          <option value={i} key={i}>
            {i}
          </option>
        ))}
      </select>

      <input
        placeholder="item..."
        value={description}
        onChange={(e) => setdescription(e.target.value)}
      ></input>

      <button>ADD</button>
    </form>
  );
}
