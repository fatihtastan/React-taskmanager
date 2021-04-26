import React, { useContext } from "react";
import { TaskListContext } from "../contexts/TaskListContext";
import Task from "./Task";

const TaskList = () => {
  const { tasks, search } = useContext(TaskListContext);

  // task.title.includes(search) == new RegExp(search, "i").test(task.title)
  return (
    <div>
      <ul className="list">
        {tasks.length ? (
          tasks.map((task) => {
            return new RegExp(search, "i").test(task.title) ? (
              <Task task={task} key={task.id} />
            ) : null;
          })
        ) : (
          <li className="no-tasks">No Tasks</li>
        )}
      </ul>
    </div>
  );
};

export default TaskList;
