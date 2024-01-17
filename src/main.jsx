import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TestUseEffect />
  </React.StrictMode>
);

function TestUseEffect() {
  const [recipes, setRecipes] = useState([]);
  const myRef = useRef(null);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data.recipes));
  }, []);

  return (
    <>
      <ul>
        {recipes.map((r) => (
          <li onClick={() => myRef.current.scrollIntoView()} key={r.id}>
            {r.name}
          </li>
        ))}
      </ul>
      <footer ref={myRef}>Pied de page</footer>
    </>
  );
}
