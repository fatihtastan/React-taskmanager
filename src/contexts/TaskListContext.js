import React, { createContext, useState } from "react";
import uuid from "uuid";
export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {
  const [tasks, setTasks] = useState([
    { title: "Learn React", id: 1 },
    { title: "Find Job", id: 2 },
    { title: "Lose weight", id: 3 },
    { title: "Fuck The girls", id: 4 },
  ]);
  const [editItem, seteditItem] = useState(null);

  const [search, setsearch] = useState("");

  const addTask = (title) => {
    setTasks([...tasks, { title: title, id: uuid() }]);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const clearTasks = () => {
    setTasks([]);
  };
  const findItem = (id) => {
    const item = tasks.find((task) => task.id === id);
    seteditItem(item);
  };
  const editTask = (title, id) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { title, id } : task
    );

    setTasks(newTasks);
    seteditItem(null);
  };
  return (
    <TaskListContext.Provider
      value={{
        tasks,
        addTask,
        removeTask,
        clearTasks,
        findItem,
        editTask,
        editItem,
        search,
        setsearch,
      }}
    >
      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
