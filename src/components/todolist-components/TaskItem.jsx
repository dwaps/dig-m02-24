import "./TaskItem.scss";
import { useReducer, useState } from "react";

function TaskItem(props) {
  function statusReducer(state, action) {
    switch (action.type) {
      case "CHANGE_STATUS":
        return { ...state, status: action.payload };
      default:
        throw Error("Action non reconnue : ", action.type);
    }
  }

  const [isDone, setIsDone] = useState(false);
  const [state, dispatch] = useReducer(statusReducer, { status: isDone });

  function onClick() {
    setIsDone(!isDone);
    console.log("clic : isDone " + isDone);
    dispatch({ type: "CHANGE_STATUS", payload: isDone });
  }

  return (
    <div
      className={"task-box " + (state.status ? "done" : "notdone")}
      onClick={() => onClick()}
    >
      <h2>{props.task.title}</h2>
      <p>{props.task.description}</p>
      <p>{state.status ? "Fait!" : "A faire"}</p>
    </div>
  );
}

export default TaskItem;
