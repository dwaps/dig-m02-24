import "./ToDoList.scss";

import { Link } from "react-router-dom";
import { tasks } from "../../models/index";
import TaskItem from "./TaskItem";

function ToDoList() {
  return (
    <div>
      <h1>Mes tâches du jour</h1>
      <div className="tasks-list">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
      <Link to="/">
        <button>Retour</button>
      </Link>
    </div>
  );
}

export default ToDoList;
