// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Logo } from "./components/Logo";
import { Form } from "./components/Form";
import { PackingList } from "./components/PackingList";
import { Stats } from "./components/Stats";

export const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Towel", quantity: 2, packed: false },
];

// ROOT COMPONENT
function App() {
  const [items, setitems] = useState(initialItems);

  function handleNewitems(newItem) {
    setitems((items) => [...items, newItem]);
  }

  function handleDeleteItem(id) {
    setitems((items) => items.filter((e) => e.id !== id));
  }

  function handletoggleItem(id) {
    setitems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearItem() {
    const confirm = window.confirm(
      "are you sure you want to delete all items ?"
    );

    if (confirm) setitems([]);
  }

  return (
    <div className="app">
      <Logo></Logo>
      <Form onAddItem={handleNewitems}></Form>
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handletoggleItem}
        onClearList={handleClearItem}
      ></PackingList>
      <Stats items={items}></Stats>
    </div>
  );
}

export default App;
