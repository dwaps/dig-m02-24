import { useFetchData } from "./utils/hooks";
import "./App.css";

function App() {
  const { data: todos, loading } = useFetchData("http://localhost:3000/books");

  return (
    <>
      {loading ? (
        <div className="loading"></div>
      ) : (
        <>
          {todos.map((t) => (
            <div key={t.id}>
              <span>{t.txt}</span> - {t.done ? "FAIT" : "PAS FAIT"}
              <button>Supprimer</button>
            </div>
          ))}
        </>
      )}
    </>
  );
}

export default App;
