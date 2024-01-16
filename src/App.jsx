import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <button onClick={() => setCount(count + 1)}>Ajouter</button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count - 1)}>Soustraire</button>
    </div>
  );
}

export default App;
