import React, { useContext, useState, useEffect } from "react";
import { TaskListContext } from "../contexts/TaskListContext";

const TaskForm = () => {
  const { addTask, clearTasks, editItem, editTask } = useContext(
    TaskListContext
  );

  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
    console.log(title);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editItem === null) {
      addTask(title);
      setTitle("");
    } else {
      editTask(title, editItem.id);
    }
  };

  useEffect(() => {
    editItem !== null ? setTitle(editItem.title) : setTitle("");
  }, [editItem]);

  return (
    <div>
      <hr className="horizontal-line" />
      <form onSubmit={handleSubmit} className="form">
        <input
          onChange={handleChange}
          value={title}
          type="text"
          className="task-input"
          placeholder="Add Task..."
          required
        />
        <div className="buttons">
          <button type="submit" className="btn add-task-btn">
            Add Task
          </button>
          <button
            type="button"
            onClick={() => {
              clearTasks();
              setTitle("");
            }}
            className="btn clear-btn"
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
