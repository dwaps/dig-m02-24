import { useFetchData } from "../models/utils/hooks";
import "./TodoList.css";

function TodoList() {
  const { data: todos, loading } = useFetchData("http://localhost:3000/tasks");

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

export default TodoList;
