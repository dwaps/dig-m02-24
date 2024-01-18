export function todosReducer(currentState, action) {
  switch (action.type) {
    case UPDATE_TODOS:
      return { ...currentState, todolist: action.payload };
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
