import "./styles.css";
import { useState } from "react";
import Data from "./data";
import List from "./list";

export default function App() {
  const [input, setInput] = useState(Data);
  function clearAll() {
    setInput([]);
  }
  return (
    <div className="App">
      <h3> {input.length} birthdays today</h3>
      <List input={input} />
      <button onClick={clearAll}>Clear All</button>
    </div>
  );
}
