import { useReducer } from "react";
import { todosReducer } from "./utils/reducers";
import { todos } from "./models";
import { CHANGE_TODO_STATUS, DELETE_TODO } from "./utils/actions";

function App() {
  const [state, dispatch] = useReducer(todosReducer, {
    todolist: todos,
  });

  return (
    <>
      {state.todolist.map((t) => (
        <div key={t.id}>
          <span
            onClick={() =>
              dispatch({
                type: CHANGE_TODO_STATUS,
                payload: {
                  id: t.id,
                  done: !t.done,
                },
              })
            }
          >
            {t.txt}
          </span>{" "}
          - {t.done ? "FAIT" : "PAS FAIT"}
          <button
            onClick={() =>
              dispatch({
                type: DELETE_TODO,
                payload: t.id,
              })
            }
          >
            Supprimer
          </button>
        </div>
      ))}
    </>
  );
}

export default App;
