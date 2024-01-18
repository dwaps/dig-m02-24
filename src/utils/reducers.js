import { ADD_TODO, CHANGE_TODO_STATUS, DELETE_TODO } from "./actions";

export function todosReducer(currentState, action) {
  switch (action.type) {
    case CHANGE_TODO_STATUS:
      return {
        ...currentState,
        todolist: currentState.todolist.map((t) => {
          if (t.id == action.payload.id) {
            t.done = action.payload.done;
          }
          return t;
        }),
      };
    case ADD_TODO:
      return {
        ...currentState,
        todolist: [...currentState.todolist, action.payload],
      };
    case DELETE_TODO:
      return {
        ...currentState,
        todolist: currentState.todolist.filter((t) => t.id !== action.payload),
      };
    default:
      console.error("Action inconnue");
  }
}
