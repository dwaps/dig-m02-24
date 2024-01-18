import { useFetchData } from "./utils/hooks";

function App() {
  const todos = useFetchData("http://localhost:3000/books");

  return (
    <>
      {todos.map((t) => (
        <div key={t.id}>
          <span>{t.txt}</span> - {t.done ? "FAIT" : "PAS FAIT"}
          <button>Supprimer</button>
        </div>
      ))}
    </>
  );
}

export default App;
