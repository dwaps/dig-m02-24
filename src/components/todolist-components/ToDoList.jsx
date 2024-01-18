import "./ToDoList.scss";

import { Link } from "react-router-dom";
import { tasks } from "../../models/index";
import TaskItem from "./TaskItem";

import { useEffect } from "react";

function ToDoList() {
  useEffect(() => {
    async function getTodos() {
      const res = await fetch("http://localhost:3000/books");
      try {
        if (res.ok) {
          const todos = await res.json();
          if (todos) {
            tasks = todos;
          }
        }
      } catch (e) {
        console.error("Erreur lors de la récupération des données");
      }
    }
  });
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
